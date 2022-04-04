import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { translateModuleConfig } from 'src/app/core/modules/translation/translation-module-config';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		HomeComponent,
	],
	imports: [
		CommonModule,
		HomeRoutingModule,
		TranslateModule.forChild(translateModuleConfig),
	],
})
export class HomeModule { }
