import { NgModule } from "@angular/core";
import { OverviewComponent } from "./overview.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
    declarations: [
        OverviewComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        TranslateModule,
    ],
    exports: [
        OverviewComponent,
    ]
})
export class OverviewModule {}