import { Routes } from '@angular/router';
import { Login } from './vistas/login/login';
import { Temporada } from './vistas/temporada/temporada';
import { DetalleTemporada } from './vistas/detalle-temporada/detalle-temporada';
import { TemporadaPlantilla } from './vistas/temporada-plantilla/temporada-plantilla';
import { MenuComponent } from './components/menu/menu.component';

export const routes: Routes = [
  { path: '', redirectTo: 'temporada', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'temporada', component: Temporada },
  { path: 'detalletemporada', component: DetalleTemporada },
  { path: 'temporada-plantilla', component: TemporadaPlantilla },
  { path: '**', redirectTo: 'temporada' }
];
