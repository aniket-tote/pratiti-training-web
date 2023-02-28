import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pnr-enquiry',
  templateUrl: './pnr-enquiry.component.html',
  styleUrls: ['./pnr-enquiry.component.css']
})
export class PnrEnquiryComponent {
  pnr!:number;
  pnrData!:any;
  visible!:boolean;

  constructor(private http:HttpClient){}

  fetchPnrStatus(){
    this.http.get(`http://localhost:8080/status?pnr2=111`).subscribe((response)=>{
      console.log(response);
      this.pnrData = response;
      this.visible = true;
      // this.weat = res.weather.description;
      // this.temp = res.main.temp - 273;
    })
  }
}
