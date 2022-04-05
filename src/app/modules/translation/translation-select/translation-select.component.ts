import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-translation-select',
	templateUrl: 'translation-select.component.html',
})
export class TranslationSelectComponent {
	public selectedLanguage = environment.translation.defaultLanguage;
	public suportedLanguages = environment.translation.suportedLanguages;

	constructor(
		public translate: TranslateService,
	) {
		this.translate.onLangChange.subscribe(
			(res) => this.selectedLanguage = res.lang,
			(err) => console.error(err),
		);
	}
}
