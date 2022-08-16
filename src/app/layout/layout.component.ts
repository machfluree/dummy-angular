import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  sideNavOpened: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  sideNavToggler = () => {
    this.sideNavOpened = !this.sideNavOpened;
  }

}
