import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  masterSelected: boolean;
  itemlist = [];
  checkedlist = [];

  constructor() {
    this.masterSelected = false;

    this.itemlist = [
      { id: 1, value: 'Changjinhu (2021)', isSelected: false },
      { id: 2, value: 'Dune (2021)', isSelected: false },
      {
        id: 3,
        value: 'Shang-Chi and the Legend of the Ten Rings (2021)',
        isSelected: false,
      },
      { id: 4, value: 'Free Guy (2021)', isSelected: false },
      { id: 5, value: 'The Many Saints of Newark (2021)', isSelected: false },
      { id: 6, value: 'Candyman (2021)', isSelected: false },
      { id: 7, value: 'No Time to Die (2021)', isSelected: false },
      { id: 8, value: 'Halloween Kills (2021)', isSelected: false },
    ];
  }

  ngOnInit() {
    this.getCheckedItemList();
  }

  getCheckedItemList() {
    this.checkedlist = [];
    for (const item of this.itemlist) {
      if (item.isSelected === true) {
        this.checkedlist.push(item);
      }
    }
  }

  // The master checkbox will check/ uncheck all items
  checkUncheckAll() {
    for (const item of this.itemlist) {
      item.isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }

  checkItem() {
    this.masterSelected = true;
    for (const item of this.itemlist) {
      if (item.isSelected === false) {
        this.masterSelected = false;
      }
    }
    this.getCheckedItemList();
  }
}
