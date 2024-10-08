import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { HeaderModule } from "@shared/components/header/header.module";

@NgModule({
    declarations: [
        LayoutComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        TranslateModule,
        // Components
        HeaderModule,
    ],
    exports: [
        LayoutComponent,
    ]
})
export class LayoutModule {}