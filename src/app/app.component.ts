import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  images:any;

  constructor(
    private http:Http
  ) { }

  imageUpload(event:any){
    if(event.target.files.length>=1){
      console.log(event.target.files.length);
      const file=event.target.files[0];
      this.images=file;
    }
  }

  submit(){
    let formData=new FormData();
    formData.append('file',this.images);
    this.http.post('http://localhost:3000/file',formData).subscribe(res=>{
      console.log(res);
    }
    );
  }

}
