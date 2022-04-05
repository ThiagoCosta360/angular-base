import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	name = '';
	constructor(
		private _authService: AuthService,
	) {}

	public login(): void {
		this._authService.login(this.name);
	}
}

