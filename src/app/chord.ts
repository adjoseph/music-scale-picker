import { Note } from './note';

export class Chord {
	note: Note;
	quality: string;
	constructor(note: Note, quality: string){
		this.note = note;
		this.quality = quality;
	}
}

//an array of Chords ( ie: Chord[] ) will always be in order of stacked thirds 
	//(ie: [0] is the root, [1] the third. [2] the fifth, etc)
//quality refers to whether the note is a major third or a minor third away from the previous note in the chord
//the root's quality is an empty string