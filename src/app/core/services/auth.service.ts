import { Injectable } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';
export interface UserCredentials {
	email: string,
	password: string
}

export interface TokenResponse {
	token: string,
	id: string,
	name: string,
	role: string,
}

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(
		protected readonly storageService: LocalStorageService,
		private readonly router: Router,
	) {}

	public isUserLogged(): boolean {
		return this.storageService.has('name');
	}

	public login(name: string): void {
		this.storageService.set('name', name);
		this.router.navigate(['']);
	}

	public logout(): void {
		this.storageService.delete('name');
		this.router.navigate(['auth']);
	}
}
