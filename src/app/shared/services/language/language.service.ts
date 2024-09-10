import { Injectable } from "@angular/core";
import { LanguageCodeEnum } from "@shared/enums/language/language.enum";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class LanguageService {
    // Cубъект для хранения текущего языка системы
    private languageSubject = new BehaviorSubject<LanguageCodeEnum>(LanguageCodeEnum.EN);
    
    // Observable для подписки на изменения языка
    public currentLanguage$ = this.languageSubject.asObservable();

    // Метод для установки языка системы
    public setCurrentLanguage(language: LanguageCodeEnum) {
        this.languageSubject.next(language);
    }

    // Метод для получения языка системы
    public getCurrentLanguage(): LanguageCodeEnum {
        return this.languageSubject.getValue();
    }
}