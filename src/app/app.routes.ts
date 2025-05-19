import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',
    loadComponent:()=>import('./components/portfolio-layout/portfolio-layout.component').then(c=>c.PortfolioLayoutComponent),
    children:[
        {
            path:'',
            loadComponent:()=>import('./components/profile/profile.component').then(c=>c.ProfileComponent)
        },
        {
            path:'resume',
            loadComponent:()=>import('./components/resume/resume.component').then(c=>c.ResumeComponent)
        },
        {
            path:'portfolio',
            loadComponent:()=>import('./components/portfolio/portfolio.component').then(c=>c.PortfolioComponent)
        },
        {
            path:'contact',
            loadComponent:()=>import('./components/contact/contact.component').then(c=>c.ContactComponent)
        },
    ]

    }
];
