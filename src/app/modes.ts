import { Mode } from './mode'

export const MODES: Mode[] = [
	{name: 'Ionian', intervalSequence: 'TTsTTTs', description: 'major'},
	{name: 'Dorian', intervalSequence: 'TsTTTsT', description: 'minor with #6'},
	{name: 'Phyrgian', intervalSequence: 'sTTTsTT', description: 'minor with b2'},
	{name: 'Lydian', intervalSequence: 'TTTsTTs', description: 'major with #4'},
	{name: 'Mixolydian', intervalSequence: 'TTsTTsT', description: 'major with b7'},
	{name: 'Aeolian', intervalSequence: 'TsTTsTT', description: 'minor'},
	{name: 'Locrian', intervalSequence: 'sTTsTTT', description: 'minor with b2 and b5'}
]

//the description is what notes (relative to tonic) that distinguish the mode from the parallel major/minor
//for example, C Lydian is different from Cmajor (ionian) because it has a flat seventh

//calculate relative modes in scale service