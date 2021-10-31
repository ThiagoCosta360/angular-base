import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginComponent } from './login/login.component';

@NgModule({
	declarations: [
		LoginComponent,
		RegisterComponent,
		ResetPasswordComponent,
		AuthComponent,
	],
	imports: [
		AuthRoutingModule,
	],
})
export class AuthModule { }
