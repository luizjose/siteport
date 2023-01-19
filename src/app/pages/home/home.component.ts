import { Component, OnInit,  HostListener, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
    const slides = document.querySelectorAll('[data-js="carousel__item"]');
    const nextButton = document.querySelector('[data-js="carousel__button--next"]');
    const prevButton = document.querySelector('[data-js="carousel__button--prev"]');
    let currentSlideIndex= 0;
    nextButton.addEventListener('click',() => {
      if (currentSlideIndex === slides.length -1){
        currentSlideIndex = 0
      }else {
      currentSlideIndex++
      }
      slides.forEach(slide => {
        slide.classList.remove('carousel__item--visible');
      })
      slides[currentSlideIndex].classList.add('carousel__item--visible');
    });
    prevButton.addEventListener('click', ()=>{
      if (currentSlideIndex === 0){
        currentSlideIndex = slides.length -1
      }else {
      currentSlideIndex--
      }
      slides.forEach(slide => {
        slide.classList.remove('carousel__item--visible')
      })
      slides[currentSlideIndex].classList.add('carousel__item--visible')
    })
  }
  @HostListener('window:scroll') onWindowScroll() {
    console.log(window.scrollY)
    const inicialheader = document.getElementsByClassName('dinamic')[0];
    if (window.scrollY < 214) { 
      inicialheader.classList.remove('after')
    } else {
      inicialheader.classList.add('after');
      
    }
  }
  
}
