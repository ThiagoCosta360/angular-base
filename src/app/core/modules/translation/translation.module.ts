import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslationSelectComponent } from './translation-select/translation-select.component';

@NgModule({
	declarations: [
		TranslationSelectComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
	],
	exports: [
		TranslationSelectComponent,
	],
})
export class TranslationModule {}
