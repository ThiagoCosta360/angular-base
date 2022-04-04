import { NgModule } from '@angular/core';
import { HistoryComponent } from './history.component';
import { HistoryRoutingModule } from './history-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		HistoryComponent,
	],
	imports: [
		CommonModule,
		HistoryRoutingModule,
	],
})
export class HistoryModule { }
