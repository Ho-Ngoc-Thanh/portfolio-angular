import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appActiveNavbar]',
})
export class ActiveNavbarDirective implements OnInit {
  @Input() appActiveNavbar: boolean = false;
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this._init();
  }

  _init() {
    if (this.appActiveNavbar) {
      this.el.nativeElement.style.background =
        'linear-gradient(to right, #FF9C1A, #E80505)';
    } else {
      this.el.nativeElement.style.background = '#E1E8EF';
    }
  }
}
