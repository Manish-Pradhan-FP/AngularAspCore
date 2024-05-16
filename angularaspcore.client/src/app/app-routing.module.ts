import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'table',
    loadChildren: () => import('./table/table.module').then(m => m.TableModule),
    data: {
      reuseComponent: true
    }
  },
  {
    path: 'form/:form_name/:id',
    loadChildren: () => import('./form/form.module').then(m => m.FormModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
