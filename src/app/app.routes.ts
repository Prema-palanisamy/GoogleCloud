import { Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { ViewtableComponent } from './viewtable/viewtable.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'upload',
        component: UploadComponent,
      },
      {
        path: 'view',
        component: ViewtableComponent,
      },
      {
        path: 'home',
        component: AppComponent,
      }
];
