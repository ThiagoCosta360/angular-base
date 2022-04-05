import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLayoutComponent } from './menu-layout/menu-layout.component';
import { CardLayoutComponent } from './card-layout/card-layout.component';


@NgModule({
	declarations: [
		MenuLayoutComponent,
		CardLayoutComponent,
	],
	imports: [
		CommonModule,
	],
	exports: [
		MenuLayoutComponent,
		CardLayoutComponent,
	],
})
export class LayoutsModule { }
