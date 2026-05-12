import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GifsListComponent } from "../../components/gifs-list.component/gifs-list.component";
import { GifsServices } from '../../services/GifsServices';

@Component({
  selector: 'app-search-page.component',
  imports: [GifsListComponent],
  templateUrl: './searchPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPageComponent { 

  gifService = inject(GifsServices)

  onSearch(query:string){
    console.log(query);
    this.gifService.searchGifs(query)
  }

}
