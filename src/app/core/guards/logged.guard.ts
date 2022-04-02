import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class LoggedGuard implements CanActivateChild {
	// constructor(
	// ) {}
	canActivateChild(): boolean {
		const validation = true;

		return validation;
	}
}
