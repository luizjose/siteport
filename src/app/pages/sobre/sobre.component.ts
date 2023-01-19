import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sobre',
  template: `<swiper
  [slidesPerView]="3"
  [spaceBetween]="30"
  [freeMode]="true"
  [pagination]="{
    clickable: true
  }"
  class="mySwiper"
>
  <ng-template swiperSlide>Slide 1</ng-template
  ><ng-template swiperSlide>Slide 2</ng-template
  ><ng-template swiperSlide>Slide 3</ng-template
  ><ng-template swiperSlide>Slide 4</ng-template
  ><ng-template swiperSlide>Slide 5</ng-template
  ><ng-template swiperSlide>Slide 6</ng-template
  ><ng-template swiperSlide>Slide 7</ng-template
  ><ng-template swiperSlide>Slide 8</ng-template
  ><ng-template swiperSlide>Slide 9</ng-template>
</swiper>`,


  templateUrl: './sobre.component.html',
  
  encapsulation: ViewEncapsulation.None,
})
export class SobreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
