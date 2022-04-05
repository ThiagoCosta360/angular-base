import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from 'src/app/modules/menu/menu.component';

@Component({
	selector: 'app-menu-layout',
	templateUrl: './menu-layout.component.html',
	styleUrls: ['./menu-layout.component.scss'],
})
export class MenuLayoutComponent {
	@Input() menuItemList!: MenuItem[];


	// private _menuItemList = new BehaviorSubject<MenuItem[]>([]);

	// @Input()
	// set menuItemList(value: MenuItem[]) {
	// 	this._menuItemList.next(value);
	// }

	// get menuItemList() {
	// 	return this._menuItemList.getValue();
	// }
}
