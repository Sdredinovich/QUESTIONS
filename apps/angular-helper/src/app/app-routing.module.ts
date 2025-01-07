import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'questions',
    loadComponent: () =>
      import('./components/questions/questions.component').then(
        (m) => m.QuestionsComponent,
      ),
  },
  {
    path: 'forms',
    loadComponent: () =>
      import('./components/forms/forms.component').then(
        (m) => m.FormsComponent,
      ),
  },
  {
    path: '',
    redirectTo: 'questions',
    pathMatch: 'full',
  },
];
