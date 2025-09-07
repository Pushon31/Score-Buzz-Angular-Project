import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { FinishedMatchesComponent } from './component/finished-matches/finished-matches.component';
import { FixturesComponent } from './component/fixtures/fixtures.component';
import { FooterComponent } from './component/footer/footer.component';
import { Footer2Component } from './component/footer2/footer2.component';
import { HomeComponent } from './component/home/home.component';
import { LiveMatchesComponent } from './component/live-matches/live-matches.component';
import { LoginComponent } from './component/login/login.component';
import { MoreComponent } from './component/more/more.component';
import { Navbar1Component } from './component/navbar1/navbar1.component';
import { Navbar2Component } from './component/navbar2/navbar2.component';
import { NewsComponent } from './component/news/news.component';
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';
import { SettingComponent } from './component/setting/setting.component';
import { SponsorsComponent } from './component/sponsors/sponsors.component';
import { TermsConditionComponent } from './component/terms-condition/terms-condition.component';
import { TournamentsComponent } from './component/tournaments/tournaments.component';
import { UpcomingMatchesComponent } from './component/upcoming-matches/upcoming-matches.component';
import { VideosComponent } from './component/videos/videos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    ErrorPageComponent,
    FinishedMatchesComponent,
    FixturesComponent,
    FooterComponent,
    Footer2Component,
    HomeComponent,
    LiveMatchesComponent,
    LoginComponent,
    MoreComponent,
    Navbar1Component,
    Navbar2Component,
    NewsComponent,
    PrivacyPolicyComponent,
    ProfileComponent,
    RegisterComponent,
    SettingComponent,
    SponsorsComponent,
    TermsConditionComponent,
    TournamentsComponent,
    UpcomingMatchesComponent,
    VideosComponent
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
