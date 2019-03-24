import { Directive, ElementRef } from '@angular/core';
import { QuoteComponent } from '../app/quote/quote.component'

@Directive({
  selector: '[appMostVotes]'
})
export class MostVotesDirective {
  constructor(private elem:ElementRef){
    this.elem.nativeElement.style.backgroundColor = 'yellow';
  }

}
