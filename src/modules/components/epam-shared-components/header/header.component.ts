import { AuthService } from './../../../shared/authentication/auth.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'epam-styled-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input()
  public logoUrl: string;

  constructor(private readonly authService: AuthService) { }

  public ngOnInit(): void {
  }

  public onLogOut(): void {
    this.authService.logout();
  }

}
