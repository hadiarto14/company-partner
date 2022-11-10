import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnerAddComponent } from './partner-add/partner-add.component';
import { PartnerDetailComponent } from './partner-detail/partner-detail.component';
import { PartnerListComponent } from './partner-list/partner-list.component';

const routes: Routes = [
  {
    path: '',
    component: PartnerListComponent,
    data: {
      breadcrumb: 'Home',
    }
  },
  {
    path: 'add',
    component: PartnerAddComponent,
    data: {
      breadcrumb: 'Add Partner',
    },
  },
  {
    path: 'partner/:id',
    component: PartnerDetailComponent,
    data: {
      breadcrumb: 'Partner',
    },
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
