import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MusiciansComponent } from './components/musicians/musicians.component';
import { AboutComponent} from './components/about/about.component';
import { MusicianComponent} from './components/musician/musician.component';
import { SearchComponent} from './components/search/search.component';
const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'musicians', component: MusiciansComponent },
    { path: 'about', component: AboutComponent },
    { path: 'musician/:id', component: MusicianComponent },
    { path: 'search/:text', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },

];
export const app_routing = RouterModule.forRoot(APP_ROUTES, {useHash: true});
