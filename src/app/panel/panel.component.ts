import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  text = "adffg";
  constructor() { console.log("panel");}

  ngOnInit() {
  }

}
