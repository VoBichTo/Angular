import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserData } from '../../shared/core/inteface/user';
import USERDATA from '../../shared/core/data/user';
const ELEMENT_DATA = USERDATA;
@Injectable({
  providedIn: 'root'
})

export class Screen1Service {
  private comments: UserData;
  private data = new BehaviorSubject<any>(null);
  currentData = this.data.asObservable();
  
  constructor() { }
  
  changeData(message: any){
    this.data.next(message);
  }
  getDatas(){
    return ELEMENT_DATA;
  }

}
