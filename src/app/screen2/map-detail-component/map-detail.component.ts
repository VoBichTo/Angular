import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { MapDialog } from '../map-button-component/map-dialog.component';
import { Screen2Service } from '../service/screen2.service';
import CAMERA from '../../shared/core/data/camera';

@Component({
  selector: 'app-map-detail-component',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.scss']
})
export class MapDetailComponent implements OnInit {
  image : string;
  selected : number = -1;
  data = [] as any;
  dataCamera = CAMERA;
  constructor(public dialog: MatDialog, private commModel: Screen2Service) {
    this.data = this.dataCamera;
   }
  ngOnInit() {
    // Not understand when change name of image to differenct name
    // It's not active
   this.commModel.currentData.subscribe( imageDetailFloor => this.image = imageDetailFloor)
  }
  setDataForMapDialog(id){
    this.commModel.changeImageMultiple(id);
    this.selected = id;
  }
}
