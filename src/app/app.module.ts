import { AuthGuard } from './../modules/shared/authentication/auth.guard';
import { CourseAdministrationPageModule } from './../modules/pages/course-administration-page/course-administration-page.module';
import { PageNotFoundComponent } from 'src/modules/pages/not-found-page/page-not-found/page-not-found.component';
import { NotFoundPageModule } from 'src/modules/pages/not-found-page/not-found-page.module';
import { EpamSharedComponentsModule } from 'src/modules/components/epam-shared-components/epam-shared-components.module';
import { CoursesPageComponent } from 'src/modules/pages/courses-page/courses-page.component';
import { LoginPageModule } from 'src/modules/pages/login-page/login-page.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoursesPageModule } from 'src/modules/pages/courses-page/courses-page.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from 'src/modules/pages/login-page/login-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CourseAdministrationPageComponent } from 'src/modules/pages/course-administration-page/course-administration-page.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    component: CoursesPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'courses/add',
    component: CourseAdministrationPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'courses/:id',
    component: CourseAdministrationPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    CoursesPageModule,
    CourseAdministrationPageModule,
    LoginPageModule,
    EpamSharedComponentsModule,
    NotFoundPageModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    ),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


