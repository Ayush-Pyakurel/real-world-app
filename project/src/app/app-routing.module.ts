import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { FeedComponent } from './article/feed/feed.component';
import { AuthGuardGuard } from './Guard/auth-guard.guard';
// import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './header/sign-in/sign-in.component';
import { SignUpComponent } from './header/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'header', component: HeaderComponent },
  { path: 'user', canActivate: [AuthGuardGuard], component: UserComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
