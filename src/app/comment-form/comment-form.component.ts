import { Component, OnInit } from '@angular/core';
import { Comment } from '../comment'

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  newComment = new Comment(0, "", "",new Date())
  constructor() { }

  ngOnInit() {
  }

}
