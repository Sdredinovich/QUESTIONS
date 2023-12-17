import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemesService } from './services/themesService';
import { ControlValueAccessor, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  myForm: FormGroup = new FormGroup({
    name: new FormControl('Denis'),
  });

  click() {
    return 'f';
  }

  themesService = inject(ThemesService);
  themes = this.themesService.themes;
}
