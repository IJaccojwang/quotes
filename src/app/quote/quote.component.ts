import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'All that we are is the result of what we have thought.', 'Buddha', 'Ian'),
    new Quote(1, 'I have no special talent. I am only passionately curious.', 'Albert Einstein', 'Ian'),
    new Quote(1, 'If you judge people, you have no time to love them.', 'Mother Teresa', 'Ian'),
    new Quote(1, 'Wisely, and slow. They stumble that run fast.', 'William Shakespeare ', 'Ian'),
    new Quote(1, 'I have no special talent. I am only passionately curious.', 'Albert Einstein', 'Ian')
  ]

  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  constructor() { }

  ngOnInit() {
  }

}
