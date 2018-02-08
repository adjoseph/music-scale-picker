import { Component, OnInit } from '@angular/core';

import { Note } from '../note';
import { Mode } from '../mode'

import {ScaleService} from '../scale.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

	notes: Note[];
	modes: Mode[];
	selectedMode: Mode;
	
  constructor(private scaleService: ScaleService) { }

  ngOnInit() {
  	this.getNotes();
  	this.getModes();
  }

  getNotes(): void{
		this.notes = this.scaleService.getChromaticScale();
	}

	getModes(): void{
		this.modes = this.scaleService.getModes();
		this.selectedMode = this.modes[0];
	}

	generateMode(note: Note): void{
		this.scaleService.generateMode(note, this.selectedMode);
	}

}
