import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, DialogRole, MatDialogModule} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/typings/public-api';
import { Screen2Service } from '../service/screen2.service';
import DialogData from '../../shared/core/inteface/dialog';
import { Camera } from '../../shared/core/inteface/camera';


@Component({
    selector: 'app-map-dialog',
    templateUrl: 'map-dialog.component.html',
    styleUrls: ['map-dialog.component.scss'],
    providers: [MatDialogModule]
  })
  export class MapDialog {
    @Input() dataMapDialog;
    imageDetailFloor : string;
    IMAGE: Object = [
        {floor1 : "https://yamaha-motor.com.vn/wp/wp-content/uploads/2017/05/b01.png"},
        {floor2 : "https://tchol.org/images600_/2016-honda-civic-png-1.png"},
        {floor3 : "https://tchol.org/images600_/harley-davidson-motorcycle-png.png"},
        {floor4 : "https://tchol.org/images600_/hero-honda-logo-png-13.png"},
        {floor5 : "https://tchol.org/images600_/png-bike-9.png"},
        {floor6 : "https://tchol.org/images600_/png-bike-2.png"},
      ];
    // imgMap = [];
    temp: DialogData = {id: "1", image: this.IMAGE[0].floor1};
    constructor(
      public dialogRef: MatDialogRef<MapDialog>,
      private commomModel : Screen2Service,
      @Inject(MAT_DIALOG_DATA) temp){}
      
      closeDialog(): void {
      this.dialogRef.close();
      }

    saveMessage() {
        this.dialogRef.close(this.temp);
        this.commomModel.changeDataMapDetail(this.temp.image);
      }
      ngOnInit(){
        this.commomModel.currentData.subscribe( imageDetailFloor => this.imageDetailFloor = imageDetailFloor)
      }
  }
  //Style for camera
function setMyClasses() {
  const CAMERA: Camera[] = 
    [
      {
        id : '1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Number13.png',
        camera: 'https://images.vexels.com/media/users/3/130358/isolated/preview/cbf8a4bf99f5c1687ba00adb5a9721a3-flat-video-camera-icon-by-vexels.png'},
        
      {
        id : '2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZGbRs3hlZQmyeMhKwrzMsBJALr55loynODkxgz-lTXAeqRJA',
        camera: 'https://images.vexels.com/media/users/3/130358/isolated/preview/cbf8a4bf99f5c1687ba00adb5a9721a3-flat-video-camera-icon-by-vexels.png'},
      {
        id : '3', 
        image: 'https://banner2.kisspng.com/20180329/ffq/kisspng-number-haku-clip-art-number-1-5abc7083030507.7835562015222990110124.jpg', 
        camera : 'https://images.vexels.com/media/users/3/130358/isolated/preview/cbf8a4bf99f5c1687ba00adb5a9721a3-flat-video-camera-icon-by-vexels.png'}
    ] as any; 
  }