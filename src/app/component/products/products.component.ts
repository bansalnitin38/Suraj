import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  selectedType = ""
  productList = []

  constructor() { }

  ngOnInit(): void {
    this.filterProduct()
  }

  filterProduct() {
    console.log(this.selectedType)
    if (this.selectedType)
      this.productList = this.products.filter(p => p.type.trim().toLocaleLowerCase() == this.selectedType)
    else
      this.productList = this.products
  }

  products = [{
    image: '/assets/image/mono1.jpeg',
    head: " upto 35 Mtr",
    discharge: " upto 35 LPM ",
    power_rating: " 0.5 HP / 0.37KW",
    power_suply: " Single Phase",
    application: " Domestic water pumping to overhead tank, Residential bunglow, Fountains, Gardening, Home pressure boosting system. ",
    type: "monoblock"
  },
  {
    image: '/assets/image/mon4.jpeg',
    head: " upto 42 Mtr",
    discharge: " upto 35 LPM ",
    power_rating: " 1.0 HP / 0.75KW",
    power_suply: " Single Phase",
    application: " Domestic water pumping to overhead tank, Residential bunglow, Fountains, Gardening, Home pressure boosting system. ",
    type: "monoblock"
  },
  {
    image: '/assets/image/mono5.jpeg',
    head: " upto 50 Mtr",
    discharge: " upto 45 LPM ",
    power_rating: " 1.0 HP / 0.75KW",
    power_suply: " Single Phase",
    application: " Domestic water pumping to overhead tank, Residential bunglow, Fountains, Gardening, Home pressure boosting system. ",
    type: "monoblock"
  },
  {
    image: '/assets/image/mono2.jpeg',
    head: " upto 55 Mtr",
    discharge: " upto 50 LPM ",
    power_rating: " 1.0 HP / 0.75KW",
    power_suply: " Single Phase",
    application: " Domestic water pumping to overhead tank, Residential bunglow, Fountains, Gardening, Home pressure boosting system. ",
    type: "monoblock"
  },
  {
    image: '/assets/image/mono3.jpeg',
    head: " upto 50 Mtr",
    discharge: " upto 45 LPM ",
    power_rating: " 1.0 HP / 0.75KW",
    power_suply: " Single Phase",
    application: " Domestic water pumping to overhead tank, Residential bunglow, Fountains, Gardening, Home pressure boosting system. ",
    type: "monoblock"
  },

  {
    // 'src/assets/image/WhatsApp Image 2021-02-07 at 2.56.48 PM.jpeg'
    image: '/assets/image/submersible.jpeg',
    head: "upto 45 Mtr",
    discharge: " upto 50 LPM ",
    power_rating: " 1.0 HP / 0.75KW",
    power_suply: " Single Phase",
    application: " Domestic water pumping to overhead tank, Residential bunglow, Fountains, Gardening, Home pressure boosting system. ",
    type: "submersible"
  },


  ]

}
