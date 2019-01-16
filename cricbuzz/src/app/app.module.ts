import { AppRoutingModule } from './app-routing/app-routing.module';
import { appRoutes } from './routung';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './nav/footer/footer.component';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { TeamDetailsComponent } from './teams/team-details/team-details.component';
import { AddTeamComponent } from './teams/add-team/add-team.component';
import { DashboardDockComponent } from './teams/dashboard-dock/dashboard-dock.component';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { AddPlayerComponent } from './players/add-player/add-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TeamListComponent,
    TeamDetailsComponent,
    AddTeamComponent,
    DashboardDockComponent,
    PlayersListComponent,
    AddPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
