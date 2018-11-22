import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conduit',
  templateUrl: './conduit.component.html',
  styleUrls: ['./conduit.component.css']
})
export class ConduitComponent implements OnInit {

  birthday: Date = new Date();
  pi: number = 3.1415926;
  size: number = 7;
  constructor() { }

  ngOnInit() {
  }

}
