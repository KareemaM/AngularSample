import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleBootstrapPrototypeComponent } from './example-bootstrap-prototype.component';



const routes: Routes = [
  {
    path: '', component: ExampleBootstrapPrototypeComponent, children: [
      {
        path: '',
        loadChildren: () => import('./00-main/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
     
      {
        path: '',
        redirectTo: '/bootstrap-prototype/alerts',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleBootstrapPrototypeRoutingModule { }
