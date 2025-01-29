import {Component, OnInit} from '@angular/core';
import {ChartModule} from "primeng/chart";
import {RouterLink, RouterOutlet} from "@angular/router";
import {AsideMenuComponent} from "../shared/aside-menu/aside-menu.component";



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true,
  imports: [ChartModule, RouterLink, RouterOutlet, AsideMenuComponent]
})

export class DashboardComponent implements OnInit{


  constructor() {
  }

  ngOnInit() {

  }


}
