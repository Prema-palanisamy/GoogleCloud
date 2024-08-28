import { Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { ViewtableComponent } from './viewtable/viewtable.component';

export const routes: Routes = [
    {
        path: 'upload',
        component: UploadComponent,
      },
      {
        path: 'view',
        component: ViewtableComponent,
      },
];
