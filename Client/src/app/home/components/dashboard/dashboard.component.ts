import { Component, OnInit } from '@angular/core';
import {UploadService} from '../../services/upload.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  constructor(private Upload:UploadService) { }

  ngOnInit(): void {
  }

  uploadMultiple(event: any) {
    const files: FileList = event.target.files;

    const formdata = new FormData();

    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      formdata.append('files', element);
    }

   
    this.Upload.PushUpload(formdata)
      .subscribe(
        (d) => {
          console.log(d);
        },
        (error) => {
          console.error(error);
        }
      );
  }
  upload(event: any) {
    const file = event.target.files[0];

    const formdata = new FormData();
    formdata.append('file', file);

    this.Upload.PushUpload(formdata).subscribe(
      (d) => {
        console.log(d);
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
