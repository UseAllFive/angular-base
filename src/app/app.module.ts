import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';
import { ContentfulModule } from 'angular-contentful-service';
import { AppComponent } from './app.component';
import { BaseComponent } from './components/base/base.component';
import { PageComponent } from './components/page/page.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownToHtmlModule,
    ContentfulModule.forRoot(environment.contentful)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
