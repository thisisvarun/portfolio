import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home.component').
            then((m) => m.HomeComponent)
        }
    },
    {
        path: 'greetings',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./components/greetings/greetings.component').
            then((m) => m.GreetingsComponent)
        }
    },
    {
        path: 'counter',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./components/counter/counter.component').
            then((m) => m.CounterComponent)
        }
    }
];
