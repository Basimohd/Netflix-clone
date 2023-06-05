import { Component,OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movieDetails: any;
  movieVideo:any;
  movieCast:any;

  constructor( private movieService:MovieApiService,private router:ActivatedRoute){}
  ngOnInit():void{
    let getParamId = this.router.snapshot.paramMap.get('id')
    this.getMovieDetails(getParamId)
    this.getMovieVideo(getParamId)
    this.getMovieCast(getParamId)
  }
  getMovieDetails(id:any){
    this.movieService.getMovieDetails(id).subscribe(data=>{
      this.movieDetails = data
    })
  }

  getMovieVideo(id:any){
    this.movieService.getMovieVideo(id).subscribe(data=>{
      data.results.forEach((element:any)=>{
        if(element.type === "Trailer"){
          this.movieVideo = element.key;
        }
      })
    })
  }
  getMovieCast(id:any){
    this.movieService.getMovieCast(id).subscribe(data=>{
      this.movieCast = data.cast;
      console.log(data.cast)
    })
  }
}
