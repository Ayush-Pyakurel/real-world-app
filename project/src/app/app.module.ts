import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

import { SignUpComponent } from './header/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './header/sign-in/sign-in.component';

import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { AuthServiceService } from './services/auth-service.service';
import { FetchApiService } from './services/fetch-api.service';
import { AuthInterceptorInterceptor } from './services/auth-interceptor.interceptor';
import { ArticleComponent } from './article/article.component';
import { FeedComponent } from './article/feed/feed.component';
import { NgToastModule } from 'ng-angular-popup';
import { GlobalErrorHandlingInterceptor } from './services/global-error-handling.interceptor';
import { LoadingSpinerComponent } from './loading-spiner/loading-spiner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserComponent,

    SignUpComponent,
    SignInComponent,

    ProfileComponent,
    SettingComponent,
    ArticleComponent,
    FeedComponent,
    LoadingSpinerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule,
  ],
  providers: [
    AuthServiceService,
    FetchApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalErrorHandlingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
