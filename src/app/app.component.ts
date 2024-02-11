import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductComponent } from './pages/product/product.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleComponent } from './pages/single/single.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SlicePipe,FooterComponent,NavComponent,ProductComponent,HomeComponent,SingleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sale';
  

}
