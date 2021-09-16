import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

<<<<<<< HEAD

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
=======
import { CensusListComponent } from './components/census-list/census-list.component';
import { CensusDetailComponent } from './components/census-detail/census-detail.component';
import { AddCensusComponent } from './components/add-census/add-census.component';
import { RemoveCensusComponent } from './components/remove-census/remove-census.component';
import { MainComponent } from './components/main/main.component';
import { SearchPostsComponent } from './components/search-posts/search-posts.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { NotifyUserComponent } from './components/notify-user/notify-user.component';
import { LoadAccountComponent } from './components/load-account/load-account.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: MainComponent },
  { path: 'my-posts', component: MyPostsComponent},
  { path: 'notifications', component: NotifyUserComponent},
  { path: 'load-account', component: LoadAccountComponent},
  { path: 'edit-census/:id', component: CensusDetailComponent},
  { path: 'add-census', component: AddCensusComponent},
  { path: 'remove-census/:id', component: RemoveCensusComponent},
  { path: 'search', component: SearchPostsComponent }
>>>>>>> f8e05b63b612bc4b16d7a1967d906e341a992b29
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
