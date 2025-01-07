import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { map, takeLast } from 'rxjs';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsComponent {
  private fb = inject(FormBuilder);
  loginForm: FormGroup = this.fb.group({
    login: [''],
    password: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email]],
    checkbox: [false, [Validators.requiredTrue]],
    radio: ['option1', [Validators.required]],
    select: ['option1'],
  });

  formMethod = `
  // let obj = {
    // 'valueChanges':this.loginForm.valueChanges.subscribe(console.log),//Подписка на изменения всей форму
    // 'statusChanges':this.loginForm.statusChanges.subscribe(console.log),//Подписка на изменение статуса формы (valid/invalid)
    // 'Valid:': this.loginForm.valid, //Проверка валидности (true/false)
    // 'Invalid:': this.loginForm.invalid, //Проверка валидности (true/false)
    // 'Touched:': this.loginForm.touched, //Если кликнул инпут и ушел из него, то = "true"
    // 'Dirty:': this.loginForm.dirty, //Вернет true, если хотя бы одно поле ввода в форме было изменено.
    // 'Value:': this.loginForm.value,//Получение состояния без подписки
    // 'Status:': this.loginForm.status,//Получение статуса без подписки
    // 'HasError': this.loginForm.get('email')?.hasError('required'), //Проверка статуса конкретного валидатора
    // 'Input:': this.loginForm.get("email"), //Получение элемента формы. Все что выше работает и с каждым инпутом
    // 'Set Element Value:': this.loginForm.get('email')?.setValue('new@example.com'),//Задать значение инпуту,
    // 'Set Form Value:': this.loginForm.setValue({login: '', password: '', email: ''}),//Задать значение всей форме
    // 'Reset Email:': this.loginForm.get('email')?.reset(),//Сбросить значение инпута
    // 'Disable Form' : this.loginForm.disable(),//Отключить форму или инпут
    // 'Enable Form' : this.loginForm.enable(),//Включить форму или инпут
    // 'Pending:': this.loginForm.pending, //true, если форма находится в состоянии ожидания (например, когда выполняется асинхронная валидация).
    // 'Disabled:': this.loginForm.disabled, // Возвращает true, если форма отключена.
    // 'Enabled:': this.loginForm.enabled, // Возвращает true, если форма включена.
    // 'Pristine:': this.loginForm.pristine, // Возвращает true, если форма не была изменена.
    // 'Add Sync Validator:': this.loginForm.get('login')?.setValidators([Validators.required, Validators.email]),//Динамическое добаление валидаторов инпуту
    // 'Clear Validators:': this.loginForm.get('email')?.clearValidators(), //Динамическое удаление валидаторов инпута

    // }
  `;

  onSubmit() {
    // Обработка отправки формы
    if (this.loginForm.valid) {
      console.log('Form submitted successfully!');
      console.log('Form values:', this.loginForm.value);
    }
  }
}
