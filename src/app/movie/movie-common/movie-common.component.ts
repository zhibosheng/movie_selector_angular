import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-common',
  templateUrl: './movie-common.component.html',
  styleUrls: ['./movie-common.component.css']
})
export class MovieCommonComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  defaultMovie(): void{
    this.router.navigate(['/movie/default']);
  }

  findMovie(): void{
    this.router.navigate(['/movie/find']);
  }
}
