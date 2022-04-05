import { Component } from '@angular/core';
import { dashboardMenuItemList } from './dashboard-menu-item-list';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent {
	public menuItemList = dashboardMenuItemList;
}
