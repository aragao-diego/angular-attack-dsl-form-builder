import { Component, OnInit, Input } from '@angular/core';

import { Row } from '../../models/row';

@Component({
  selector: 'app-dsl',
  templateUrl: './dsl.component.html',
  styleUrls: ['./dsl.component.scss']
})
export class DslComponent implements OnInit {
  @Input() data: any[];

  dsl: any;
  dslString: string;

  constructor() { }

  ngOnInit() {
    this.parseDsl();
  }

  parseDsl() {
    let dsl = `form {\n`;
    let i = 0;

    if (this.data) {

      this.data.forEach((row: any, index) => {
        i++;
        dsl += `${this.identation(i)}row {\n`;

        console.log(row);

        if (row && row.length > 0) {
          row.forEach(component => {
            i++;
            dsl += `${this.identation(i)}${component.name} {\n`;
            dsl += `${this.identation(i)}}\n`;
            i--;
          });
        }

        dsl += `${this.identation(i)}}\n`;
        i--;
      });
    }
    dsl += `}\n`;

    this.dslString = dsl;
  }

  identation(quantity) {
    return Array.apply(null, { length: quantity }).map(Number.call, Number).map(a => '  ').join('');
  }

}
