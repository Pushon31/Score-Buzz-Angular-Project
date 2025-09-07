import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Match {
  id: number;
  teamA: string;
  teamB: string;
  date: string;
  time: string;
  status: 'live' | 'upcoming' | 'finished';
}

@Component({
  selector: 'app-upcoming-matches',
  templateUrl: './upcoming-matches.component.html',
  styleUrls: ['./upcoming-matches.component.scss']
})
export class UpcomingMatchesComponent implements OnInit {
  upcomingMatches: Match[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Match[]>('assets/matches.json').subscribe(matches => {
      this.upcomingMatches = matches.filter(m => m.status === 'upcoming');
    });
  }
}
