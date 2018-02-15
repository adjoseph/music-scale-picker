import { Mode } from './mode'

export class Note {
	name: string;
	inKey: boolean;
	positionInKey: number;
	relativeMode: Mode;
}

//relativeMode describes which mode, with this note as the tonic, preserves the current key signature. 
//this is calculated in scale.service.ts whenever a mode is generated. 