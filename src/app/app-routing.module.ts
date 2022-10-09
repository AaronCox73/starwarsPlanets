import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetDetailComponent } from './star-wars/planet-detail/planet-detail.component';
import { PlanetListComponent } from './star-wars/planet-list/planet-list.component';

const routes: Routes = [
  { path: 'planets', component: PlanetListComponent },
  { path: 'details', component: PlanetDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PlanetDetailComponent, PlanetListComponent]
