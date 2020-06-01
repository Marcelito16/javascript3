import {
	Component,
	OnInit,
	Input,
	OnChanges,
	SimpleChange
} from '@angular/core'
import { SongService } from '../../../services/song.service'
import { Song } from '../../../types'

@Component({
	selector: 'tunes-list',
	templateUrl: './tunes-list.component.html',
	styleUrls: ['./tunes-list.component.scss']
})
export class TunesListComponent implements OnInit, OnChanges {
	// state
	songs: Song[]
	@Input() newSong: string = ''

	constructor(private songService: SongService) {}

	ngOnInit(): void {
		this.songs = this.songService.getSongs()
	}

	ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
		this.songService.addSong(changes.newSong.currentValue)
	}
}
