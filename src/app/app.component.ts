import { Component, OnInit } from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'game';
  computerSelection = '';
  result = '';
  isValidUserSelection?: boolean;
  constructor(private api:ApiService) {}

  randomSelection() {
    this.api.getComputerSelection().subscribe((data)=>{
           this.computerSelection = data;
    });
  }

  validateSelection(option: number) {
      this.api.validateSelection(option).subscribe((data)=>{
                 if (data != null) {
                    this.isValidUserSelection = true;
                 }
                 else {
                 this.isValidUserSelection = false;
                 }
          });
    }

  playGame(useroption: string, computeroption : string) {
        this.api.playGame(useroption, computeroption).subscribe((data)=>{
            this.result = data.result;
         });
      }

}
