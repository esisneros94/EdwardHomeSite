import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'career',
  templateUrl: '/career.component.html',
  styleUrls:
  [
      '/career.component.css'
  ]
})


export class careerComponent implements OnInit {
  skills: any[] = [
  { name: 'ASP.NET', skillRanking: 3},
  { name: 'Angular', skillRanking: 3},
  { name: 'Git', skillRanking: 3 },
  { name: 'SQL Server', skillRanking: 3 },
  { name: 'JavaScript', skillRanking: 3 },
  { name: 'CI/CD', skillRanking: 2 },
  { name: 'Visual Studio', skillRanking: 3 },
  { name: 'Red Gate', skillRanking: 3 },
  { name: 'VS Code', skillRanking: 3 },
  { name: 'Notepad++', skillRanking: 3 },
  { name: 'Scrum/Kanban', skillRanking: 3 },
  { name: 'Data Structures', skillRanking: 2 },
  { name: 'Git Kraken', skillRanking: 3 }
]

  ngOnInit() {
    console.log(this.skills);
  }
}
