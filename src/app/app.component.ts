import { Component, OnInit } from '@angular/core';
import { UploadValidRules } from './models/validation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'evrything-in-angular';
  csvHeaders: any = {
    companyName: "Company name",
    employee: "Employee",
    hq: "Head quater"
  }
  _json: any = [{
    companyName: 'HCL',
    employee: 120000,
    hq: 'Noida'
  },{
    companyName: 'Cognizant',
    employee: 230000,
    hq: 'Chennai'
  }];

  uploadValidation: UploadValidRules = {
    size: 100000,
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  };

  ngOnInit(){
  }

  public onFileUploading(event){
    console.log('Event', event);
  }

  public onUploadErr(error){
    console.log('Error', error);
  }
}
