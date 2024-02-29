import { Component } from '@angular/core';
import { SortByPricePipe } from '../sort-by-price.pipe';
import { ProductionsComponent } from '../productions/productions.component';
import { FilterByNamePipe } from '../filter-by-name.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SortByPricePipe, ProductionsComponent,FilterByNamePipe ],
  template: `
    <h1> Présentation de l'entreprise </h1>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare, purus ullamcorper posuere tempus, neque nunc ornare enim, nec ullamcorper quam leo et augue. Vivamus eu orci eu est consequat porta. Morbi vel neque nulla. Sed porta odio in ex consectetur, eu molestie purus mollis. </p>
    <app-productions>
    
    </app-productions>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
