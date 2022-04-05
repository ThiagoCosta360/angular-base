import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
	providedIn: 'root',
})
export class GuestGuard implements CanActivateChild {
	constructor(
		private _authService: AuthService,
		private _router: Router,
	) {}
	canActivateChild(): boolean {
		const validated = !this._authService.isUserLogged();

		if (!validated) this._router.navigate(['auth']);
		return validated;
	}
}
