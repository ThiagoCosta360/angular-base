import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLayoutComponent } from './card-layout.component';

@NgModule({
	declarations: [CardLayoutComponent],
	imports: [
		CommonModule,
	],
	exports: [
		CardLayoutComponent,
	],
})
export class CardLayoutModule { }
