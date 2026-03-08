import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenuHeaderComponent } from "./side-menu-header.component/side-menu-header.component";
import { SideMenuOptionsComponent } from "./side-menu-options.component/side-menu-options.component";

@Component({
  selector: 'gifs-side-menu',
  imports: [SideMenuHeaderComponent, SideMenuOptionsComponent],
  templateUrl: './gifs-sideMenu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsSideMenuComponent { }
