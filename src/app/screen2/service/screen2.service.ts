import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import DialogData from '../../shared/core/inteface/dialog';
const ITEM: DialogData = [
  {id : '1', name : 'img1' , image: 'https://yamaha-motor.com.vn/wp/wp-content/uploads/2017/05/b01.png'},
  {id : '2', name : 'img2' , image: 'https://tchol.org/images600_/2016-honda-civic-png-1.png'},
  {id : '3', name : 'img3' , image: 'https://tchol.org/images600_/harley-davidson-motorcycle-png.png'},
  {id : '4', name : 'img4' , image: 'https://tchol.org/images600_/hero-honda-logo-png-13.png'},
  {id : '5', name : 'img5' , image: 'https://tchol.org/images600_/png-bike-9.png'},
] as any
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
    return ITEM;
  }
}
