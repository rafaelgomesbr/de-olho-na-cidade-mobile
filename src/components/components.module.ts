import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LayoutLoginComponent } from './layout-login/layout-login';

@NgModule({
	declarations: [
    	LayoutLoginComponent,
	],
	imports: [
		CommonModule,
		IonicModule
	],
	exports: [
    LayoutLoginComponent,
	]
})
export class ComponentsModule {}
