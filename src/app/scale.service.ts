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

 //todo :
 	let positionOfSecond = CHROMATICSCALE.indexOf(this.calculateSecond(tonic, mode));
 	CHROMATICSCALE[positionOfSecond].inKey = true;
 	CHROMATICSCALE[positionOfSecond].positionInKey = 2;

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

}
