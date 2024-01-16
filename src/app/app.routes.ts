import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogpageComponent } from './blogpage/blogpage.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'blog', component:BlogsComponent},
    {path: 'blog/:id', component: BlogpageComponent},
    {path:'contactUs', component:ContactComponent }
];
