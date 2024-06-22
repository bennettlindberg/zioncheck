import { Component, Input } from '@angular/core';
import { SvgIconComponent } from '../svg/svg-icon.component';

@Component({
    selector: 'nav-item',
    standalone: true,
    imports: [SvgIconComponent],
    templateUrl: './nav-item.component.html'
})
export class NavItemComponent {
    @Input() name: string = "";
    @Input() isNameDisplayed: boolean = true;
    @Input() icon: string = "";
    @Input() link: string = "";
}
