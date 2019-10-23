import { Component, OnInit, AfterContentInit, Input, Output, EventEmitter } from '@angular/core';

import { Note } from '../note';
import { Mode } from '../mode';
import { InstrumentString } from '../InstrumentString';
import { ScaleService } from '../scale.service';
import { CHROMATICSCALE } from '../chromatic-scale';

@Component({
  selector: 'app-strings',
  templateUrl: './strings.component.html',
  styleUrls: ['./strings.component.css']
})
export class StringsComponent implements AfterContentInit {

	@Input() notes: Note[];
	@Input() modes: Mode[];
	@Input() selectedNote: Note;
	@Output() selectedNoteChange: EventEmitter<any> = new EventEmitter();
	@Input() selectedMode: Mode;
	@Output() selectedModeChange: EventEmitter<any> = new EventEmitter();

  @Input() chordRoot: Note;
  @Output() chordRootChange: EventEmitter<any> = new EventEmitter();

  @Input() stringsNumber: number;
  lowString: Note;
  strings: InstrumentString[] = [];

  constructor() { }

  ngAfterContentInit() {
    
    let stringChromaticScale: Note[] = [];

    CHROMATICSCALE.forEach((note: Note) => {
      if (note.name == 'E') {
        this.lowString = note;

        stringChromaticScale = Note.getChromaticScaleStartingFromNote(note);
      }
    }) 
   
    this.strings.push({openNote: this.lowString, chromaticScale: stringChromaticScale})

    let currentString: Note = this.lowString;

    for (let i = 1; i < this.stringsNumber; i++) {
      currentString = Note.getPerfectFourth(currentString)
      stringChromaticScale = Note.getChromaticScaleStartingFromNote(currentString);
      this.strings.push({openNote: currentString, chromaticScale: stringChromaticScale})
    }
  }

  getSelectedNote(){
  	return this.selectedNote;
  }

  getSelectedMode(){
  	return this.selectedMode;
  }

  setSelectedNote(note: Note){
  	this.selectedNote = note;
  	this.selectedNoteChange.emit(this.selectedNote)
  }

  setSelectedMode(mode: Mode){
  	this.selectedMode = mode;
  	this.selectedModeChange.emit(this.selectedMode)
  }

  setSelectedNoteAndMode(note:Note, mode:Mode){
    this.setSelectedNote(note);
    this.setSelectedMode(mode);
  }

  showChord(root:Note){
    this.chordRoot = root;
    this.chordRootChange.emit(this.chordRoot)
  }

}
