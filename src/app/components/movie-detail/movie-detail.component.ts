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
  constructor( private movieService:MovieApiService,private router:ActivatedRoute){}
  ngOnInit():void{
    let getParamId = this.router.snapshot.paramMap.get('id')
    this.getMovieDetails(getParamId)
  }
  getMovieDetails(id:any){
    this.movieService.getMovieDetails(id).subscribe(data=>{
      console.log(data)
      this.movieDetails = data
    })
  }
}
