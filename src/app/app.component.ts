import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ThemesService } from './services/themesService';
import { ControlValueAccessor, FormControl, FormGroup } from '@angular/forms';
import { interval, of, timer } from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent{








  themesService = inject(ThemesService);
  themes = this.themesService.themes;

  a = of('11').subscribe(el=>el)



}
