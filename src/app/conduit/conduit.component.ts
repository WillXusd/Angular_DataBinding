import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conduit',
  templateUrl: './conduit.component.html',
  styleUrls: ['./conduit.component.css']
})
export class ConduitComponent implements OnInit {

  birthday: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
