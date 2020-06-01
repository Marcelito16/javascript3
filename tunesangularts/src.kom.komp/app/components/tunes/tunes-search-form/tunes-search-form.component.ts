import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { SongService } from '../../../services/song.service'

@Component({
	selector: 'tunes-search-form',
	// templateUrl: './tunes-search-form.component.html',
	styleUrls: ['./tunes-search-form.component.scss'],
	template: `
		<form (keydown.enter)="newSongsHaveArrived.emit(songInput.value)">
			<input #songInput type="text" />
		</form>
	`
})
export class TunesSearchFormComponent implements OnInit {
	@Output() newSongsHaveArrived = new EventEmitter<string>()

	constructor(private songService: SongService) {}

	ngOnInit(): void {}

	getMusic(name: string): void {
		this.songService.addSong(name)
		event.preventDefault()
	}
}
