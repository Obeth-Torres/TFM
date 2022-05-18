import { AnalistaDetailComponent } from './analista-detail/analista-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalistasComponent } from './analistas/analistas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'detail/:id', component: AnalistaDetailComponent },
  {path: 'analistas', component: AnalistasComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
