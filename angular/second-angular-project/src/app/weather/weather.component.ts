import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  city!:string;
  weatherData!:any;
  visible!:boolean;

  constructor(private http:HttpClient){}

  fetchWeather(){
    let key = "138b91f7502c917df454a94449df5c18";
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${key}`).subscribe((response)=>{
      console.log(response);
      this.weatherData = response;
      this.visible = true;
      // this.weat = res.weather.description;
      // this.temp = res.main.temp - 273;
    })
  }
}
