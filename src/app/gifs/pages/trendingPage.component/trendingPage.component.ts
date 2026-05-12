import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { GifsListComponent } from "../../components/gifs-list.component/gifs-list.component";
import { GifsServices } from '../../services/GifsServices';


// const imagesUrls:string[]=[
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
//   'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
// ];

@Component({
  selector: 'app-trending-page.component',
  imports: [GifsListComponent],
  templateUrl: './trendingPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendingPageComponent { 
  gifs=computed(()=>{});

  GifService = inject(GifsServices);

}
