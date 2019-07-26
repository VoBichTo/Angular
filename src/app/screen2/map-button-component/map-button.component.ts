import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/typings/public-api';
import { MapDialog } from 'src/app/screen2/map-button-component/map-dialog.component';
import { Screen2Service } from '../service/screen2.service';
import FLOOR from '../../shared/core/data/floor';

// @Input()
@Component({
  selector: 'app-map-button-component',
  templateUrl: './map-button.component.html',
  styleUrls: ['./map-button.component.scss']
})
export class MapButtonComponent implements OnInit {
  // @Input() dataMapDialog
  id: string;
  image: string;
  name: string;
  dataMapDetail : string;
  dataShowDialog = [] as any;
  dataMapDialog = FLOOR;
  constructor(public dialog: MatDialog, private commModel: Screen2Service) {
    this.dataShowDialog = this.dataMapDialog;
    // console.log(this.dataShowDialog);
   }
  openDialog(): void {
    // this.commModel.openDialog().subscribe(temp =>      {
    //   console.log("datadasaaa" , temp);
    // });

    const dialogRef = this.dialog.open(MapDialog, {
      disableClose: true,
      width: '80vw',
      height: "80vh",
      data: {dataKey : this.dataShowDialog}
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // console.log('Ththis.img', result);
      // console.log('Ththis.imgsadsa' , result);
      this.id = result.id;
      this.image = result.image;
      this.name = result.name;
      // this.dataMapDetail = result.name;
      // console.log("this.dataMapDeytial " ,this.dataMapDetail);
    });
  }
  ngOnInit() {
    // this.commModel.currentData.subscribe(name => this.name = name);
  }
}


