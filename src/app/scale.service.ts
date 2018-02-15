import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

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

  getChromaticScale(): Observable<Note[]>{
  	return of(CHROMATICSCALE);
  }

  getSelectedNote(): Observable<Note>{
  	return of(this.selectedNote);
  }

  getSelectedMode(){
  	return this.selectedMode;
  }

  resetChromaticScale(){
  	for (let i = 0; i < CHROMATICSCALE.length; i++){
  		CHROMATICSCALE[i].inKey=false;
  		CHROMATICSCALE[i].positionInKey=0;
      CHROMATICSCALE[i].relativeMode=null;
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
    tonic.relativeMode = mode;

 	let second = this.calculateSecond(tonic, mode);
 	second.inKey = true;
 	second.positionInKey = 2;
  second.relativeMode = this.getNextSequentialMode(mode);

 	let third = this.calculateThird(second, mode);
 	third.inKey = true;
 	third.positionInKey = 3;
  third.relativeMode = this.getNextSequentialMode(second.relativeMode);

 	let fourth = this.calculateFourth(third, mode);
 	fourth.inKey = true;
 	fourth.positionInKey = 4;
  fourth.relativeMode = this.getNextSequentialMode(third.relativeMode);

 	let fifth = this.calculateFifth(fourth, mode);
 	fifth.inKey = true;
 	fifth.positionInKey = 5;
  fifth.relativeMode = this.getNextSequentialMode(fourth.relativeMode);

 	let sixth = this.calculateSixth(fifth, mode);
 	sixth.inKey = true;
 	sixth.positionInKey = 6;
  sixth.relativeMode = this.getNextSequentialMode(fifth.relativeMode);

 	let seventh = this.calculateSeventh(sixth, mode);
 	seventh.inKey = true;
 	seventh.positionInKey = 7;
  seventh.relativeMode = this.getNextSequentialMode(sixth.relativeMode);

  }

  getNextSequentialMode(mode: Mode):Mode{
    let position = MODES.indexOf(mode);
    if (position == MODES.length-1){
      return MODES[0]
    }
    else{
      return MODES[position+1]
    }
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


  generateChord(root: Note):Note[]{
    let chord = [root]
    for(let i=0; i < 7; i++){
      chord.push(this.getNextDiatonicThird(chord[i]))
    }
    console.log(chord) //todo this hangs
    return chord;
  }

  getNextDiatonicThird(note:Note):Note{
    let second = this.getNextDiatonicSecond(note)
    return this.getNextDiatonicSecond(second);
  }

  getNextDiatonicSecond(note:Note):Note{
    if(this.getNextSemiTone(note).inKey)
      return this.getNextSemiTone(note);
    else
      return this.getNextTone(note);
  }

}
