import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { YourFeedComponent } from './home/your-feed/your-feed.component';
import { SignUpComponent } from './header/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './header/sign-in/sign-in.component';
import { GlobalFeedComponent } from './home/global-feed/global-feed.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserComponent,
    YourFeedComponent,
    SignUpComponent,
    SignInComponent,
    GlobalFeedComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
