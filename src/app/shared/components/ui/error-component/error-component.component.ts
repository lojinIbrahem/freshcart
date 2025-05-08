import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-component',
  imports: [],
  templateUrl: './error-component.component.html',
  styleUrl: './error-component.component.scss'
})
export class ErrorComponentComponent {
@Input() Name! :AbstractControl |null
}
