import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmbedVideo } from 'ngx-embed-video';
import { HttpClientModule } from '@angular/common/http';
import { VideoSectionComponent } from './video-section/video-section.component';
import { PlayerSearchComponent } from './player-search/player-search.component';
import { ScheduleSectionComponent } from './schedule-section/schedule-section.component';
import { NewsSectionComponent } from './news-section/news-section.component';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './nav/footer/footer.component';
import { TeamDetailsComponent } from './teams/team-details/team-details.component';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { LivescoresComponent } from './livescores/livescores.component';
import { PhotosComponent } from './photos/photos.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { appRoutes } from './routung';

import { Routes, RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    VideoSectionComponent,
    PlayerSearchComponent,
    ScheduleSectionComponent,
    NewsSectionComponent,
    HeaderComponent,
    FooterComponent,
    TeamDetailsComponent,
    PlayersListComponent,
    LivescoresComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,HttpClientModule, EmbedVideo.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
