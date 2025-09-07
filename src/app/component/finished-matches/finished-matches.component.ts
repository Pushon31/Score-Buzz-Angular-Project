import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Match {
  id: number;
  teamA: string;
  teamB: string;
  scoreA?: number;
  scoreB?: number;
  oversA?: number;
  oversB?: number;
  wicketsA?: number;
  wicketsB?: number;
  date: string;
  time: string;
  status: 'live' | 'upcoming' | 'finished';
}

@Component({
  selector: 'app-finished-matches',
  templateUrl: './finished-matches.component.html',
  styleUrls: ['./finished-matches.component.scss']
})
export class FinishedMatchesComponent implements OnInit {
  finishedMatches: Match[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Match[]>('assets/matches.json').subscribe(matches => {
      this.finishedMatches = matches.filter(m => m.status === 'finished');
    });
  }
}
