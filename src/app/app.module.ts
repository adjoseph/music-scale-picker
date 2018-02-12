import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { ScaleService } from './scale.service';
import { NotesComponent } from './notes/notes.component';
import { ModeSelectorComponent } from './mode-selector/mode-selector.component';
import { ScaleGeneratorComponent } from './scale-generator/scale-generator.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    ModeSelectorComponent,
    ScaleGeneratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ScaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
