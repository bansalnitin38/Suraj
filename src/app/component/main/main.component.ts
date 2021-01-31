import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel';
import { MoreDetailsComponent } from '../more-details/more-details.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  defaultElevation = 2;
  raisedElevation = 8;

  constructor(
    private dialogBox: MatDialog
  ) { }

  ngOnInit(): void {
  }

    // Slider Images
  slides = [{ 'image': '/assets/image/slide-03.jpg' },
    { 'image': '/assets/image/banner.png' },
    // { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' },
    // { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }, 
    // { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }
  ];

  moreDetails(row) {
    const dialogRef = this.dialogBox.open(MoreDetailsComponent,
      {
      width:"700px",
      data:row
    })
  }

  products = [
    {
      image: '/assets/image/mono1.jpeg', price:3400
    },
    {
      image: '/assets/image/Monoblock-Pump.jpg', price:3400
    },
    {
      image: '/assets/image/monoblock.jpg', price:3400
    },
  ]
}
