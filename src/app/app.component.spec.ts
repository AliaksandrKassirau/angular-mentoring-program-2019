import { RouterModule, Routes } from '@angular/router';
import { CoursesPageModule } from 'src/modules/pages/courses-page/courses-page.module';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { EpamSharedComponentsModule } from 'src/modules/components/epam-shared-components/epam-shared-components.module';
import { RouterTestingModule } from '@angular/router/testing';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  }
];

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        EpamSharedComponentsModule,
        CoursesPageModule,
        RouterModule,
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
