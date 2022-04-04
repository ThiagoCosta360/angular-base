import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{
				path: 'home',
				loadChildren: () =>
					import('./home/home.module')
						.then((m)=> m.HomeModule)
						.catch((err) => console.error(err)),
			},
			{
				path: 'history',
				loadChildren: () =>
					import('./history/history.module')
						.then((m)=> m.HistoryModule)
						.catch((err) => console.error(err)),
			},
			{
				path: '',
				redirectTo: 'home',
				pathMatch: 'full',
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DashboardRoutingModule {
}
