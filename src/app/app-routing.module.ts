import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
