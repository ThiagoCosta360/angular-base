import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MenuLayoutModule } from 'src/app/layouts/menu-layout/menu-layout.module';
@NgModule({
	declarations: [
		DashboardComponent,
	],
	imports: [
		DashboardRoutingModule,
		MenuLayoutModule,
	],
})
export class DashboardModule { }
