import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild, AfterViewInit, Input, Injectable } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { Screen1Service } from '../service/screen1.service';
import { UserData } from '../../shared/core/inteface/user';

/** Constants used to fill up our data base. */


@Component({
  selector: "app-table-record",
  templateUrl: "./table-record.component.html",
  styleUrls: ["./table-record.component.scss"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      )
    ])
  ]
})
@Injectable()
export class TableRecordComponent implements OnInit {
  @Input() selected : any; 
  @Input() dataTable: any;

  dataSource: MatTableDataSource<UserData>;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.dataTable);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  displayedColumns: string[] = ["id", "name","country", "progress", "img"];
  expandedElement: MatTableDataSource<UserData> | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _httpClient: HttpClient, private data: Screen1Service) {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  newData(row){
    this.data.changeData(row);
  }
}
