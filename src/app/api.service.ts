import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor (private http:HttpClient) {}

  getComputerSelection(){
  return this.http.get<string>('http://localhost:8080/game/computer-option');
  }

  validateSelection(selection: number){
    return this.http.get<string>('http://localhost:8080/game/user-option?option='+selection);
    }

  playGame(userOption: string, computerOption: string) {
    return this.http.post<GameResult>('http://localhost:8080/game/play', {userOption: userOption, computerOption: computerOption });
  }
}

interface GameResult {
    userOption: string;
    computerOption: string;
    result: string;
  }
