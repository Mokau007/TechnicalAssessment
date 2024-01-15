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

  onContextMenu(event: Event): void {
    event.preventDefault();
  }

  private lastScrollPosition = 0;
  hideNavbar = false;

  @HostListener('window:scroll', ['$event'])
  handleScroll(event: Event): void {
    const currentScrollPosition = window.scrollY ;

    if (currentScrollPosition > this.lastScrollPosition) {
      // Scrolling down
      this.hideNavbar = false;
    } else {
      // Scrolling up
      this.hideNavbar = true;
    }

    this.lastScrollPosition = currentScrollPosition;
  }

  
}
