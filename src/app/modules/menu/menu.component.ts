import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface MenuItem {
	title: string,
	link: string,
	icon: string,
}


@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
	@Input() menuItemList!: MenuItem[];

	constructor(
		private readonly router: Router,
	) {	}

	public navigate(link: string): void {
		this.router.navigate([link]);
	}

	public getIconSrc(name: string): string {
		return `assets/icons/${name}.svg`;
	}

	public trackMenuItemList(): MenuItem[] {
		return this.menuItemList ?? undefined;
	}
}
