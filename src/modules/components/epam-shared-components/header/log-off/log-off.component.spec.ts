import { MatIconModule } from '@angular/material/icon';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogOffComponent } from './log-off.component';

describe('LogOffComponent', () => {
  let component: LogOffComponent;
  let fixture: ComponentFixture<LogOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LogOffComponent
      ],
      imports: [
        MatIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
