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
  selector: 'app-live-matches',
  templateUrl: './live-matches.component.html',
  styleUrls: ['./live-matches.component.scss']
})
export class LiveMatchesComponent implements OnInit {
  liveMatches: Match[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Match[]>('assets/matches.json').subscribe(matches => {
      this.liveMatches = matches.filter(m => m.status === 'live');
    });
  }
}
