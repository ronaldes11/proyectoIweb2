import { Injectable } from '@angular/core';
import { Estados } from './estados';

@Injectable()
export class EstadosService {
  data: Estados[];
  constructor() {
    this.data = JSON.parse(localStorage.getItem('estados') || '[]');
  }

  read() {
    this.data = JSON.parse(localStorage.getItem('estados') || '[]');
    return this.data;
  }

  save(data: Estados[]) {
    this.data = data;
    localStorage.setItem('estados', JSON.stringify(this.data));
  }

  findById(id: String) {
    return this.data.find(x => x.id === id);
  }
}