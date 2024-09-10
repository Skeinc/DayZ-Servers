import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { environment, localizationCodes } from "@environments/environment";
import { TranslateService } from "@ngx-translate/core";
import { LanguageCodeEnum, LanguageShortCodeEnum } from "@shared/enums/language/language.enum";
import { LanguageService } from "@shared/services/language/language.service";
import { Subject } from "rxjs";

@Component({
    selector: 'app-application',
    templateUrl: './application.component.html',
    styleUrl: './application.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationComponent implements OnInit, OnDestroy {
    constructor (
        private translateService: TranslateService,
        private languageService: LanguageService,
    ) {}

    // Subject для отслеживания уничтожения компонента
    private onDestroy$: Subject<void> = new Subject<void>();

    // Текущий язык страницы
    public currentLanguage: LanguageCodeEnum = LanguageCodeEnum.EN;

    ngOnInit(): void {
        // Определяем языковые параметры браузера
        let browserLangCode: LanguageShortCodeEnum = (localStorage.getItem('language-code') ?? this.translateService.getBrowserLang() ?? environment.defaultLocalization) as LanguageShortCodeEnum;
        
        let language: LanguageShortCodeEnum = this.getLanguageByCode(browserLangCode);

        environment.languageCode = localizationCodes[language].code;

        // Устанавливаем локализацию по умолчанию
        this.translateService.setDefaultLang(language);

        this.languageService.setCurrentLanguage(localizationCodes[language].code);

        this.translateService.use(language);
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    // Метод для определения языка по его коду
    private getLanguageByCode(code: LanguageShortCodeEnum): LanguageShortCodeEnum {
        switch (code) {
            case 'en':
                return LanguageShortCodeEnum.EN;
            
            case 'ru':
                return LanguageShortCodeEnum.RU;

            default:
                return LanguageShortCodeEnum.EN;
        }
    }
}