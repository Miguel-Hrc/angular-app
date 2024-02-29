import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  Productions= [ 
    {name:"Asterix", price: 45, devise:"€"},
    {name:"Panoramix", price: 35, devise:"€"},
    {name:"Obelix", price: 50, devise:"€"},
    {name:"Assurancetourix", price: 25, devise:"€"}
  ]

  constructor() { }

}