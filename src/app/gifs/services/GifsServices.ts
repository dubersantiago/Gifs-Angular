import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GhiphyResponse } from '../interfaces/giphy.interface';
import { gif } from '../interfaces/gif.interface';
import { gifMapper } from '../mapper/gifs.mapper';

@Injectable({
  providedIn: 'root',
})
export class GifsServices {
  private http=inject(HttpClient);

  trendingGifs = signal<gif[]>([])

  constructor(){
    this.loadTrendingGifs();
  }

  loadTrendingGifs(){
    this.http.get<GhiphyResponse>(`${environment.api_url}/gifs/trending`,{
      params:{
        api_key:environment.giphy_api,
        limit: 20
      }
    }).subscribe((res)=>{
      const gifs = gifMapper.mapGhiphyItemsTogifArrays(res.data)
      console.log({gifs});
      
    })
  }
}
