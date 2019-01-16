
import { TeamDetailsComponent } from './teams/team-details/team-details.component';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { Routes } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
export const appRoutes: Routes = [
  { path: '', redirectTo: '/teams', pathMatch: 'full'},
  { path: 'players', component: PlayersListComponent},
    { path: ':id/:name', component: TeamDetailsComponent},
    
];
