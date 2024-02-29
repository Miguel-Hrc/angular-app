import { Component } from '@angular/core';
import { SortByPricePipe } from '../sort-by-price.pipe';
import { ProductsService } from '../products.service';
import { OnInit } from '@angular/core';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { FormsModule } from '@angular/forms';
import { AsterixComponent } from '../asterix/asterix.component';
import { ObelixComponent } from '../obelix/obelix.component';
import { PanoramixComponent } from '../panoramix/panoramix.component';
import { AssurancetourixComponent } from '../assurancetourix/assurancetourix.component';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-productions',
  standalone: true,
  imports: [SortByPricePipe, FilterByNamePipe,FormsModule,AsterixComponent,RouterModule,AssurancetourixComponent,PanoramixComponent,ObelixComponent  ],
  templateUrl: './productions.component.html',
  styleUrl: './productions.component.css'
})
export class ProductionsComponent implements OnInit{ 
  productions: any[] = [];
  constructor(private ProductService: ProductsService){  }

  ngOnInit(): void {
    this. productions = this.ProductService.Productions
  }


  searchBoxTxt: string = '';
  orderBy: "asc" | "desc" = "asc";
}
