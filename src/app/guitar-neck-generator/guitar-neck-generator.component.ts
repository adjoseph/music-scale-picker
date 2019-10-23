import { Component, OnInit } from '@angular/core';

import { Note } from '../note';
import { Mode } from '../mode';
import { Chord } from '../chord';

import {ScaleService} from '../scale.service';

import { NotesComponent } from '../notes/notes.component';
import { ModeSelectorComponent } from '../mode-selector/mode-selector.component';
import { ChordDisplayComponent } from '../chord-display/chord-display.component'

@Component({
  selector: 'app-scale-generator',
  templateUrl: './scale-generator.component.html',
  styleUrls: ['./scale-generator.component.css']
})
export class GuitarNeckGeneratorComponent implements OnInit {

	notes: Note[];
	modes: Mode[];
	selectedNote: Note;
	selectedMode: Mode;

	chordRoot: Note;
	chord: Chord[];

  constructor(private scaleService: ScaleService) { }

    
 ngOnInit() {
  	this.getNotes();
  	this.getModes();
  }



  getNotes(): void{
		this.scaleService.getChromaticScale().subscribe(notes => this.notes = notes);
		this.scaleService.getSelectedNote().subscribe(note => this.selectedNote = note);
	}

	getModes(): void{
		this.modes = this.scaleService.getModes();
		this.selectedMode = this.scaleService.getSelectedMode();
	}

	generateMode(): void{
		if(this.selectedNote)
			this.scaleService.generateMode(this.selectedNote, this.selectedMode);
		this.chordRoot = null;
		this.chord = null;
	}

	generateChord(): void{
		if(this.chordRoot)
			this.chord = this.scaleService.generateChord(this.chordRoot);
	}

}
