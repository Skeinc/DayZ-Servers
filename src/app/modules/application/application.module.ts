import { NgModule } from "@angular/core";
import { ApplicationComponent } from "./application.component";
import { LayoutModule } from "@modules/layout/layout.module";

@NgModule({
    declarations: [
        ApplicationComponent,
    ],
    imports: [
        // Modules
        LayoutModule,
    ],
    exports: [
        ApplicationComponent,
    ],
})
export class ApplicationModule {}