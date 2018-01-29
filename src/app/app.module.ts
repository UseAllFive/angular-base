import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';
import { AppComponent } from './app.component';
import { BaseComponent } from './components/base/base.component';
import { PageComponent } from './components/page/page.component';


@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownToHtmlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
