import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        TranslateModule,
    ],
    exports: [
        HeaderComponent,
    ]
})
export class HeaderModule {}