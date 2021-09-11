import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CensusListComponent } from './components/census-list/census-list.component';
import { CensusDetailComponent } from './components/census-detail/census-detail.component';
import { AddCensusComponent } from './components/add-census/add-census.component';
import { RemoveCensusComponent } from './components/remove-census/remove-census.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'census-list' },
  { path: 'census-list', component: CensusListComponent },
  { path: 'edit-census/:id', component: CensusDetailComponent},
  { path: 'add-census', component: AddCensusComponent},
  { path: 'remove-census/:id', component: RemoveCensusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
