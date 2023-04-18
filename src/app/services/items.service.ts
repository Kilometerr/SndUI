import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from '../models/items.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getRecentOutfits(): Observable<Items[]> {
    return this.http.get<Items[]>('https://svndapi.azurewebsites.net/api/item');
  }
}
