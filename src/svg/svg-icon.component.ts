import { Component, Input } from '@angular/core';

@Component({
    selector: 'svg-icon',
    standalone: true,
    imports: [],
    templateUrl: './svg-icon.component.html'
})
export class SvgIconComponent {
    @Input() icon: string = "site-logo";
    @Input() width: string = "40px";
    @Input() height: string = "40px";
    @Input() primaryColor: string = "#003049";
    @Input() secondaryColor: string = "#780000";

    iconsHtml: StringMap = {
        "site-logo": `
            <svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}" viewBox="6 0 24 18" fill="none">
                <path opacity="1.0" d="M22 12.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V12.9C13.5 14.4 14.14 15 15.73 15H19.77C21.36 15 22 14.4 22 12.9Z" stroke="${this.primaryColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
    };
}

type StringMap = {
    [id: string]: string;
}