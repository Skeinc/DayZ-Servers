import { LanguageCodeEnum, LanguageShortCodeEnum } from "@shared/enums/language/language.enum";

export const environment = {
    localizations: [
        LanguageShortCodeEnum.EN,
        LanguageShortCodeEnum.RU,
    ],
    defaultLocalization: LanguageShortCodeEnum.EN,
    languageCode: LanguageCodeEnum.EN,
};

export const localizationCodes = {
    [LanguageShortCodeEnum.EN]: {
        name: 'English',
        code: LanguageCodeEnum.EN,
    },
    [LanguageShortCodeEnum.RU]: {
        name: 'Русский',
        code: LanguageCodeEnum.RU,
    },
};