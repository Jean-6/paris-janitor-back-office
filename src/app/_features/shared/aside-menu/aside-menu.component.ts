import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  standalone: true,
  styleUrl: './aside-menu.component.css',
  imports:[CommonModule]
})
export class AsideMenuComponent implements OnInit{
  ngOnInit(): void {
  }

}
