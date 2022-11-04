import { Component, OnInit,  HostListener } from '@angular/core';

@Component({
  selector: 'app-sociais',
  templateUrl: './sociais.component.html',
  styleUrls: ['./sociais.component.css']
})
export class SociaisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  this.onWindowScroll();
  }
  @HostListener('window:scroll') onWindowScroll() {
    console.log(window.scrollY)
    const inicialheader = document.getElementsByClassName('i-social')[0];
    if (window.scrollY < 300) { 
      inicialheader.classList.add('hidden')
    } else {
      inicialheader.classList.remove('hidden')
      
    }
  }

}
