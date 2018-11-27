import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadValidRules, errorMsgCodes, UploadErr } from '../models/validation.model';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

interface FileConfig {
  apiUrl: string,
  acceptFile
}

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @Input()
  uploadApi: string;
  @Input()
  validUploadRules: UploadValidRules;

  @Output()
  fileChange: EventEmitter<File> = new EventEmitter();
  @Output()
  onUploadErr: EventEmitter<UploadErr[]> = new EventEmitter();

  selectedFiles: File;
  constructor() { }

  ngOnInit() {
  }

  /**
   * onFileChanging() will get called when ever there will anu change in the file uploading.
   * This method
   * @param _event: it is an event of type HTMLInputEvent.
  */
  public onFileChanging(_event: HTMLInputEvent): void{
    if(_event && _event.srcElement && _event.target.files){
      this.selectedFiles = _event.target.files[0];

      if(this.uploadApi){
        this.uploadFiles(this.selectedFiles);
      }else{
        //this.fileChange.emit(this.selectedFiles);
        this.uploadFiles(this.selectedFiles);
      }
    }
  }

  /**
   * 
   * @param files 
   */
  public uploadFiles(files: File): void{
    const uploadErrs: UploadErr[] = this.checkValidUploadRules(files);

    if(this.validUploadRules && uploadErrs.length > 0){
      this.onUploadErr.emit(uploadErrs);
    }else{
      this.fileChange.emit(files);
    }
  }

  public checkValidUploadRules(file: File): UploadErr[]{
    let errors: UploadErr[] = [];

    if(file.size > this.validUploadRules.size){
      errors.push(errorMsgCodes.INV_FILE_SIZE);
    }else if(file.type !== this.validUploadRules.type){
      errors.push(errorMsgCodes.INV_FILE_TYPE);
    }

    return errors;
  }
}
