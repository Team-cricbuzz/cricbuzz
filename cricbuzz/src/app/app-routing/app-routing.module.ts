
import { TeamDetailsComponent } from './../teams/team-details/team-details.component';
import { PlayersListComponent } from './../players/players-list/players-list.component';
import { LivescoresComponent } from 'src/app/livescores/livescores.component';
import { Routes, RouterModule, Router, ROUTES } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoSectionComponent } from './../video-section/video-section.component'


const appRoutes: Routes = [
  { path: 'videos',component: VideoSectionComponent},
  { path: 'livescores',component: LivescoresComponent },

  { path: 'players', component: PlayersListComponent},
  { path: ':id/:name', component: TeamDetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:  [ RouterModule ]
})
export class AppRoutingModule { }
