import { Component } from '@angular/core';

import { BaseComponent } from '@amorphicai-workspace/xplat/core';
import { EventData, ItemEventData, SearchBar } from '@nativescript/core';

@Component({
  moduleId: module.id,
  selector: 'amorphicai-workspace-messages',
  templateUrl: './messages.component.html',
})
export class MessagesComponent extends BaseComponent {
  countries: { name: string; imageSrc: string }[] = [
    {
      name: 'Australia',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/au.png',
    },
    {
      name: 'Belgium',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/be.png',
    },
    {
      name: 'Bulgaria',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/bg.png',
    },
    {
      name: 'Canada',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/ca.png',
    },
    {
      name: 'Switzerland',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/ch.png',
    },
    {
      name: 'China',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/cn.png',
    },
    {
      name: 'Czech Republic',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/cz.png',
    },
    {
      name: 'Germany',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/de.png',
    },
    {
      name: 'Spain',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/es.png',
    },
    {
      name: 'Ethiopia',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/et.png',
    },
    {
      name: 'Croatia',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/hr.png',
    },
    {
      name: 'Hungary',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/hu.png',
    },
    {
      name: 'Italy',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/it.png',
    },
    {
      name: 'Jamaica',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/jm.png',
    },
    {
      name: 'Romania',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/ro.png',
    },
    {
      name: 'Russia',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/ru.png',
    },
    {
      name: 'United States',
      imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/us.png',
    },
  ];

  searchPhrase: string;

  constructor() {
    super();
  }

  onClear($event: EventData) {
    const searchBar = $event.object as SearchBar;
    console.log('SearchBar clear event: text:', searchBar.text);
  }

  onSubmit($event: EventData) {
    const searchBar = $event.object as SearchBar;
    console.log('SearchBar submit event: text:', searchBar.text);
  }

  onTextChanged($event: EventData) {
    const searchBar = $event.object as SearchBar;
    console.log('SearchBar textChange event: text:', searchBar.text);
  }

  onItemLoading($event: ItemEventData) {
    console.log('Item is loading:', $event.index);
  }

  onItemTap($event: ItemEventData) {
    console.log('Item tapped:', $event.index);
  }

  onLoadMoreItems($event: EventData) {
    console.log('Load more items');
  }

  onScroll($event: Event) {
    console.log('CollectionView scroll event');
  }

  onScrollEnd($event: EventData) {
    console.log('CollectionView scroll end event');
  }
}
