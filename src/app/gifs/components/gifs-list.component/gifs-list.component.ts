import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifListItemComponent } from "./gif-list-item.component/gif-list-item.component";

@Component({
  selector: 'gifs-list',
  imports: [GifListItemComponent],
  templateUrl: './gifs-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsListComponent { }
