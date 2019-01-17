import { PlayersListComponent } from './../players/players-list/players-list.component';
import { LivescoresComponent } from 'src/app/livescores/livescores.component';
import { Routes, RouterModule, Router, ROUTES } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoSectionComponent } from './../video-section/video-section.component'
import { PhotosComponent } from './../photos/photos.component';
import { RankingsComponent } from '../rankings/rankings.component';
import { HeaderComponent } from '../nav/header/header.component';

const appRoutes: Routes = [
  { path: 'videos',component: VideoSectionComponent},
  { path: 'livescores',component: LivescoresComponent },
  {path : 'ranking' ,component : RankingsComponent},
  { path: 'players', component: PlayersListComponent},
  {path : 'photos', component : PhotosComponent},
  { path : '', component : HeaderComponent}
    
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:  [ RouterModule ]
})
export class AppRoutingModule { }
