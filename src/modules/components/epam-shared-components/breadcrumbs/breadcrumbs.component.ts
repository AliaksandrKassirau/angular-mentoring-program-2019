import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'epam-styled-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent implements OnInit {

  @Input()
  public currentPath: string;

  constructor() { }

  ngOnInit() {
  }

}
