import { Injectable } from '@angular/core'
import { Song } from '../types'

@Injectable({
	providedIn: 'root'
})
export class SongService {
	private songs: Song[] = [
		{ id: 1, artist: 'Great Artist', name: 'Great Song' },
		{
			id: 2,
			artist: 'Samčo, brat dážďoviek',
			name: 'Soros mi daroval dlažobnú kocku'
		},
		{ id: 3, artist: 'IMT Frown', name: 'Preafektovaná' }
	]

	constructor() {}

	/**
	 * RETURN ALL SONGS
	 */
	public getSongs(): Song[] {
		return this.songs
	}

	/**
	 * ADD NEW SONG
	 */
	public addSong(name: string): void {
		this.songs.push({
			id: Math.max(...this.songs.map(s => s.id)) + 1,
			artist: name + ' gule',
			name: name
		})
	}
}
