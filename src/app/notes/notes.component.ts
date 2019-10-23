import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Note } from '../note';
import { Mode } from '../mode';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

	@Input() notes: Note[];
	@Input() modes: Mode[];
	@Input() selectedNote: Note;
	@Output() selectedNoteChange: EventEmitter<any> = new EventEmitter();
	@Input() selectedMode: Mode;
	@Output() selectedModeChange: EventEmitter<any> = new EventEmitter();

  @Input() chordRoot: Note;
  @Output() chordRootChange: EventEmitter<any> = new EventEmitter();

  @Input() guitar: Boolean;

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

  setSelectedNoteAndMode(note:Note, mode:Mode){
    this.setSelectedNote(note);
    this.setSelectedMode(mode);
  }

  showChord(root:Note){
    this.chordRoot = root;
    this.chordRootChange.emit(this.chordRoot)
  }

}
