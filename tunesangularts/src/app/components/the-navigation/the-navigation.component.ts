import { Component, OnInit, Input } from '@angular/core'

@Component({
	selector: 'the-navigation',
	templateUrl: './the-navigation.component.html',
	styleUrls: ['./the-navigation.component.scss']
})
export class TheNavigationComponent implements OnInit {
	@Input() brand: string = ''

	constructor() {}

	ngOnInit(): void {}
}
