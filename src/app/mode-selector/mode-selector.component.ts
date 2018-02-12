import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Note } from '../note';
import { Mode } from '../mode'



@Component({
  selector: 'app-mode-selector',
  templateUrl: './mode-selector.component.html',
  styleUrls: ['./mode-selector.component.css']
})
export class ModeSelectorComponent implements OnInit {

	@Input() notes: Note[];
	@Input() modes: Mode[];
	@Input() selectedNote: Note;
	@Output() selectedNoteChange: EventEmitter<any> = new EventEmitter();
	@Input() selectedMode: Mode;
	@Output() selectedModeChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

 ngOnInit() {
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


}
