import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GhiphyResponse } from '../interfaces/giphy.interface';
import { gif } from '../interfaces/gif.interface';
import { gifMapper } from '../mapper/gifs.mapper';
import { map, tap } from 'rxjs';

const loadFromLocalStorage = ()=>{
  const gifsFromLocalStorage = localStorage.getItem('gifs') ?? '{}';
  const gifs = JSON.parse(gifsFromLocalStorage)

  return gifs;
}

@Injectable({
  providedIn: 'root',
})
export class GifsServices {
  private http=inject(HttpClient);

  searchHistory=signal<Record<string, gif[]>>(loadFromLocalStorage());
  searchHistoryKeys=computed(()=>Object.keys(this.searchHistory()));

  trendingGifs = signal<gif[]>([]);
  trendingGifsLoading = signal<boolean>(true);

  serchGifs = signal<gif[]>([]);
  serchGifsLoading = signal<boolean>(false);

  saveGifsToLocalStorage = effect(()=>{
    const historyString = JSON.stringify(this.searchHistory())
    localStorage.setItem('gifs',historyString)
  })

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
      const gifs = gifMapper.mapGhiphyItemsTogifArrays(res.data);
      this.trendingGifsLoading.set(false);
      console.log({gifs});
      this.trendingGifs.set(gifs);
    })
  }

  searchGifs(query:string){
    this.serchGifsLoading.set(true);
    return this.http.get<GhiphyResponse>(`${environment.api_url}/gifs/search`,{
      params:{
        api_key:environment.giphy_api,
        limit: 20,
        q: query
      }
    }).pipe(
      map(({data})=>{
        const gifs = gifMapper.mapGhiphyItemsTogifArrays(data);
        return gifs;
      }),
      tap((res)=>{
        this.serchGifs.set(res);
        this.serchGifsLoading.set(false);
        this.searchHistory.update(history=>({
          ...history,
          [query.toLowerCase()]:res
        }));
      })
    )
  }

  getHistoryGifs(query:string):gif[] {
    return this.searchHistory()[query] ?? []
  }
}
