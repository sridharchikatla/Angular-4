import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-comp',
  templateUrl: './ngif-comp.component.html',
  styleUrls: ['./ngif-comp.component.css']
})
export class NgifCompComponent implements OnInit {

  public colors = ["Green", "Red", "Blue", "Yellow", "Black" ]
  constructor() { }

  ngOnInit() {
  }

}
