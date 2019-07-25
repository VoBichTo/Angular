import { Component, OnInit, Input } from '@angular/core';
import { Screen1Service } from '../service/screen1.service';
import { UserData } from '../../shared/core/inteface/user';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component implements OnInit {
  dataScreen1;  
  selected;
  constructor( private data: Screen1Service) { 
    this.dataScreen1 = this.data.getDatas();
    this.data.currentData.subscribe(message => this.selected = message);
  }

  ngOnInit() {
  }
 
}
