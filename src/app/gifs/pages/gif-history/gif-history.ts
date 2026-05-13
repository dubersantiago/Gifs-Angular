import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifsServices } from '../../services/GifsServices';
import { GifsListComponent } from "../../components/gifs-list.component/gifs-list.component";

@Component({
  selector: 'app-gif-history',
  imports: [GifsListComponent],
  templateUrl: './gif-history.html',
})
export class GifHistory {
  gifsService = inject(GifsServices)

  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map(params => params['query'])
    )
  )

  gifsByKey = computed(()=> this.gifsService.getHistoryGifs(this.query()))

}
