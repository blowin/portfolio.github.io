import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { TimelineComponent } from './timeline/timeline.component';
import { HeaderComponent } from './header/header.component';
import {LinkButtonService} from '../services/link-button/link-button.service';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    TimelineComponent,
    HeaderComponent,
    NavLinksComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LinkButtonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
