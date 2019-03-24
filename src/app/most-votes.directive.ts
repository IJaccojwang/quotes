import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appMostVotes]'
})
export class MostVotesDirective {

  constructor(private elem:ElementRef){
      this.elem.nativeElement.style.backgroundColor = 'yellow';
  }

}
