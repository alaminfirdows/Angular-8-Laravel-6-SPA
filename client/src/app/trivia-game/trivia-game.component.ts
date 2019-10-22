import { Component, OnInit } from '@angular/core';
import { Player, PlayerService } from '../player.service';
import 'rxjs/Rx';
@Component({
  selector: 'app-trivia-game',
  templateUrl: './trivia-game.component.html',
  styleUrls: ['./trivia-game.component.css']
})
export class TriviaGameComponent implements OnInit {
  players;
  errorMessage: string;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService
      .getPlayers()
      .subscribe(
        players => (this.players = players['data']),
        error => (this.errorMessage = <any>error)
      );
  }
}
