import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductionsComponent } from './productions/productions.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductionsComponent, HeaderComponent, RouterModule,FooterComponent,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}

