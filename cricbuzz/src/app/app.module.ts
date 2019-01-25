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
import { LivescoresComponent } from './livescores/livescores.component';
import { PhotosComponent } from './photos/photos.component';
import { RankingsComponent } from './rankings/rankings.component';
import { RankingService } from './rankings/ranking.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { TeamDetailsComponent } from './teams/team-details/team-details.component';
import { TeamService } from './teams/team-details/team.service';

@NgModule({
  declarations: [
    AppComponent,
    VideoSectionComponent,
    PlayerSearchComponent,
    ScheduleSectionComponent,
    NewsSectionComponent,
    HeaderComponent,
    FooterComponent,
    LivescoresComponent,
    PhotosComponent,
    TeamDetailsComponent,
    RankingsComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,HttpClientModule, EmbedVideo.forRoot() 
  ],
  providers: [RankingService,TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
