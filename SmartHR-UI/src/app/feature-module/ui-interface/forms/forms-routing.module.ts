import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
import { FormBasicInputsComponent } from './form-elements/form-basic-inputs/form-basic-inputs.component';
import { FormCheckboxRadiosComponent } from './form-elements/form-checkbox-radios/form-checkbox-radios.component';
import { FormElementsComponent } from './form-elements/form-elements/form-elements.component';
import { FormFileuploadComponent } from './form-elements/form-fileupload/form-fileupload.component';
import { FormGridGuttersComponent } from './form-elements/form-grid-gutters/form-grid-gutters.component';
import { FormInputGroupsComponent } from './form-elements/form-input-groups/form-input-groups.component';

import { FormSelectComponent } from './form-elements/form-select/form-select.component';
import { FormFloatingLabelsComponent } from './layouts/form-floating-labels/form-floating-labels.component';
import { FormMaskComponent } from './form-elements/form-mask/form-mask.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'form-elements/form-basic-inputs',
        component: FormBasicInputsComponent,
      },
      {
        path: 'form-elements/form-checkbox-radios',
        component: FormCheckboxRadiosComponent,
      },
      {
        path: 'form-elements/form-grid-gutters',
        component: FormGridGuttersComponent,
      },
      {
        path: 'form-elements',
        component: FormElementsComponent,
      },
      {
        path: 'form-elements/form-fileupload',
        component: FormFileuploadComponent,
      },
      {
        path: 'form-elements/form-grid-gutters',
        component: FormGridGuttersComponent,
      },
      {
        path: 'form-elements/form-input-groups',
        component: FormInputGroupsComponent,
      },
      // {
      //   path: 'form-mask',
      //   component: FormMaskComponent,
      // },
      {
        path: 'form-elements/form-select',
        component: FormSelectComponent,
      },

      {
        path: 'layouts/form-floating-labels',
        component: FormFloatingLabelsComponent,
      },

      {
        path: 'form-elements/form-mask',
        component: FormMaskComponent,
      },
      {
        path: 'layouts/form-horizontal',
        loadChildren: () =>
          import('./layouts/form-horizontal/form-horizontal.module').then(
            (m) => m.FormHorizontalModule
          ),
      },
      {
        path: 'layouts/form-vertical',
        loadChildren: () =>
          import('./layouts/form-vertical/form-vertical.module').then(
            (m) => m.FormVerticalModule
          ),
      },
      {
        path: 'form-validation',
        loadChildren: () =>
          import('./form-validation/form-validation.module').then(
            (m) => m.FormValidationModule
          ),
      },
      {
        path: 'form-wizard',
        loadChildren: () =>
          import('./form-wizard/form-wizard.module').then(
            (m) => m.FormWizardModule
          ),
      },
      {
        path: 'form-pickers',
        loadChildren: () =>
          import('./form-pickers/form-pickers.module').then(
            (m) => m.FormPickersModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
