import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CensusListComponent } from './components/census-list/census-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CensusDetailComponent } from './components/census-detail/census-detail.component';
import { AddCensusComponent } from './components/add-census/add-census.component';
import { RemoveCensusComponent } from './components/remove-census/remove-census.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { LogoutUserComponent } from './components/logout-user/logout-user.component';
import { SuspendUserComponent } from './components/suspend-user/suspend-user.component';
import { NotifyUserComponent } from './components/notify-user/notify-user.component';
import { CuPostComponent } from './components/cu-post/cu-post.component';
import { RemovePostComponent } from './components/remove-post/remove-post.component';
import { SearchPostsComponent } from './components/search-posts/search-posts.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { ReportPostComponent } from './components/report-post/report-post.component';
import { ReplyPostComponent } from './components/reply-post/reply-post.component';
import { HotStuffComponent } from './components/hot-stuff/hot-stuff.component';
import { LoadPostsComponent } from './components/load-posts/load-posts.component';
import { ClosePostComponent } from './components/close-post/close-post.component';
import { LoadAccountComponent } from './components/load-account/load-account.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { HeaderComponent } from './components/header/header.component';
import { List5Component } from './components/list5/list5.component';
import { MainComponent } from './components/main/main.component';
import { Top5Component } from './components/top5/top5.component';
import { PostComponent } from './components/post/post.component';
import { KehbabMenuComponent } from './components/kehbab-menu/kehbab-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CensusListComponent,
    CensusDetailComponent,
    AddCensusComponent,
    RemoveCensusComponent,
    RegisterUserComponent,
    LoginUserComponent,
    LogoutUserComponent,
    SuspendUserComponent,
    NotifyUserComponent,
    CuPostComponent,
    RemovePostComponent,
    SearchPostsComponent,
    MyPostsComponent,
    ReportPostComponent,
    ReplyPostComponent,
    HotStuffComponent,
    LoadPostsComponent,
    ClosePostComponent,
    LoadAccountComponent,
    AddReviewComponent,
    HeaderComponent,
    List5Component,
    MainComponent,
    Top5Component,
    PostComponent,
    KehbabMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
