import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChecknumberPipe } from './Pipes/checknumber.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullColorDirective } from './Directives/full-color.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './features/home/home/home.component';
import { TablePostComponent } from './features/home/home/components/table-post/table-post.component';
import { HttpClientModule } from '@angular/common/http';
import { HeadTableComponent } from './features/home/home/components/head-table/head-table.component';
import { AddNewPostDialogComponent } from './features/home/home/components/add-new-post-dialog/add-new-post-dialog.component';
import { DeletePostComponent } from './features/home/home/components/delete-post/delete-post.component';
import { PostDetailComponent } from './features/home/home/postDetail/post-detail/post-detail.component';
import { ContactInforComponent } from './layouts/ContactInfor/contact-infor/contact-infor.component';
import { HeaderComponent } from './layouts/Header/header/header.component';
import { MainLayoutComponent } from './layouts/MainLayout/main-layout/main-layout.component';
import { ActiveNavbarDirective } from './Directives/activeNavbar/active-navbar.directive';
import { PortfolioHomeComponent } from './features/Portfolio/home/portfolio-home/portfolio-home.component';
import { PortfolioResumeComponent } from './features/Portfolio/resume/portfolio-resume/portfolio-resume.component';
import { PortfolioContactComponent } from './features/Portfolio/portfolio-contact/portfolio-contact.component';
import { PortfolioWorkComponent } from './features/Portfolio/portfolio-work/portfolio-work.component';
@NgModule({
  declarations: [
    AppComponent,
    ChecknumberPipe,
    FullColorDirective,
    HomeComponent,
    TablePostComponent,
    HeadTableComponent,
    AddNewPostDialogComponent,
    DeletePostComponent,
    PostDetailComponent,
    ContactInforComponent,
    HeaderComponent,
    MainLayoutComponent,
    ActiveNavbarDirective,
    PortfolioHomeComponent,
    PortfolioResumeComponent,
    PortfolioContactComponent,
    PortfolioWorkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
