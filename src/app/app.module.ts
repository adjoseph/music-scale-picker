import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatSelectModule, MatOptionModule, MatFormFieldModule, MatCardModule} from '@angular/material';


import { AppComponent } from './app.component';
import { ScaleService } from './scale.service';
import { NotesComponent } from './notes/notes.component';
import { StringsComponent } from './strings/strings.component';
import { ModeSelectorComponent } from './mode-selector/mode-selector.component';
import { ScaleGeneratorComponent } from './scale-generator/scale-generator.component';
import { AppRoutingModule } from './/app-routing.module';
import { ChordDisplayComponent } from './chord-display/chord-display.component';
import { GuitarNeckGeneratorComponent } from './guitar-neck-generator/guitar-neck-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    StringsComponent,
    ModeSelectorComponent,
    ScaleGeneratorComponent,
    ChordDisplayComponent,
    GuitarNeckGeneratorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, 
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [ScaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
