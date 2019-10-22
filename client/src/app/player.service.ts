import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

export interface Player {
  id: Number;
  name: String;
  answers: Number;
  points: number;
}

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private http: HttpClient) {}
  url = 'http://127.0.0.1:8000/';

  getPlayers() {
    return this.http.get(`api/players`);
  }
}
