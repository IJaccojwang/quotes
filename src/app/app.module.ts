import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { CommentComponent } from './comment/comment.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { ElapsedPipe } from './elapsed.pipe';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { MostVotesDirective } from './most-votes.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    CommentComponent,
    QuoteDetailsComponent,
    ElapsedPipe,
    CommentFormComponent,
    QuoteFormComponent,
    MostVotesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
