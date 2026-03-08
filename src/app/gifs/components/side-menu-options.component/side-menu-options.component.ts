import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../../app.routes';
import { RouterLink, RouterLinkActive } from "@angular/router";

interface MenuOption{
  label:string,
  subLabel:string,
  icon:string,
  route:string
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuOptionsComponent { 
  menuOptions:MenuOption[]=[
    {
      icon:'fa-solid fa-arrow-trend-up',
      label:'Trending',
      route:'/dashboard/trending',
      subLabel:'Gifs populares'
    },
    {
      icon:'fa-solid fa-magnifying-glass',
      label:'Search',
      route:'/dashboard/search',
      subLabel:'Buscar gifs'
    }
  ]
}
