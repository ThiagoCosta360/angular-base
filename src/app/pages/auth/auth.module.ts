import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginComponent } from './login/login.component';
import { TranslateModule } from '@ngx-translate/core';
import { translateModuleConfig } from 'src/app/modules/translation/translation-module-config';
import { FormsModule } from '@angular/forms';
import { CardLayoutModule } from 'src/app/layouts/card-layout/card-layout.module';

@NgModule({
	declarations: [
		LoginComponent,
		RegisterComponent,
		ResetPasswordComponent,
		AuthComponent,
	],
	imports: [
		AuthRoutingModule,
		CardLayoutModule,
		TranslateModule.forChild(translateModuleConfig),
		FormsModule,
	],
})
export class AuthModule { }
