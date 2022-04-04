import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  pancakeSwap:string = environment.pancakeSwap;
  chart:string = environment.chart;
  contract:string = environment.contract;

  ngOnInit(): void {
  }

}
