import { Injectable } from '@angular/core';

import { Note } from './note';
import {CHROMATICSCALE} from './chromatic-scale';

import { Mode } from './mode';
import { MODES } from './modes';

@Injectable()
export class ScaleService {

  constructor() { }

  getChromaticScale(){
  	return CHROMATICSCALE;
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
  	let positionOfTonic = CHROMATICSCALE.indexOf(tonic);

  	CHROMATICSCALE[positionOfTonic].inKey = true;
  	CHROMATICSCALE[positionOfTonic].positionInKey = 1;

 	let positionOfSecond = CHROMATICSCALE.indexOf(this.calculateSecond(tonic, mode));
 	CHROMATICSCALE[positionOfSecond].inKey = true;
 	CHROMATICSCALE[positionOfSecond].positionInKey = 2;

 	let positionOfThird = CHROMATICSCALE.indexOf(this.calculateThird(CHROMATICSCALE[positionOfSecond], mode));
 	CHROMATICSCALE[positionOfThird].inKey = true;
 	CHROMATICSCALE[positionOfThird].positionInKey = 3;

 	let positionOfFourth = CHROMATICSCALE.indexOf(this.calculateFourth(CHROMATICSCALE[positionOfThird], mode));
 	CHROMATICSCALE[positionOfFourth].inKey = true;
 	CHROMATICSCALE[positionOfFourth].positionInKey = 4;

 	let positionOfFifth = CHROMATICSCALE.indexOf(this.calculateFifth(CHROMATICSCALE[positionOfFourth], mode));
 	CHROMATICSCALE[positionOfFifth].inKey = true;
 	CHROMATICSCALE[positionOfFifth].positionInKey = 5;

 	let positionOfSixth = CHROMATICSCALE.indexOf(this.calculateSixth(CHROMATICSCALE[positionOfFifth], mode));
 	CHROMATICSCALE[positionOfSixth].inKey = true;
 	CHROMATICSCALE[positionOfSixth].positionInKey = 6;

 	let positionOfSeventh = CHROMATICSCALE.indexOf(this.calculateSeventh(CHROMATICSCALE[positionOfSixth], mode));
 	CHROMATICSCALE[positionOfSeventh].inKey = true;
 	CHROMATICSCALE[positionOfSeventh].positionInKey = 7;

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
