import { Component } from '@angular/core';
import { NavItemComponent } from './nav-item.component';
import { NavTrayComponent } from "./nav-tray.component";

@Component({
    selector: 'nav-bar',
    standalone: true,
    templateUrl: './nav-bar.component.html',
    imports: [NavItemComponent, NavTrayComponent]
})
export class NavBarComponent {
}
