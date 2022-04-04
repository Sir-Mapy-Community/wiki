import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  pancakeSwap:string = environment.pancakeSwap;
  chart:string = environment.chart;
  name:string = environment.name;
  twitter:string = environment.twitter;
  telegram:string = environment.telegram;
  contract:string = environment.contract;

  ngOnInit(): void {
  }

}
