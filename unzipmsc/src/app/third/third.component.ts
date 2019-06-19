import { Component, OnInit } from '@angular/core';
import Speech from 'speak-tts';

const speech = new Speech() // will throw an exception if not browser supported
@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  languagesSupported: any = { voices: [] };
  textToSpeak: string;

  constructor() {
    if (speech.hasBrowserSupport()) { // returns a boolean
      console.log("speech synthesis supported")
      this.setSpeakingSettings();
      this.getLanguagesSupported();
    } else {
      console.log("speech synthesis not supported")
    }
  }

  ngOnInit() {
  }

  getLanguagesSupported() {
    console.log(speech);
    speech.init(this.setSpeakingSettings()).then((data) => {
      // The "data" object contains the list of available voices and the voice synthesis params
      console.log("Speech is ready, voices are available", data)
      this.languagesSupported = data;
    }).catch(e => {
      console.error("An error occured while initializing : ", e)
    })
    // throw new Error("Method not implemented.");
  }

  setSpeakingSettings(): any {
    return {
      'volume': 1,
      'lang': 'en-GB',
      'rate': 1,
      'pitch': 1,
      'voice': 'Google UK English Male',
      'splitSentences': true,
      'listeners': {
        'onvoiceschanged': (voices) => {
          console.log("Event voiceschanged", voices)
        }
      }
    };


  }

  readText() {
    speech.speak({
      text: this.textToSpeak,
    }).then(() => {
      console.log("Success !")
    }).catch(e => {
      console.error("An error occurred while speaking:", e);
      console.error("May be some throat problem of the computer", e);
    });

    //   const list = window.document.createElement('div')
    //   let html = '<h2>Available Voices</h2><select id="languages"><option value="">autodetect language</option>'
    //   voices.forEach((voice) => {
    //     html += `<option value="${voice.lang}" data-name="${voice.name}">${voice.name} (${voice.lang})</option>`
    //   });
    //   list.innerHTML = html;
    //   window.document.body.appendChild(list);

    //   const speakButton = document.getElementById('play');
    //   const pauseButton = document.getElementById('pause');
    //   const resumeButton = document.getElementById('resume');
    //   const textarea = document.getElementById('text');
    //   const languages = document.getElementById('languages');
    //   speakButton.addEventListener('click', () => {
    //     const language = languages.value;
    //     const voice = languages.options[languages.selectedIndex].dataset.name;
    //     if (language) speech.setLanguage(languages.value)
    //     if (voice) speech.setVoice(voice)
    //     speech.speak({
    //       text: textarea.value,
    //       queue: false,
    //       listeners: {
    //         onstart: () => {
    //           console.log("Start utterance")
    //         },
    //         onend: () => {
    //           console.log("End utterance")
    //         },
    //         onresume: () => {
    //           console.log("Resume utterance")
    //         },
    //         onboundary: (event) => {
    //           console.log(event.name + ' boundary reached after ' + event.elapsedTime + ' milliseconds.')
    //         }
    //       }
    //     }).then((data) => {
    //       console.log("Success !", data)
    //     }).catch(e => {
    //       console.error("An error occurred :", e)
    //     })
    //   })
  }

}