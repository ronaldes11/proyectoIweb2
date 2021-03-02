import { Component, OnInit } from '@angular/core';
import { Personas } from '../personas';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-personas-crud',
  templateUrl: './personas-crud.component.html',
  styleUrls: ['./personas-crud.component.css']
})
export class PersonasCrudComponent implements OnInit {

    data: Personas[];
    current_personas: Personas;
    crud_operation = { is_new: false, is_visible: false };
  constructor(private service: PersonasService) { }

  ngOnInit() {
  	this.data = this.service.read();
    this.current_personas = new Personas();
  }

   new() {
    this.current_personas = new Personas();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_personas = row;
  }

  delete(row) {
    this.crud_operation.is_new = false;
    const index = this.data.indexOf(row, 0);
    if (index > -1) {
      this.data.splice(index, 1);
    }
    this.save();
  }

  save() {
    if (this.crud_operation.is_new) {
      this.data.push(this.current_personas);
    }
    this.service.save(this.data);
    this.current_personas = new Personas();
    this.crud_operation.is_visible = false;
  }

}
