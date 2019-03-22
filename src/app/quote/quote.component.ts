import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'All that we are is the result of what we have thought.', 'Buddha', 'Ian', new Date(2018,6,19)),
    new Quote(1, 'I have no special talent. I am only passionately curious.', 'Albert Einstein', 'Ian', new Date(2019,1,3)),
    new Quote(1, 'If you judge people, you have no time to love them.', 'Mother Teresa', 'Ian', new Date(2018,10,7)),
    new Quote(1, 'Wisely, and slow. They stumble that run fast.', 'William Shakespeare ', 'Ian', new Date(2018,5,6)),
    new Quote(1, 'I have no special talent. I am only passionately curious.', 'Albert Einstein', 'Ian', new Date(2019,2,13))
  ]

  toggleDetails(index: number) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  deleteQuote(index: number){
      let toDelete = confirm(`Are you sure you want to delete this quote`)
      if(toDelete){
        this.quotes.splice(index,1)
      }
  }
  constructor() { }

  ngOnInit() {
  }

}
