import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentDefinition } from 'src/app/modules/editor/models/component-defintion';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

export interface User {
  name: string;
}

@Component({
  selector: 'app-auto-complete',
  template: `
    <mat-form-field fxFlex floatLabel="auto">
      <input type="text" [placeholder]="config.config.label" aria-label="Autocomplete" matInput [formControl]="myControl"
      [matAutocomplete]="auto">
      <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn">
        <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
          {{option.name}}
        </mat-option>
      </mat-autocomplete>
    </mat-form-field>
  `,
  styleUrls: ['./auto-complete.component.scss']
})

export class AutoCompleteComponent implements OnInit {
  @Input() config: ComponentDefinition;
  myControl = new FormControl();
  options: User[] = [
    {name: 'Mary'},
    {name: 'Shelley'},
    {name: 'Igor'}
  ];
  filteredOptions: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}


