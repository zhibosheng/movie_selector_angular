import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owngroup-common',
  templateUrl: './owngroup-common.component.html',
  styleUrls: ['./owngroup-common.component.css']
})
export class OwngroupCommonComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  newGroup(): void{
    this.router.navigate(['/owngroup/creategroup']);
  }

}
