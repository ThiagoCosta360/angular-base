import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	public loggedName: string;

	constructor(
		private _authService: AuthService,
	) {
		this.loggedName = this._authService.userName();
	}

	public logout(): void {
		this._authService.logout();
	}
}
