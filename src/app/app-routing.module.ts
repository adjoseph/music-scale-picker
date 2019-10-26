import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScaleGeneratorComponent } from './scale-generator/scale-generator.component';
import { GuitarNeckGeneratorComponent } from './guitar-neck-generator/guitar-neck-generator.component';

const routes: Routes = [
	{ path: '', redirectTo: 'guitar-neck-generator', pathMatch: 'full'},
	{ path: 'guitar-neck-generator', component: GuitarNeckGeneratorComponent },
	{ path: 'scale-generator', component: ScaleGeneratorComponent },
	{ path: '**', redirectTo: 'scale-generator', pathMatch: 'full'}
	//{ path: 'scale-generator/:selectedNote', component: ScaleGeneratorComponent }, //todo

];

@NgModule({

	imports: [ RouterModule.forRoot(routes) ],

  	exports: [ RouterModule ]
})
export class AppRoutingModule {}