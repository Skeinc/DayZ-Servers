import { NgModule } from "@angular/core";
import { ApplicationComponent } from "./application.component";

@NgModule({
    declarations: [
        ApplicationComponent,
    ],
    exports: [
        ApplicationComponent,
    ],
})
export class ApplicationModule {}