import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  //Add new quote below
  quotes: Quote[] = [
    new Quote('Brenda', 'The only way to learn a new programming language is by writing programs in it. ', 'Dennis Ritchie', new Date(2020, 5, 11)),
    new Quote('Sonn', 'The best error message is the one that never shows up. ', 'Thomas Fuchs', new Date(1995, 7, 10))
  ];

  constructor() { }
  num1: number;
  num2: number;
  count: number;

  uploadQuote(myQuote) {
    this.quotes.push(myQuote);
  }

  toggleDescription(index) {
    this.quotes[index].isDescriptionShown = !this.quotes[index].isDescriptionShown;
  }
  //Delete quote function
  
  deleteQuote(index) {
    confirm('Do you want to delete this quote ?') ? this.quotes.splice(index, 1) : console.log('Not deleted');

  }
  highlightThis(highest) {
    console.log(1);
  }

  addDownVote(index) {
    this.quotes[index].downVotes++;
  }
  addUpVote(index) {
    this.quotes[index].upVotes++;
    // this.checkHighVote();
  }

  checkHighVote() {
    const votesArray: number[] = [];
    for (const quote of this.quotes) {
      votesArray.push(quote.upVotes);
    }
    votesArray.sort();
    console.log(votesArray[votesArray.length - 1]);
    if (votesArray.length - 1 === votesArray.length - 2) {

      return votesArray[votesArray.length - 2];
    }

    return votesArray[votesArray.length - 1];
  }

  ngOnInit() {
  }
}