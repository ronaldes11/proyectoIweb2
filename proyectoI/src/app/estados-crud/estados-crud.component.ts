import { Component, OnInit } from '@angular/core';
import { Board } from '../board.model';
import { Column } from '../column.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Estados } from '../estados';
import { EstadosService } from '../estados.service';

@Component({
  selector: 'app-estados-crud',
  templateUrl: './estados-crud.component.html',
  styleUrls: ['./estados-crud.component.css']
})
export class EstadosCrudComponent implements OnInit {

  data: Estados[];
  current_estados: Estados;
  crud_operation = { is_new: false, is_visible: false };
  constructor(private service: EstadosService) {
  }

  ngOnInit() {
    this.data = this.service.read();
    this.current_estados = new Estados();
  }

  new() {
    this.current_estados = new Estados();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_estados = row;
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
      this.data.push(this.current_estados);
    }
    this.service.save(this.data);
    this.current_estados = new Estados();
    this.crud_operation.is_visible = false;
  }

  board: Board = new Board('Test Board', [
    new Column('Ideas', [
      "Some random idea",
      "This is another random idea",
      "build an awesome application"
    ]),
    new Column('Research', [
      "Lorem ipsum",
      "foo",
      "This was in the 'Research' column"
    ]),
    new Column('Todo', [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ]),
    new Column('Done', [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ])
  ]);



  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
