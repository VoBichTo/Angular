import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duration-component',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss']
})
export class DurationComponent implements OnInit {

  constructor() { }
  time = {hour: 13, minute: 30, second : 13};
   meridian = true;
   toggleMeridian() {
     this.meridian = !this.meridian;
   }
  ngOnInit() {
  }

}
