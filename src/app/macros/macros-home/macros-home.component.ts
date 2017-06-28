import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-macros-home',
  templateUrl: './macros-home.component.html',
  styleUrls: ['./macros-home.component.css']
})
export class MacrosHomeComponent implements OnInit {

  constructor() { }

  links: Array<any> = [
    { title: 'foo', link: 'www.google.com' },
    { title: 'bar', link: 'www.amazon.com' }
  ]

  ngOnInit() {
  }

}
