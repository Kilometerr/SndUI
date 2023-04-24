import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/models/items.model';
import { ItemsService } from '../../../services/items.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  itemsList: Items[] = [];
  constructor(private itemservice: ItemsService, private http: HttpClient) { }

  ngOnInit(): void {
    this.itemservice.getRecentOutfits()
    .subscribe({
      next: (itemsList) =>{
        this.itemsList = itemsList;
      },
      error: (response) =>{
        console.log(response);
      }
    });
  }

  fetchData(){
    this.http.get("https://svndapi.azurewebsites.net/api/OutfitRefresh").subscribe();
    setTimeout(() => {
      location.reload();
      }, 2000);

  }

}
