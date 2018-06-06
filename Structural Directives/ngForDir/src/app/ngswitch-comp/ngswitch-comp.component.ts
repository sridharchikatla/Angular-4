import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch-comp',
  templateUrl: './ngswitch-comp.component.html',
  styleUrls: ['./ngswitch-comp.component.css']
})
export class NgswitchCompComponent implements OnInit {

  public colors = ["Green", "Red", "Blue", "Yellow", "Black" ];
  public choice=  this.colors[0];
  constructor() { }

  ngOnInit() {
  }

}
