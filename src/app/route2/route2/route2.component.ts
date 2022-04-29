import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Products } from '../route2-model';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css'],
})
export class Route2Component implements OnInit {
  product = {} as Products;
  products = [] as Products[];
  isList: boolean = true;
  
  constructor(private http:HttpService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.http.getData("products").subscribe(
      (data:any)=>{
        this.products= data as Products[];
      },
    );
  }
  priceFilter(value: any){
    this.products.sort((a:any, b: any)=> {
      if (value== 'asc')
      return a.price - b.price;
      else
      return b.price-a.price;
    });
  }
}

