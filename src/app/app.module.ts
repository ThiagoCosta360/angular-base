import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { AuthModule } from './pages/auth/auth.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		DashboardModule,
		AuthModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
