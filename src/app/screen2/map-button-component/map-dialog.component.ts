import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, DialogRole, MatDialogModule} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/typings/public-api';
import { Screen2Service } from '../service/screen2.service';
import { Camera } from '../../shared/core/inteface/camera';
import CAMERA from '../../shared/core/data/camera';
import FLOOR from '../../shared/core/data/floor';
import { stringify } from '@angular/compiler/src/util';


@Component({
    selector: 'app-map-dialog',
    templateUrl: 'map-dialog.component.html',
    styleUrls: ['map-dialog.component.scss'],
    providers: [MatDialogModule]
  })
  export class MapDialog {
    @Input() dataMapDialog;
    // imageDetailFloor : string;
    dataCamera = CAMERA;
    data = [];
    selected : number = -1;
    temp = FLOOR;
    constructor(
      public dialogRef: MatDialogRef<MapDialog>,
      private commomModelService : Screen2Service,
      @Inject(MAT_DIALOG_DATA) temp){}
      
      closeDialog(): void {
      this.dialogRef.close();
      }

    saveMessage(id) {
        this.dialogRef.close(this.temp);
        this.commomModelService.changeDataMapDetail(id);     
        console.log("sadsadasdsadsadsadsad", id);
      }
      ngOnInit(){
        // this.commomModelService.currentData.subscribe( imageDetailFloor => this.imageDetailFloor = imageDetailFloor)
      }
      // setDataForMapDialog(id){
      //   this.commomModel.changeImageMultiple(id);
      //   this.selected = id;
      // }
    }