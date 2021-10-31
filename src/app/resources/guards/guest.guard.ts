import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';


@Injectable({
	providedIn: 'root',
})
export class GuestGuard implements CanActivateChild {
	// constructor(
	// ) {}
	canActivateChild(): boolean {
		const validation = true;

		return validation;
	}
}
