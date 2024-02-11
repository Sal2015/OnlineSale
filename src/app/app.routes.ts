import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignComponent } from './pages/sign/sign.component';
import { ProductComponent } from './pages/product/product.component';
import { SingleComponent } from './pages/single/single.component';

export const routes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'sign' , component:SignComponent},
    {path: 'product' , component:ProductComponent},
    {path: 'product/:id' , component:SingleComponent},
    //{path: '**', component: ErrorComponent}
];

