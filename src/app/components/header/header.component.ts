import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    

}

@HostListener('window:scroll') onWindowScroll() {
  const inicialheader = document.getElementsByClassName('container-header')[0];
  if (window.scrollY > 400) { 
    inicialheader.classList.add('small')
    
  } else {
    inicialheader.classList.remove('small')
  }
}
}
