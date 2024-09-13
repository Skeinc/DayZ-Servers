import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
    declarations: [
        LayoutComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        TranslateModule,
    ],
    exports: [
        LayoutComponent,
    ]
})
export class LayoutModule {}