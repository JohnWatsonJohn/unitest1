import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  isCarVisible = true;
  title = 'My car'

  constructor() { }

  ngOnInit() {
  }

}
