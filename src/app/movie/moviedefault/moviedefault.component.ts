import { Component, OnInit } from '@angular/core';
import { DatarequestService } from 'src/app/service/datarequest.service';
import { TranslationWidth } from '@angular/common';
import { Url } from 'url';

@Component({
  selector: 'app-moviedefault',
  templateUrl: './moviedefault.component.html',
  styleUrls: ['./moviedefault.component.css']
})
export class MoviedefaultComponent implements OnInit {
  defaultmovie = new Map();
  movielist: string[];
  moviedetail;
  trailerurl = new Map();
  reviewlist: string[];
  constructor(private datarequsest: DatarequestService) { }

  ngOnInit(): void {
    this.datarequsest.getDefaultMovies().subscribe(resData =>{
      this.defaultmovie = new Map(Object.entries(resData));
      console.log(this.defaultmovie);
    });
  }

  getMoreLikeThis(ttId:string){
    this.datarequsest.getMoreLikeThis(ttId).subscribe(resData =>{
      this.movielist = resData;
    });
  }

  getDetails(ttId:string){
    this.datarequsest.getOverviewDetails(ttId).subscribe(resData => {
      // this.moviedetail = new Map(Object.entries(resData));
      this.moviedetail = resData;
      console.log(resData);
    });
    this.datarequsest.getTrailerUrl(ttId).subscribe(resData => {
      this.trailerurl = new Map(Object.entries(resData));
    });
    this.datarequsest.getUserReviewsList(ttId).subscribe(resData => {
      this.reviewlist = resData;
      // console.log(this.reviewlist);
    });
  }
    

}
