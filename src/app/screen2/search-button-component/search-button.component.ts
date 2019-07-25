import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-button-component',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss'],
  template: `
  <div>
      <button type="button" class="btn btn-info">Search</button>
      <span style="padding-left: 5px"></span>
      <input type="text" [(ngModel)]="term" style=" border: 1px solid #000;
      -webkit-appearance: none;
      border-radius: 10px;">
      <div *ngFor = "let item of items |filter:term" >
        <p>
          {{item.name}}
        </p>
      </div>

  </div>  
`
})
export class SearchButtonComponent implements OnInit {
  // items: string[] = [{ name: "archie" }, { name: "jake" }, { name: "richard" }] as any;
  constructor() { }

  ngOnInit() {
  }
 
}
