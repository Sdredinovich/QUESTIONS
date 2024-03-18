import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './components/questions/questions.component';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
  {
    path: 'questions',
    component: QuestionsComponent,
  },  {
    path: 'forms',
    component: FormsComponent,
  },
  {
    path: '',
    redirectTo: 'questions',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
