import { Component } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  template: `
    <button (click)="showProduct()" type="submit">Show products</button>
    <button (click)="sortPrice()" type="submit">Price high to low</button>
  <div class="productslist">
    <div class="card" *ngFor="let p of products">
      <img
      src={{p.url}}
      alt="Avatar"
      />
      <div class="container">
        <h4>
          <b>{{p.name}}</b>
        </h4>
        <p>{{p.price | currency }}</p>
      </div>
    </div>
    </div>
  `,
  styles: [
    `
      .productslist{
        display:flex;
      }
      .card {
        /* Add shadows to create the "card" effect */
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        border-radius: 5px;
        width: 30%;
        padding: 1rem;
        margin: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }

      /* On mouse-over, add a deeper shadow */
      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }

      /* Add some padding inside the card container */
      .container {
        padding: 2px 16px;
      }

      img {
        border-radius: 5px 5px 0 0;
        width: 80%;
      }
    `
  ]
})
export class ProductListingComponent {
  products!:any[];

  showProduct(){
    this.products = [
      {
        url: "https://m.media-amazon.com/images/I/71H8ElS2p1L._AC_SL1500_.jpg",
        name: "Gaming Keyboard",
        price: "249",
      },
      {
        url: "https://m.media-amazon.com/images/I/61AQ4REoUJL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        name: "Gaming Headphone",
        price: "119",
      },
      {
        url: "https://m.media-amazon.com/images/I/61t4mpabO+L._AC_SL1500_.jpg",
        name: "Gaming Chair",
        price: "99",
      },
    ];
  }

  sortPrice(){
    this.products.sort((a,b)=> a.price - b.price);
  }

  
}
