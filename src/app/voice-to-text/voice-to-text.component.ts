import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface IWindow extends Window {
  webkitSpeechRecognition: any;
}

@Component({
  selector: 'app-voice-to-text',
  templateUrl: './voice-to-text.component.html',
  styleUrls: ['./voice-to-text.component.css']
})
export class VoiceToTextComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.voiceText();
  }

  public voiceText(): void{
    let speech = this.speechRecogObject().subscribe(speech => {
      console.log('speech', speech);
      speech.start();
      speech.onresult = (event) => {
        console.log('You said: ', event.results[0][0].transcript);
    };
    }, error => {
      console.log('speech', error);
    });
  }

  public speechRecogObject(): Observable<any>{
    return new Observable((observer) => {
      try{
        const {webkitSpeechRecognition} : IWindow = <IWindow>window;
        const recognition = new webkitSpeechRecognition();
        observer.next(recognition);
        observer.complete();
      }catch(error){
        observer.error(error);
      }
    })
  }
}
