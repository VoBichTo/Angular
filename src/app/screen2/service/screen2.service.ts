import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Floor from '../../shared/core/inteface/floor';
@Injectable({
  providedIn: 'root'
})
export class Screen2Service {
  private dataMapSource = new BehaviorSubject<string>("");
  currentData = this.dataMapSource.asObservable();

  private dataImageMultipleRes = new BehaviorSubject<string>("");
  currentImageMul = this.dataImageMultipleRes.asObservable();

  constructor() { }
  //change data map detail
  changeDataMapDetail(dataMapDetail: string){
    this.dataMapSource.next(dataMapDetail);
  }
  //change data image mul
  changeImageMultiple(imgMultiple: string){
    this.dataImageMultipleRes.next(imgMultiple);
  }
  getDataMap(){
    // return ITEM;
  }
}
