import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';

/* 
Directives are flipping great...I wish they had been covered in the lessons
If I were to start over again, I would use a lot more of these
*/

@Directive({
  selector: '[backButton]',
})
export class BackButtonDirective {
  constructor(private location: Location) {}

  @HostListener('click')
  onClick() {
    this.location.back();
  }
}
