import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CensusListComponent } from './components/census-list/census-list.component';
import { CensusDetailComponent } from './components/census-detail/census-detail.component';
import { AddCensusComponent } from './components/add-census/add-census.component';
import { RemoveCensusComponent } from './components/remove-census/remove-census.component';
import { MainComponent } from './components/main/main.component';
import { SearchPostsComponent } from './components/search-posts/search-posts.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: MainComponent },
  { path: 'edit-census/:id', component: CensusDetailComponent},
  { path: 'add-census', component: AddCensusComponent},
  { path: 'remove-census/:id', component: RemoveCensusComponent},
  { path: 'search', component: SearchPostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
