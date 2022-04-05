import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLayoutComponent } from './menu-layout.component';
import { HeaderModule } from 'src/app/modules/header/header.module';
import { MenuModule } from 'src/app/modules/menu/menu.module';

@NgModule({
	declarations: [
		MenuLayoutComponent,
	],
	imports: [
		CommonModule,
		HeaderModule,
		MenuModule,
	],
	exports: [
		MenuLayoutComponent,
	],
})
export class MenuLayoutModule { }
