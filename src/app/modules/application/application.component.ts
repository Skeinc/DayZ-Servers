import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'app-application',
    templateUrl: './application.component.html',
    styleUrl: './application.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationComponent {}