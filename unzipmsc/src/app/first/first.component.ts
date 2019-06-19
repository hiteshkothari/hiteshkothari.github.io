import { Component, OnInit } from '@angular/core';
import { AllService } from '../services/allservice';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  diagnostic: any;
  hints: any;
  constructor(public service: AllService) {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
    var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

    var colors = ['aqua', 'azure', 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral'];
    var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'

    var recognition = new SpeechRecognition();
    var speechRecognitionList = new SpeechGrammarList();

    speechRecognitionList.addFromString(grammar, 1);

    recognition.grammars = speechRecognitionList;
    //recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    // this.diagnostic = document.querySelector('.output');
    var bg = document.querySelector('html');
    // hints = document.querySelector('.hints');
    // hints = document.querySelector('.startButton');

    var colorHTML = [];
    colors.forEach(function (color, index) {
      console.log(color, index);
      // colorHTML += '<span class="w3-' + color + ';"> ' + color + ' </span>';
      colorHTML.push(color) ;
    });
    this.hints =  colorHTML ;
    setTimeout(() => {

      var button = document.getElementById('startButton');
      button.onclick = function () {
        recognition.start();
        console.log('Ready ');
      }
      var button1 = document.getElementById('stopButton');
      button1.onclick = function () {
        recognition.stop();
        console.log('Stoping .');
      }
    }, 5000)


    recognition.onresult = (event) => {
      var last = event.results.length - 1;
      var color = event.results[last][0].transcript;
      this.diagnostic = 'Result received: ' + color + '.';
      // bg.style.backgroundColor = color;
      console.log('Confidence: ' + event.results[0][0].confidence);
    }

    recognition.onspeechend = function () {
      recognition.stop();
    }
    recognition.onnomatch = (event) => {
      this.diagnostic = 'I didnt recognise that .';
    }
    recognition.onerror = (event) => {
      this.diagnostic = 'Error occurred in recognition: ' + event.error;
    }
  }
  ngOnInit() { }


}