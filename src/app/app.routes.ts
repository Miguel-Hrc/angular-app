import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AsterixComponent } from './asterix/asterix.component';
import { AssurancetourixComponent } from './assurancetourix/assurancetourix.component';
import { ObelixComponent } from './obelix/obelix.component';
import { PanoramixComponent } from './panoramix/panoramix.component';


const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'about',
      component: AboutComponent,
      title: 'About page'
    },
    {
      path: 'contact',
      component: ContactComponent,
      title: 'Contact page'
    },
    {
      path: 'Asterix',
      component: AsterixComponent,
      title: 'Asterix page'
    },
    {
      path: 'Assurancetourix',
      component: AssurancetourixComponent,
      title: 'Assurancetourix page'
    },
    {
      path: 'Obelix',
      component: ObelixComponent,
      title: 'Obelix page'
    },
    {
      path: 'Panoramix',
      component: PanoramixComponent,
      title: 'Panoramix page'
    },
];

export default routeConfig;