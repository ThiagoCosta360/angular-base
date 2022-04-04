import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MissingTranslationHandler, TranslateLoader, TranslateModuleConfig } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


class CustomMissingTranslationHandler {
	handle() {
		return 'translation error';
	}
}

export const translateModuleConfig: TranslateModuleConfig = {
	loader: {
		provide: TranslateLoader,
		useClass: TranslateHttpLoader,
		deps: [HttpClient],
	},
	missingTranslationHandler: {
		provide: MissingTranslationHandler,
		useClass: CustomMissingTranslationHandler,
	},
	defaultLanguage: environment.translation.defaultLanguage,
};
