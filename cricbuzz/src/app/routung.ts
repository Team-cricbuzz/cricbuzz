import { AddTeamComponent } from './teams/add-team/add-team.component';
import { TeamDetailsComponent } from './teams/team-details/team-details.component';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { AddPlayerComponent } from './players/add-player/add-player.component';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/teams', pathMatch: 'full'},
  { path: 'players', component: PlayersListComponent},
  { path: 'players/add', component: AddPlayerComponent},
  { path: 'teams', component: TeamListComponent, children: [
    { path: ':id/:name', component: TeamDetailsComponent},
    { path: 'add', component: AddTeamComponent},
    { path: 'edit/:id', component: AddTeamComponent},
  ]}
];
