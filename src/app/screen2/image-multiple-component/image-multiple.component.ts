import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Screen2Service } from '../service/screen2.service';

@Component({
  selector: 'app-image-multiple-component',
  templateUrl: './image-multiple.component.html',
  styleUrls: ['./image-multiple.component.scss']
})
export class ImageMultipleComponent implements OnInit {
  imageMapDetail : string;

  @ViewChild('canvas-image-mul', {static : false}) myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;


  constructor(private commonData : Screen2Service) { }

  ngOnInit() {
    this.commonData.currentImageMul.subscribe(imageMapDetail => this.imageMapDetail = imageMapDetail);
  }
  ngAfterViewInit(): void {
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
  }
}
  