import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-comp',
  templateUrl: './ngfor-comp.component.html',
  styleUrls: ['./ngfor-comp.component.css']
})
export class NgforCompComponent implements OnInit {

  public colors = ["Green", "Red", "Blue", "Yellow", "Black" ]
 
  constructor() { }

  ngOnInit() {
  }

}
