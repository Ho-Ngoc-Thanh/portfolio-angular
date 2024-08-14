import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFullColor]',
})
export class FullColorDirective {
  @Input() appFullColor = 'red';
  constructor(private el: ElementRef) {}
  ngOnInit(){
    this.el.nativeElement.style.color = this.appFullColor
  }
}
