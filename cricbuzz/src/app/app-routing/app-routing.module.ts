
import { LivescoresComponent } from 'src/app/livescores/livescores.component';
import { Routes, RouterModule, Router, ROUTES } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoSectionComponent } from './../video-section/video-section.component'
import { PhotosComponent } from './../photos/photos.component';
import { RankingsComponent } from '../rankings/rankings.component';
import { TeamDetailsComponent } from '../teams/team-details/team-details.component';
import { MatchesComponent } from '../matches/matches.component';




const appRoutes: Routes = [
  { path: 'teams',component: TeamDetailsComponent},
  { path: 'livescores',component: LivescoresComponent },
  {path : 'ranking' ,component : RankingsComponent},
  { path: 'videos', component: VideoSectionComponent},
  {path : 'photos', component : PhotosComponent},
  {path : 'matches', component : MatchesComponent}
    
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:  [ RouterModule ]
})
export class AppRoutingModule { }
