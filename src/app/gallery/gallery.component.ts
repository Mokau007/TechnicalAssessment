import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, AnimationEvent } from '@angular/animations';


interface Item{
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({transform: 'scale(0.5)'}),
        animate('150ms', style({transform: 'scale(1)'}))
      ]),
      transition('visible => void', [
        style({transform: 'scale(1)'}),
        animate('150ms', style({transform: 'scale(0.5)'}))
      ]),
    ]),
    trigger('animation2',[
          transition(':leave',[
            style({opacity:1}),
            animate('50ms',style({opacity:0.8}))
          ])
        ])
   
  ]
})
export class GalleryComponent implements OnInit {

  showCount = false;

  intervalId!: any;

  images : Item[]= [
   
    {imageSrc: '../../assets/images/pexels-eberhard-grossgasteiger-691668.jpg', imageAlt:'image1'},
    {imageSrc: '../../assets/images/pexels-liszt-yu-59106.jpg', imageAlt:'image2'},
    {imageSrc: '../../assets/images/pexels-marina-zvada-19562918.jpg', imageAlt:'image3'},
    {imageSrc: '../../assets/images/pexels-philip-ackermann-1666012.jpg', imageAlt:'image4'},
    {imageSrc: '../../assets/images/pexels-thibaut-tattevin-18273081.jpg', imageAlt:'imgae5'}, 
     
  ];

  imagePreview = false;
  showMask = false;
  currentCarouselImage : Item = this.images[0];
  currentIndex =  0;
  controls = true;
  totalImageCount =  0;

  ngOnInit(): void {
    this.totalImageCount = this.images.length
  }
 

  previewImage (index: number): void{
    this.showMask = true;
    this.imagePreview = true;
    this.showCount = true;
    this.currentIndex =  index

    this.currentCarouselImage =  this.images[index]

    // this.intervalId = setInterval(() => {
    //   this.next();
    // }, 5000); 
  }

  onAnimationEnd(event:AnimationEvent) {

    if(event.toState === 'void'){
      this.showMask = false;
    }

  }

  closePreviewImage(){
    this.imagePreview = false;

    // clearInterval(this.intervalId);
    
  }

  next(){
    this.currentIndex = this.currentIndex +1;

    if(this.currentIndex > this.images.length -1){
      this.currentIndex =  0;
    }

    this.currentCarouselImage = this.images[this.currentIndex]
  }

  previous(){
    this.currentIndex = this.currentIndex -1;

    if(this.currentIndex < 0){
      this.currentIndex =  this.images.length -1;
    }

    this.currentCarouselImage = this.images[this.currentIndex]
  }

  onContextMenu(event: Event): void {
    event.preventDefault();
  }
}
