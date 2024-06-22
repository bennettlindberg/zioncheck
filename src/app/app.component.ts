import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../nav/nav-bar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavBarComponent],
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'zioncheck';
}
