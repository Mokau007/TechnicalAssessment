import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  
})
export class HomeComponent {

  images = [
    {name: 'pexels-eberhard-grossgasteiger-691668.jpg'},
    {name: 'pexels-liszt-yu-59106.jpg'},
    {name: 'pexels-marina-zvada-19562918.jpg'},
    

  ];

  items = [
    { title: 'Item 1', content: 'Lorem ipsum dolor sit amet.' },
    { title: 'Item 2', content: 'Consectetur adipiscing elit.' },
    { title: 'Item 3', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    // Add more items as needed
  ];
}
