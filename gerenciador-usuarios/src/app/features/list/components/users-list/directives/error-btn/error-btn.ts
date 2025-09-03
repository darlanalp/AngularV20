import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appErrorBtn]'
})
export class ErrorBtn implements OnInit  {
  
  elementRef = inject(ElementRef);
  
  hostEl = inject(ElementRef).nativeElement as HTMLElement;  

  ngOnInit(): void {

    this.hostEl.classList.add('error-button');

  }

}
