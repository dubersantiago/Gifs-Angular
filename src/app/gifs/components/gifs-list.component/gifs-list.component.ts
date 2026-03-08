import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'gifs-list',
  imports: [],
  templateUrl: './gifs-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsListComponent { }
