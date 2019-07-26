import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, DialogRole, MatDialogModule} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/typings/public-api';
import { Screen2Service } from '../service/screen2.service';
import { Camera } from '../../shared/core/inteface/camera';
import CAMERA from '../../shared/core/data/camera';
import Floor from '../../shared/core/inteface/floor';


@Component({
    selector: 'app-map-dialog',
    templateUrl: 'map-dialog.component.html',
    styleUrls: ['map-dialog.component.scss'],
    providers: [MatDialogModule]
  })
  export class MapDialog {
    @Input() dataMapDialog;
    imageDetailFloor : string;
    dataCamera = CAMERA;
    data = [];
    selected : number = -1;    
    IMAGE: Object = [
        {floor1 : "https://yamaha-motor.com.vn/wp/wp-content/uploads/2017/05/b01.png"},
        {floor2 : "https://tchol.org/images600_/2016-honda-civic-png-1.png"},
        {floor3 : "https://tchol.org/images600_/harley-davidson-motorcycle-png.png"},
        {floor4 : "https://tchol.org/images600_/hero-honda-logo-png-13.png"},
        {floor5 : "https://tchol.org/images600_/png-bike-9.png"},
        {floor6 : "https://tchol.org/images600_/png-bike-2.png"},
      ];
    temp: Floor = {id: "1", image: this.IMAGE[0].floor1};
    constructor(
      public dialogRef: MatDialogRef<MapDialog>,
      private commomModelService : Screen2Service,
      @Inject(MAT_DIALOG_DATA) temp){
        this.data = this.dataCamera;
      }
      
      closeDialog(): void {
      this.dialogRef.close();
      }

    saveMessage() {
        this.dialogRef.close(this.temp);
        this.commomModelService.changeDataMapDetail(this.temp.image);
      }
      ngOnInit(){
        this.commomModelService.currentData.subscribe( imageDetailFloor => this.imageDetailFloor = imageDetailFloor)
      }
      // setDataForMapDialog(id){
      //   this.commomModel.changeImageMultiple(id);
      //   this.selected = id;
      // }
    }