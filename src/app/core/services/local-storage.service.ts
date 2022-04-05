import { Injectable } from '@angular/core';
import { base64, decrypt, encrypt } from '../utils/crypto-methods';

type Key = 'token' | 'name';

@Injectable({
	providedIn: 'root',
})
export class LocalStorageService {
	public set = (key: Key, item: string): void => this._setItem(key, item);

	public get = (key: Key): string => this._getItem(key);

	public has = (key: Key): boolean => !!localStorage.getItem(base64(key));

	public delete = (key: Key): void => localStorage.removeItem(base64(key));

	public clearAll = (): void => localStorage.clear();

	private _getItem = (key: Key): string => decrypt(localStorage.getItem(base64(key)) ?? '');

	private _setItem = (key: Key, value: any): void => localStorage.setItem(base64(key), encrypt(value));
}
