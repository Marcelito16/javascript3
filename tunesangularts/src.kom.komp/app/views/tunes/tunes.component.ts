import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-tunes',
	// templateUrl: './tunes.component.html',
	styleUrls: ['./tunes.component.scss'],
	template: `
		<div class="tunes">
			<h1>{{ title }}</h1>

			<tunes-search-form
				(titleHasChanged)="changeTheTitle($event)"
				(newSongsHaveArrived)="newSongCame($event)"
			></tunes-search-form>

			<tunes-list [newSong]="newSong"></tunes-list>
		</div>
	`
})
export class TunesComponent implements OnInit {
	title: string = 'Tunes'
	newSong: string = ''

	constructor() {}

	ngOnInit(): void {}

	changeTheTitle(value: string): void {
		// this.title = value
		// event.preventDefault()
	}

	newSongCame(value: string): void {
		this.newSong = value
		event.preventDefault()
	}
}
