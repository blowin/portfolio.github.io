import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { TimelineComponent } from './timeline/timeline.component';
import { HeaderComponent } from './header/header.component';
import {LinkButtonService} from '../services/link-button/link-button.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    TimelineComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LinkButtonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
