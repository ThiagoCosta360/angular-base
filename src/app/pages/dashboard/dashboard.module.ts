import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeModule } from './home/home.module';
import { HistoryModule } from './history/history.module';

@NgModule({
	declarations: [
		DashboardComponent,
	],
	imports: [
		DashboardRoutingModule,
		HomeModule,
		HistoryModule,
	],
})
export class DashboardModule { }
