import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleFeedComponent } from './article-feed/article-feed.component';
import { ArticleComponent } from './article/article.component';
// import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './header/sign-in/sign-in.component';
import { SignUpComponent } from './header/sign-up/sign-up.component';
import { GlobalFeedComponent } from './home/global-feed/global-feed.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { GuardGuard } from './services/guard.guard';
// import { SettingComponent } from './setting/setting.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent  },
  // { path: 'article', component: ArticleComponent },
  {path:'article/:slug',component:ArticleComponent},

  // { path: 'profile', component: ProfileComponent,canActivate: [GuardGuard] },
    { path: 'profile', component: ProfileComponent },

    // { path: 'profile', loadChildren:()=>import('./profile/profile.module').then(m=>m.ProfileModule)},

  {path:'article',component:ArticleFeedComponent},
  { path: 'profile/:username', component: ProfileComponent },
  { path: 'profile/:username/:follow', component: ProfileComponent },


  // {path:'setting',component:SettingComponent},
  {path:'globalFeed',component:GlobalFeedComponent},
  // {path:'user',component:UserComponent,canActivate: [GuardGuard]  

  // { path: 'signin', redirectTo: 'user', pathMatch: 'full' },
// {path:'article',
// loadChildren:()=>import('./article/article.module')
// .then(mod=>mod.ArticleModule)
// },
  {path:'setting',
  loadChildren:()=>import('./setting/setting.module')
.then(mod=>mod.SettingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
