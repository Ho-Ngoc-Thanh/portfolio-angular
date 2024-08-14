import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login/login.component';
import { HomeComponent } from './features/home/home/home.component';
import { PostDetailComponent } from './features/home/home/postDetail/post-detail/post-detail.component';
import { AuthGuardsGuard } from './Guards/authGuard/auth-guards.guard';
import { MainLayoutComponent } from './layouts/MainLayout/main-layout/main-layout.component';
import { AboutsComponent } from './features/abouts/abouts/abouts.component';
import { PortfolioHomeComponent } from './features/Portfolio/home/portfolio-home/portfolio-home.component';
import { PortfolioResumeComponent } from './features/Portfolio/resume/portfolio-resume/portfolio-resume.component';
import { PortfolioWorkComponent } from './features/Portfolio/portfolio-work/portfolio-work.component';
import { PortfolioContactComponent } from './features/Portfolio/portfolio-contact/portfolio-contact.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        component: PortfolioHomeComponent,
      },
      {
        path: 'resume',
        component: PortfolioResumeComponent,
      },
      {
        path: 'work',
        component: PortfolioWorkComponent,
      },
      {
        path: 'contact',
        component: PortfolioContactComponent,
      },
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent,
  },
  {
    path: 'abouts',
    loadChildren: () =>
      import('./features/abouts/abouts/abouts.module').then(
        (m) => m.AboutsModule
      ),
    canActivate: [AuthGuardsGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
