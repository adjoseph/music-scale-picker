import { Component, OnInit, Input} from '@angular/core';

import { Note } from '../note';
import { Chord } from '../chord';

@Component({
  selector: 'app-chord-display',
  templateUrl: './chord-display.component.html',
  styleUrls: ['./chord-display.component.css']
})
export class ChordDisplayComponent implements OnInit {

	@Input() chord: Chord[];

  constructor() { }

  ngOnInit() {
  }

}
