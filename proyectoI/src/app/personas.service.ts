import { Injectable } from '@angular/core';
import { Personas } from './personas';

@Injectable()

export class PersonasService {
  
  data: Personas[];
  constructor() {
    this.data = JSON.parse(localStorage.getItem('personas') || '[]');
  }

  read() {
    this.data = JSON.parse(localStorage.getItem('personas') || '[]');
    return this.data;
  }

  save(data: Personas[]) {
    this.data = data;
    localStorage.setItem('personas', JSON.stringify(this.data));
  }

  findById(id: String) {
    return this.data.find(x => x.id === id);
  }
}