import { Component, OnInit} from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  public quotes = [
    new Quote(1, 'All that we are is the result of what we have thought.', 'Buddha', 'Ian', 'Ian', new Date(2018,6,19), 0, 0, 0),
    new Quote(1, 'I have no special talent. I am only passionately curious.', 'Albert Einstein', 'Ian', 'Ian', new Date(2019,1,3), 0, 0, 0),
    new Quote(1, 'If you judge people, you have no time to love them.', 'Mother Teresa', 'Ian', 'Ian', new Date(2018,10,7), 0, 0, 0),
    new Quote(1, 'Wisely, and slow. They stumble that run fast.', 'William Shakespeare ', 'Ian', 'Ian', new Date(2018,5,6), 0, 0, 0),
    new Quote(1, 'I have no special talent. I am only passionately curious.', 'Albert Einstein', 'Ian', 'Ian', new Date(2019,2,13), 0, 0, 0)
  ]


  toggleDetails(index: number) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  upVote(index: number) {
    this.quotes[index].votes += 1;
    this.quotes[index].up += 1;
  }
  downVote(index: number) {
    this.quotes[index].votes -= 1;
    this.quotes[index].down += 1;
  }
  deleteQuote(index: number){
      let toDelete = confirm(`Are you sure you want to delete this quote`)
      if(toDelete){
        this.quotes.splice(index,1)
      }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
    quote.votes = 0;
  }
  constructor() { }

  ngOnInit() {
  }

}
