import { Mode } from './mode'

export const MODES: Mode[] = [
	{name: 'Ionian', intervalSequence: 'TTsTTTs'},
	{name: 'Dorian', intervalSequence: 'TsTTTsT'},
	{name: 'Phyrgian', intervalSequence: 'sTTTsTT'},
	{name: 'Lydian', intervalSequence: 'TTTsTTs'},
	{name: 'Mixolydian', intervalSequence: 'TTsTTsT'},
	{name: 'Aeolian', intervalSequence: 'TsTTsTT'},
	{name: 'Locrian', intervalSequence: 'sTTsTTT'}
]