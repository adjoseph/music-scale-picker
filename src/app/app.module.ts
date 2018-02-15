import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { ScaleService } from './scale.service';
import { NotesComponent } from './notes/notes.component';
import { ModeSelectorComponent } from './mode-selector/mode-selector.component';
import { ScaleGeneratorComponent } from './scale-generator/scale-generator.component';
import { AppRoutingModule } from './/app-routing.module';
import { ChordDisplayComponent } from './chord-display/chord-display.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    ModeSelectorComponent,
    ScaleGeneratorComponent,
    ChordDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ScaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
