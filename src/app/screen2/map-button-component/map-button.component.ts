import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/typings/public-api';
import { MapDialog } from 'src/app/screen2/map-button-component/map-dialog.component';
import { Screen2Service } from '../service/screen2.service';

// @Input()
@Component({
  selector: 'app-map-button-component',
  templateUrl: './map-button.component.html',
  styleUrls: ['./map-button.component.scss']
})
export class MapButtonComponent implements OnInit {
  @Input() dataMapDialog
  id: string;
  image: string;
  name: string;
  dataMapDetail : string;
  constructor(public dialog: MatDialog, private commModel: Screen2Service) { }
  openDialog(): void {
    // this.commModel.openDialog().subscribe(temp =>      {
    //   console.log("datadasaaa" , temp);
    // });

    const dialogRef = this.dialog.open(MapDialog, {
      disableClose: true,
      width: '80vh',
      height: "auto",
      data: {id: this.id, name: this.name, image: this.image}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('Ththis.img', result);
      console.log('Ththis.imgsadsa' , result.name);
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


