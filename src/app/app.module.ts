// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Pages
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { AuthModule } from './pages/auth/auth.module';
// Translation
import { translateModuleConfig } from './core/modules/translation/translation-module-config';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		DashboardModule,
		AuthModule,
		HttpClientModule,
		TranslateModule.forRoot(translateModuleConfig),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
