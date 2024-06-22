import { Component } from '@angular/core';
import { SvgIconComponent } from '../svg/svg-icon.component';

@Component({
    selector: 'nav-tray',
    standalone: true,
    imports: [SvgIconComponent],
    templateUrl: './nav-tray.component.html'
})
export class NavTrayComponent {
    screenMode = "light-mode";

    onClick() {
        if (this.screenMode === "light-mode") {
            this.screenMode = "dark-mode";
        } else {
            this.screenMode = "light-mode";
        }
    }
}
