import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// views
import { AboutComponent } from './views/about/about.component'
import { HomeComponent } from './views/home/home.component'
import { TunesComponent } from './views/tunes/tunes.component'

// routes
const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'tunes', component: TunesComponent },
	{ path: 'about', component: AboutComponent }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
