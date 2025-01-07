import { ThemesService } from './../../services/themesService';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers: [ThemesService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionsComponent {
  themesService = inject(ThemesService);
  categories = this.themesService.categories;
}
