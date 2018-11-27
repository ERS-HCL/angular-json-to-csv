import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { VoiceToTextComponent } from './voice-to-text/voice-to-text.component';
import { JsonToCsvComponent } from './json-to-csv/json-to-csv.component';

const routes: Routes = [
  {
    path: 'file-upload',
    component: FileUploadComponent
  },
  {
    path: 'voice-to-text',
    component: VoiceToTextComponent
  },{
    path: 'json-to-csv',
    component: JsonToCsvComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    VoiceToTextComponent,
    JsonToCsvComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
