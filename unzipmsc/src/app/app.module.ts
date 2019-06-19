import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { SixthComponent } from './sixth/sixth.component';
import { SeventhComponent } from './seventh/seventh.component';
import { EighthComponent } from './eight/eighth.component';
import { AllService } from './services/allservice';
import { AppListenComponent } from './app-listen/app-listen.component';


// Home	Index(This page)
// First	Speech Recognition -STT
// Second	Speech Recognized Color changer
// Third	Speech Systhesis -TTS using textbox
// Fourth	Face Detection
// Fifth	Weloming the user (Speech Synthesis using detected Face )
// Sixth	Creating Elements using Speech
// Seventh	Whole Together
// Eight	Future Scope -- Cretae Website using Speech while giving users option to select by asking theem

const routes: Routes = [
  { path: '', redirectTo: 'hello', pathMatch: 'full' },
  { path: 'hello', component: HelloComponent },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'third', component: ThirdComponent },
  { path: 'fourth', component: FourthComponent },
  { path: 'fifth', component: FifthComponent },
  { path: 'sixth1', component: SixthComponent },
  { path: 'seventh1', component: SeventhComponent },
  { path: 'sixth', component: EighthComponent },
];


@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes, {useHash:true}),],
  declarations: [AppComponent, HelloComponent, FirstComponent, SecondComponent, ThirdComponent, FourthComponent, FifthComponent, SixthComponent, SeventhComponent, EighthComponent, AppListenComponent],
  bootstrap: [AppComponent],
  providers:[AllService]
})
export class AppModule { }
