import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { MapDialog } from '../map-button-component/map-dialog.component';
import { Screen2Service } from '../service/screen2.service';
import { Camera } from '../../shared/core/inteface/camera';


@Component({
  selector: 'app-map-detail-component',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.scss']
})
export class MapDetailComponent implements OnInit {
  image : string;
  imageDetailFloor : string;
  imageMapDetail : string = "https://upload.wikimedia.org/wikipedia/commons/e/e9/Number13.png";
  selected : number = -1;
  data = [];
  dataCamera : Camera[] = [
    {id : '1', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Number13.png', camera: 'https://images.vexels.com/media/users/3/130358/isolated/preview/cbf8a4bf99f5c1687ba00adb5a9721a3-flat-video-camera-icon-by-vexels.png'},
    {id : '2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZGbRs3hlZQmyeMhKwrzMsBJALr55loynODkxgz-lTXAeqRJA', camera: 'https://images.vexels.com/media/users/3/130358/isolated/preview/cbf8a4bf99f5c1687ba00adb5a9721a3-flat-video-camera-icon-by-vexels.png'},
    {id : '3', image: 'https://banner2.kisspng.com/20180329/ffq/kisspng-number-haku-clip-art-number-1-5abc7083030507.7835562015222990110124.jpg', camera : 'https://images.vexels.com/media/users/3/130358/isolated/preview/cbf8a4bf99f5c1687ba00adb5a9721a3-flat-video-camera-icon-by-vexels.png'}
]
  constructor(public dialog: MatDialog, private commModel: Screen2Service) {
    this.data = this.dataCamera;
    console.log("dadasda" ,this.data);
   }
  ngOnInit() {
   this.commModel.currentData.subscribe( image => this.image = image)
  }
  setDataForMapDialog(id){
    // this.commModel.changeImageMultiple(this.imageMapDetail);
    for(let i = 0; i < this.data.length; i ++){
      if(this.data.length){
      console.log("datadasdasd :" ,this.data[i].image);
      this.commModel.changeImageMultiple(this.dataCamera[i].image);
      this.selected = id;
      }
    }
    // this.commModel.changeImageMultiple(this.dataCamera["image"].image);
    console.log("imageDetailFloor", this.imageDetailFloor);
    console.log("image", this.image);
    console.log("imageMapDetail", this.imageMapDetail);
  }
  changeCamera(idCamera){
    this.selected = idCamera.id;
  }
}
