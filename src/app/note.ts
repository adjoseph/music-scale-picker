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

	static getNSemitones(note: Note, n: number): Note {
		for (let i = 0; i < n; i++) {
			note = this.getNextSemitone(note);
		}

		return note;
	}

	static getPerfectFourth(note: Note): Note {
		return Note.getNSemitones(note, 5);
	}

	static getChromaticScaleStartingFromNote(note: Note): Note[] {
		let nextNote = note;
		let stringChromaticScale: Note[] = [];
        stringChromaticScale.push(nextNote);

        for (let i = 1; i < CHROMATICSCALE.length; i++) {
          nextNote = Note.getNextSemitone(nextNote);
          stringChromaticScale.push(nextNote);
		}
		
		return stringChromaticScale;
	}
}




