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
  imageDetailFloor : string;
  imageMapDetail : string;
  selected : number = -1;
  data = [];
  dataCamera = CAMERA;
  constructor(public dialog: MatDialog, private commomModelService: Screen2Service) {
    this.data = this.dataCamera;
   }
  ngOnInit() {
   this.commomModelService.currentData.subscribe( image => this.image = image)
  }
  setDataForMapDialog(id){
    this.commomModelService.changeImageMultiple(id);
    this.selected = id;
  }
}
