import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Skill } from '../../assets/models/skill';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})


export class careerComponent implements AfterViewInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  skills: Skill[] =
  [
    { name: 'ASP.NET', rating: 3},
    { name: 'Angular', rating: 3},
    { name: 'Git', rating: 3 },
    { name: 'SQL Server', rating: 3 },
    { name: 'JavaScript', rating: 3 },
    { name: 'CI/CD', rating: 2 },
    { name: 'Visual Studio', rating: 3 },
    { name: 'Red Gate', rating: 3 },
    { name: 'VS Code', rating: 3 },
    { name: 'Notepad++', rating: 3 },
    { name: 'Scrum/Kanban', rating: 3 },
    { name: 'Data Structures', rating: 5 },
    { name: 'Git Kraken', rating: 3 }
  ]

  columnsToDisplay: string[]= ['name', 'rating'];
  dataSource = new MatTableDataSource<Skill>(this.skills);


  ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
  }
}
