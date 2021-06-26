import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [{
    image: '/assets/image/mono1.jpeg',
    head: " upto 35 Mtr",
    discharge: " upto 35 LPM ",
    power_rating: " 0.5 HP / 0.37KW",
    power_suply: " Single Phase",
    application: " Domestic water pumping to overhead tank, Residential bunglow, Fountains, Gardening, Home pressure boosting system. "

  },
  {
    image: '/assets/image/Monoblock-Pump.jpg',
    head: " upto 55 Mtr",
    discharge: " upto 50 LPM ",
    power_rating: " 1.0 HP / 0.75KW",
    power_suply: " Single Phase",
    application: " Domestic water pumping to overhead tank, Residential bunglow, Fountains, Gardening, Home pressure boosting system. "
  },
  {
    image: '/assets/image/monoblock.jpg',
    head: " upto 50 Mtr",
    discharge: " upto 45 LPM ",
    power_rating: " 1.0 HP / 0.75KW",
    power_suply: " Single Phase",
    application: " Domestic water pumping to overhead tank, Residential bunglow, Fountains, Gardening, Home pressure boosting system. "

  },
  {
    image: '/assets/image/monoblock.jpg',
    head: " upto 50 Mtr",
    discharge: " upto 45 LPM ",
    power_rating: " 1.0 HP / 0.75KW",
    power_suply: " Single Phase",
    application: " Domestic water pumping to overhead tank, Residential bunglow, Fountains, Gardening, Home pressure boosting system. "

  },
  {
    image: '/assets/image/monoblock.jpg',
    head: " upto 50 Mtr",
    discharge: " upto 45 LPM ",
    power_rating: " 1.0 HP / 0.75KW",
    power_suply: " Single Phase",
    application: " Domestic water pumping to overhead tank, Residential bunglow, Fountains, Gardening, Home pressure boosting system. "

  },]

}
