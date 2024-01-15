import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private router:Router){}

  ngOnInit(): void {
    this.router.navigate(['/']).then(()=>{
      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
    })
   
  }
  
  title = 'virtual-visage';

  //Disables the right click event so users cannot download images
  onContextMenu(event: Event): void {
    event.preventDefault();
  }

  
}
