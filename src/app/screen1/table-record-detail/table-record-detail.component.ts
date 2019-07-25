import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Screen1Service } from '../service/screen1.service';
import { UserData } from '../../shared/core/inteface/user';

@Component({
  selector: 'app-table-record-detail',
  templateUrl: './table-record-detail.component.html',
  styleUrls: ['./table-record-detail.component.scss'],
})
export class TableRecordDetailComponent implements OnInit {
  @Input() dataDetail : any;
 
  constructor() {}

  ngOnInit() {}
}
