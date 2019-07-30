import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  entityOthers:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  GetOptions(abc){
    if(abc == "Other"){
      this.entityOthers = true;
    } else {
      this.entityOthers = false;
    }
  }

}
