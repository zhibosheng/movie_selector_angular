import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatarequestService } from 'src/app/service/datarequest.service';

@Component({
  selector: 'app-moviefind',
  templateUrl: './moviefind.component.html',
  styleUrls: ['./moviefind.component.css']
})
export class MoviefindComponent implements OnInit {
  ttIdMap = new Map();
  moviedetail;
  trailerurl = new Map();
  reviewlist: string[];
  movielist: string[];

  constructor(private datarequsest: DatarequestService) { }

  ngOnInit(): void {
  }


  findmovie(findmovieForm:NgForm){
    let movieName = findmovieForm.value.movieName;
    this.datarequsest.findMovie(movieName).subscribe(resData =>{
      this.ttIdMap = new Map(Object.entries(resData));
      console.log(this.ttIdMap);
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
