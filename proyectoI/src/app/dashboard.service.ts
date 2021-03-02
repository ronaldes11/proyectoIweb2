import { Injectable } from '@angular/core';
import { Dashboard } from './dashboard';

@Injectable()
export class DashboardService {
  data: Dashboard[];
  constructor() {
    this.data = JSON.parse(localStorage.getItem('dashboard') || '[]');
  }

  read() {
    this.data = JSON.parse(localStorage.getItem('dashboard') || '[]');
    return this.data;
  }

  save(data: Dashboard[]) {
    this.data = data;
    localStorage.setItem('dashboard', JSON.stringify(this.data));
  }

  findById(id: String) {
    return this.data.find(x => x.id === id);
  }
}