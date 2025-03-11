import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }
  url = 'https://jsonplaceholder.typicode.com/albums/'

  obtenerAlbums(){
    return this.http.get(this.url)
  }

}