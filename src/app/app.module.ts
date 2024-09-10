import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { CommonModule, LocationStrategy, PathLocationStrategy } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { ApplicationModule } from "@modules/application/application.module";
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpLoaderFactory, MissingTranslationService } from "@shared/services/localization/localization.service";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        // Modules
        AppRoutingModule,
        ApplicationModule,
        // Localization
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
            missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MissingTranslationService },
            useDefaultLang: false,
        }),
    ],
    providers: [
        {provide: LocationStrategy, useClass: PathLocationStrategy}
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {}