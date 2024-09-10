import { HttpClient } from "@angular/common/http";
import { MissingTranslationHandler, MissingTranslationHandlerParams, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

// Класс для обработки отсутствующих переводов
export class MissingTranslationService implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams) {
        return `WARNING: '${params.key}' is missing in '${params.translateService.currentLang}' locale`;
    }
}

// Фабричная функция для создания TranslateLoader с использованием HttpClient
export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
    return new TranslateHttpLoader(http, './assets/localization/', '.json');
}