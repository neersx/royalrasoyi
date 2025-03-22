import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const content: Routes = [
  {
    path: '',
    children: [
      {path:'', loadChildren : () => import('../../../app/components/dashboards/dashboards.routes').then(r => r.dashboardRoutingModule)},
    ],
  },
];
@NgModule({
  // imports: [RouterModule.forRoot(admin)],
  exports: [RouterModule],
})
export class SaredRoutingModule {}
