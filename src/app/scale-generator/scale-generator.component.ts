import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';

import { Note } from '../note';
import { Mode } from '../mode'

import {ScaleService} from '../scale.service';

import { NotesComponent } from '../notes/notes.component';
import { ModeSelectorComponent } from '../mode-selector/mode-selector.component';

@Component({
  selector: 'app-scale-generator',
  templateUrl: './scale-generator.component.html',
  styleUrls: ['./scale-generator.component.css']
})
export class ScaleGeneratorComponent implements OnInit, AfterViewChecked {

	notes: Note[];
	modes: Mode[];
	selectedNote: Note;
	selectedMode: Mode;


  @ViewChild(NotesComponent) viewChildNotes: NotesComponent;
  @ViewChild(ModeSelectorComponent) viewChildModeSelector: ModeSelectorComponent;

  constructor(private scaleService: ScaleService) { }

    
 ngOnInit() {
  	this.getNotes();
  	this.getModes();
  }

  ngAfterViewChecked(){
    	if(this.selectedNote == this.viewChildNotes.selectedNote || this.viewChildModeSelector.selectedNote)
    		this.tick_then(() => this.generateMode());
    }

  getNotes(): void{
		this.notes = this.scaleService.getChromaticScale();
		this.selectedNote = this.scaleService.getSelectedNote();
	}

	getModes(): void{
		this.modes = this.scaleService.getModes();
		this.selectedMode = this.scaleService.getSelectedMode();
	}

	generateMode(): void{
		if(this.selectedNote)
			this.scaleService.generateMode(this.selectedNote, this.selectedMode);
	}

	//tick methods for ngAfterViewChecked to avoid ExpressionChangedAfterItHasBeenChecked error. 
	//if this seems like a hacky solution, it's officially sanctioned by the Angular team for some reason
	tick() {  this.tick_then(() => { }); }
  	tick_then(fn: () => any) { setTimeout(fn, 0); }

}
