import { Mode } from './mode'
import { CHROMATICSCALE } from './chromatic-scale';

export class Note {
	name: string;
	inKey: boolean;
	positionInKey: number;
	relativeMode: Mode;
	guitar: boolean;
	//relativeMode describes which mode, with this note as the tonic, preserves the current key signature. 
		//this is calculated in scale.service.ts whenever a mode is generated. 

	static getNextSemitone(note: Note): Note {
		//debugger;
		let position = CHROMATICSCALE.indexOf(note);
		if (position == CHROMATICSCALE.length-1){
			return CHROMATICSCALE[0]
		}
		else{
			return CHROMATICSCALE[position+1]
		}
	}

	static getNextTone(note: Note):Note{
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

	static getPerfectFourth(note: Note): Note {
		//debugger;
		for (let i = 0; i < 5; i++) {
			note = this.getNextSemitone(note);
		}

		return note;
	}
}




