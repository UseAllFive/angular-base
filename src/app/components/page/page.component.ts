import { Component, OnInit } from '@angular/core';
declare var window;

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Manually tell prerender.io that the page is ready to be prerendered.
    // Typically this should happen after one manually updates the meta tags.
    window.prerenderReady = true;
  }

}
