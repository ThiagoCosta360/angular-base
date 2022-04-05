import * as CryptoTS from 'crypto-ts';
import { environment } from 'src/environments/environment';
import { Buffer } from 'buffer';

export const base64 = (value: string): string =>
	environment.useEncryption ?
		Buffer.from(value, 'base64').toString() : value;

export const encrypt = (value: string): string =>
	environment.useEncryption ?
		CryptoTS.AES.encrypt(value, environment.securityKey).toString() : value;

export const decrypt = (value: string): string =>
	environment.useEncryption ?
		CryptoTS.AES.decrypt(value, environment.securityKey).toString(CryptoTS.enc.Utf8) : value;
