import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rxapp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
