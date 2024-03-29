import { Component, OnInit} from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
   quotes = [
    new Quote(1, 'All that we are is the result of what we have thought.', 'Buddha', 'Ian', 'Dan', new Date(2018,6,19), 0, 0, 0),
    new Quote(2, 'I have no special talent. I am only passionately curious.', 'Albert Einstein', 'Don', 'Omondi', new Date(2019,1,3), 0, 0, 0),
    new Quote(3, 'If you judge people, you have no time to love them.', 'Mother Teresa', 'Faith', 'Maingi', new Date(2018,10,7), 0, 0, 0),
    new Quote(4, 'Wisely, and slow. They stumble that run fast.', 'William Shakespeare ', 'Brian', 'Mbugua', new Date(2018,5,6), 0, 0, 0),
    new Quote(5, 'I have no special talent. I am only passionately curious.', 'Albert Einstein', 'Michelle', 'Samuel', new Date(2019,2,13), 0, 0, 0)
  ]

  highestVote: number = 0
  highestsaying: string
  highestauthor: string
  highlight() {
    this.highestVote = 0;
    for(var u = 0; u < this.quotes.length; u++){
      if(this.quotes[u].votes > this.highestVote) {
        this.highestVote = this.quotes[u].votes;
        this.highestsaying = this.quotes[u].saying;
        this.highestauthor = this.quotes[u].author;
      }
    }
  }


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
    quote.votes = 0;
    quote.up = 0;
    quote.down = 0;
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
