import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

// views
import { AboutComponent } from './views/about/about.component'
import { HomeComponent } from './views/home/home.component'
import { TunesComponent } from './views/tunes/tunes.component'

// components
import { TheNavigationComponent } from './components/the-navigation/the-navigation.component';
import { TunesSearchFormComponent } from './components/tunes/tunes-search-form/tunes-search-form.component';
import { TunesListComponent } from './components/tunes/tunes-list/tunes-list.component'

@NgModule({
	declarations: [
		AppComponent,
		AboutComponent,
		HomeComponent,
		TunesComponent,
		TheNavigationComponent,
		TunesSearchFormComponent,
		TunesListComponent
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
