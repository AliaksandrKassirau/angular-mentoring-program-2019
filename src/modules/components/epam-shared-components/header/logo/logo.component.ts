import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.less']
})
export class LogoComponent implements OnInit {

  @Input()
  public logoUrl: string;

  constructor() { }

  public ngOnInit(): void {
  }
}
