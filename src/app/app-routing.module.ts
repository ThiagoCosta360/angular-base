import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuestGuard } from './core/guards/guest.guard';
import { LoggedGuard } from './core/guards/logged.guard';

const activateForLoggeds = [LoggedGuard];
const activateForGuests = [GuestGuard];


const routes: Routes = [
	{
		path: 'auth',
		canActivateChild: activateForGuests,
		loadChildren: () => import('./pages/auth/auth.module')
			.then((m) => m.AuthModule)
			.catch((err) => {
				console.error(err);
			}),
	},
	{
		path: '',
		canActivateChild: activateForLoggeds,
		loadChildren: () =>
			import('./pages/dashboard/dashboard.module')
				.then((m) => m.DashboardModule)
				.catch((err) => {
					console.error(err);
				}),
	},
];

const routerConfig: ExtraOptions = {
	preloadingStrategy: PreloadAllModules,
	scrollPositionRestoration: 'enabled',
};

@NgModule({
	imports: [RouterModule.forRoot(routes, routerConfig)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
