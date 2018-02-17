import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScaleGeneratorComponent } from './scale-generator/scale-generator.component';

const routes: Routes = [
	{ path: '', redirectTo: 'scale-generator', pathMatch: 'full'},
  	{ path: 'scale-generator', component: ScaleGeneratorComponent },
  	{ path: 'scale-generator/:selectedNote', component: ScaleGeneratorComponent } //todo
];

@NgModule({

	imports: [ RouterModule.forRoot(routes) ],

  	exports: [ RouterModule ]
})
export class AppRoutingModule {}