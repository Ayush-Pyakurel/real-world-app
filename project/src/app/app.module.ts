import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { YourFeedComponent } from './home/your-feed/your-feed.component';
import { SignUpComponent } from './header/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './header/sign-in/sign-in.component';
import { GlobalFeedComponent } from './home/global-feed/global-feed.component';
import { ProfileComponent } from './profile/profile.component';
import {  ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleComponent } from './article/article.component';
import { ArticleFeedComponent } from './article-feed/article-feed.component';
import { AuthInterceptor } from './auth.interceptor';
import { UserComponent } from './user/user.component';
// import { SettingComponent } from './setting/setting.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ErrorInterceptor } from './error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    
    YourFeedComponent,
    SignUpComponent,
    SignInComponent,
    GlobalFeedComponent,
    ProfileComponent,
    ArticleComponent,
    ArticleFeedComponent,
    UserComponent,
    // SettingComponent,
    LoadingSpinnerComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
    
    
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true,
    
  },
{
  provide:HTTP_INTERCEPTORS,
  useClass:ErrorInterceptor,
  multi:true,
}],
  
  
  bootstrap: [AppComponent],
})
export class AppModule {}
