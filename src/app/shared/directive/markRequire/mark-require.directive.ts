import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, Input } from '@angular/core';

@Directive({
  selector: '[appMarkRequire]',
})
export class MarkRequireDirective {
  @Input() appMarkRequire: boolean = false;
  constructor(
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    if (this.appMarkRequire) {
      this._onInit();
    }
  }

  _onInit() {
    const reqStar = this.document.createElement('span');
    reqStar.style.color = 'red';
    reqStar.innerHTML = '*';
    this.el.nativeElement.appendChild(reqStar);
  }
}
