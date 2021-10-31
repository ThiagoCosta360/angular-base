import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuard } from './resources/guards/guest.guard';
import { LoggedGuard } from './resources/guards/logged.guard';

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

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
