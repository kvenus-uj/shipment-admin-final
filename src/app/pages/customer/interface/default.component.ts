import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class InterfaceComponent implements OnInit {

  constructor() {
   }
   
  ngOnInit() {
    this._fetchData();
  }
  ngAfterViewInit() {
   
  }
  private _fetchData() {
  }
}
