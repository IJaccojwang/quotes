import { Component, OnInit } from '@angular/core';
import { Comment } from '../comment'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments = [
    new Comment(1, 'Cool', 'Ian', new Date(2018,6,19))
  ]

  constructor() { }

  ngOnInit() {
  }

}
