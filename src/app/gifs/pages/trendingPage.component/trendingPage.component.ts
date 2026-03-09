import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsListComponent } from "../../components/gifs-list.component/gifs-list.component";

@Component({
  selector: 'app-trending-page.component',
  imports: [GifsListComponent],
  templateUrl: './trendingPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendingPageComponent { }
