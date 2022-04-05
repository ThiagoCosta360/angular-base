import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginComponent } from './login/login.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { TranslateModule } from '@ngx-translate/core';
import { translateModuleConfig } from 'src/app/modules/translation/translation-module-config';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		LoginComponent,
		RegisterComponent,
		ResetPasswordComponent,
		AuthComponent,
	],
	imports: [
		AuthRoutingModule,
		LayoutsModule,
		TranslateModule.forChild(translateModuleConfig),
		FormsModule,
	],
})
export class AuthModule { }
