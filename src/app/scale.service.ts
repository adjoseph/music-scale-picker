import { Injectable } from '@angular/core';

import { Note } from './note';
import {CHROMATICSCALE} from './chromatic-scale';

import { Mode } from './mode';
import { MODES } from './modes';

@Injectable()
export class ScaleService {

	selectedNote: Note;
	selectedMode: Mode;

  constructor() {
  	this.selectedMode = MODES[0]; 
  }

  getChromaticScale(){
  	return CHROMATICSCALE;
  }

  getSelectedNote(){
  	return this.selectedNote;
  }

  getSelectedMode(){
  	return this.selectedMode;
  }

  resetChromaticScale(){
  	for (let i = 0; i < CHROMATICSCALE.length; i++){
  		CHROMATICSCALE[i].inKey=false;
  		CHROMATICSCALE[i].positionInKey=0;
  	}
  }

  getModes(){
  	return MODES;
  }

  generateMode(tonic: Note, mode: Mode){
  	this.resetChromaticScale();

  	this.selectedNote = tonic;
  	this.selectedMode = mode;

  	tonic.inKey = true;
  	tonic.positionInKey = 1;

 	let second = this.calculateSecond(tonic, mode);
 	second.inKey = true;
 	second.positionInKey = 2;

 	let third = this.calculateThird(second, mode);
 	third.inKey = true;
 	third.positionInKey = 3;

 	let fourth = this.calculateFourth(third, mode);
 	fourth.inKey = true;
 	fourth.positionInKey = 4;

 	let fifth = this.calculateFifth(fourth, mode);
 	fifth.inKey = true;
 	fifth.positionInKey = 5;

 	let sixth = this.calculateSixth(fifth, mode);
 	sixth.inKey = true;
 	sixth.positionInKey = 6;

 	let seventh = this.calculateSeventh(sixth, mode);
 	seventh.inKey = true;
 	seventh.positionInKey = 7;

  }

  getNextSemiTone(note: Note):Note{
  	let position = CHROMATICSCALE.indexOf(note);
  	if (position == CHROMATICSCALE.length-1){
  		return CHROMATICSCALE[0]
  	}
  	else{
  		return CHROMATICSCALE[position+1]
  	}
  }

  getNextTone(note: Note):Note{
  	let position = CHROMATICSCALE.indexOf(note);
  	if (position == CHROMATICSCALE.length-2){
  		return CHROMATICSCALE[0];
  	}
  	else if (position == CHROMATICSCALE.length-1){
  		return CHROMATICSCALE[1];
  	}
  	else{
  		return CHROMATICSCALE[position+2];
  	}
  }

  calculateSecond(tonic: Note, mode: Mode):Note{
  	if(mode.intervalSequence[0] == 's'){
  		return this.getNextSemiTone(tonic);
  	}
  	else{
  		return this.getNextTone(tonic);
  	}
  }

  calculateThird(second: Note, mode: Mode):Note{
  	if(mode.intervalSequence[1] == 's'){
  		return this.getNextSemiTone(second);
  	}
  	else{
  		return this.getNextTone(second);
  	}
  }

  calculateFourth(third: Note, mode: Mode):Note{
  	if(mode.intervalSequence[2] == 's'){
  		return this.getNextSemiTone(third);
  	}
  	else{
  		return this.getNextTone(third);
  	}
  }

  calculateFifth(fourth: Note, mode: Mode):Note{
  	if(mode.intervalSequence[3] == 's'){
  		return this.getNextSemiTone(fourth);
  	}
  	else{
  		return this.getNextTone(fourth);
  	}
  }

  calculateSixth(fifth: Note, mode: Mode):Note{
  	if(mode.intervalSequence[4] == 's'){
  		return this.getNextSemiTone(fifth);
  	}
  	else{
  		return this.getNextTone(fifth);
  	}
  }

  calculateSeventh(sixth: Note, mode: Mode):Note{
  	if(mode.intervalSequence[5] == 's'){
  		return this.getNextSemiTone(sixth);
  	}
  	else{
  		return this.getNextTone(sixth);
  	}
  }

}
