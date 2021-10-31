import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HistoryComponent } from './history.component';

const routes: Routes = [
	{
		path: '',
		component: HistoryComponent,
		children: [
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HistoryRoutingModule {
}
