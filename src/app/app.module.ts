import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { CommentComponent } from './comment/comment.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { ElapsedPipe } from './elapsed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    CommentComponent,
    QuoteDetailsComponent,
    ElapsedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
