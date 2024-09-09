import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { ApplicationModule } from "@modules/application/application.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        // Modules
        AppRoutingModule,
        ApplicationModule,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {}