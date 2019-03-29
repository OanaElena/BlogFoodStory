import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SubCategory} from "../model/subCategory";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() items: SubCategory[];
  @ViewChild('childMenu') public childMenu;

  constructor() { }

  ngOnInit() {
  }

}
