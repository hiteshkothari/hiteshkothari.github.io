import { Component, OnInit } from '@angular/core';
import 'tracking/build/tracking';
// import face from './node_modules/tracking/build/data/face.js';
import 'tracking/build/data/face';
declare var window: any;
declare var tracking: any;
@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

  constructor() { }
  
  rectangleItemsFaces: Object[] = [];
  //IMAGE URL
  imgURL: string;
  MessageToDisplay: string = "";
  // = [{total: 11, width: 104, height: 104, x: 48, y: 34}];

  ngOnInit(): void {
    //Initialize the tracking object with parameters to track face only
    var tracker = new tracking.ObjectTracker('face');

    //Create an img object
    var img = new Image();

    /** IT IS IMPORTANT TO SET THE HEIGHT AND WIDTH 
     BECAUSE THE IMAGE MIGHT BE TOO SMALL OR TOO BIG FOR 
    YOUR STEPSIZE AND NO FACES WILL BE DETECTED
    I SUGGEST YOU TEST THIS OUT FIRST IN A BROWSER HTML FILE
    TO GET THE CORRECT SIZE FOR YOUR USECASE **/
    img.width = 200;
    img.height = 200;

    //I don't know why I have to set this since I am accessing a local file. 
    // img.crossOrigin = '*';
    /** 
      Set the onload callback to make sure the image
      is loaded before we do anything to it
    **/
    img.onload = () => {
      console.log('------------IMAGE LOADED------------');
      /**
       You need to find out what's the best value base on your image size.
       Too small and it might take forever and crash the app.
       Too big and you might miss detecting the small faces.
      **/
      // tracker.setStepSize(1.7); //Default size based on docs is 1.7

      //Pass the loaded img object and instance of the tracker object to tracker.track() 
      // NUMBER OF IMAGE FOUND IS THE TASK
      // var task = 
      tracking.track(img, tracker);
      //It might take a millisecond or a second before it can find a face
      tracker.on('track', (event) => {
        //If the event.data is empty it means that there are no faces found
        console.log(JSON.stringify(event.data));
        let index = 0;
        //Loop Through each faces
        event.data.forEach(rect => {
          //Coordinates on where to render the a rectangle in a canvas
          // console.log(JSON.stringify(rect));
          index++;
          console.log('-------------FOUND FACES Count ----------------------' + index);
          //DO WHAT EVER YOU LIKE WITH THE DATA
          this.markOnTheImage(rect);
        });
        //Stop the tracking since I only need to check if there is at least one face
        // task.stop();
      });
    }
    //Set the image path you want to track
    this.imgURL = 'assets/img/face.jpg';

    // this.imgURL = 'faceCartoon.jpg';

    // this.imgURL = 'faceSample.jpg';

    // this.imgURL = 'faceHitesh.jpg';
    // Not Detecting 
    // this.imgURL = 'faceDivesh.jpg';
    // [{"total":11,"width":104,"height":104,"x":48,"y":35}]
    // this.imgURL = 'faceTejas.jpg';
    // this.MessageToDisplay="Me hu Chutiya No 1"
    // [{"total":14,"width":83,"height":83,"x":60,"y":42}]
    img.src = this.salmanImg;
    // img.src = this.imgURL;
    // img.src = 'assets/img/faces.jpg';
    // img.src = 'assets/img/facepaint.png';
  }

  markOnTheImage(rect: object) {
    // console.log("Position to be marked" + rect);
    // console.log(rect);
    // debugger;
    this.rectangleItemsFaces.push(rect);
    //Draw rectangle on the image for the images 

  }









  child_1_url: any = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgUNWirbBVukmDNlRQt1ZijK15pADjrrrLGuKMKO2HlMhD6N8B";





  salmanImg: any = "data:image/jpeg;base64,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";
}