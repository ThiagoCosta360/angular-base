import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { TranslateModule } from '@ngx-translate/core';
import { translateModuleConfig } from '../translation/translation-module-config';
import { TranslationModule } from '../translation/translation.module';

@NgModule({
	declarations: [
		HeaderComponent,
	],
	imports: [
		CommonModule,
		TranslateModule.forChild(translateModuleConfig),
		TranslationModule,
	],
	exports: [
		HeaderComponent,
	],
})
export class HeaderModule { }
