import { Component,OnInit,Input } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  bannerData:any = [];
  trendingMoviesData:any = [];
  actionMoviesData:any = [];
  adventureMoviesData:any = [];
  animationMoviesData:any = [];
  comedyMoviesData:any = [];
  documentaryMoviesData:any = [];
  sciFiMoviesData:any = [];
  thrillerMoviesData:any = [];

  trendingTitle:string = 'Trending Movies'
  actionTitle:string = 'Action Movies'
  adventureTitle:string = 'Adventure Movies'
  animationTitle:string = 'Animation Movies';
  comedyTitle:string = 'Comedy Movies';
  documentaryTitle:string = 'Documentary Movies';
  sciFiTitle:string = 'Science Fictions';
  thrillerTitle:string = 'Thriller Movies';
  constructor(private movieApiService:MovieApiService){}

  ngOnInit(): void {
    this.getBannerData();
    this.trendingData();
    this.actionData();
    this.adventureData();
    this.animationData();
    this.comdeyData();
    this.documentaryData();
    this.sciFiData();
    this.thrillerData();
  }
  getBannerData(){
    this.movieApiService.fetchBannerData().subscribe(data =>{
      this.bannerData = data.results;
    })
  }
  trendingData(){
    this.movieApiService.fetchTrendingData().subscribe(data =>{
      this.trendingMoviesData = data.results;
    })
  }
  actionData(){
    this.movieApiService.fetchActionMoviesData().subscribe(data =>{
      this.actionMoviesData = data.results;
    })
  }
  adventureData(){
    this.movieApiService.fetchAdventureMovies().subscribe(data =>{
      this.adventureMoviesData = data.results;
    })
  }
  animationData(){
    this.movieApiService.fetchAnimationMovies().subscribe(data =>{
      this.animationMoviesData = data.results;
    })
  }
  comdeyData(){
    this.movieApiService.fetchComedyMovies().subscribe(data =>{
      this.comedyMoviesData = data.results;
    })
  }
  documentaryData(){
    this.movieApiService.fetchDocumentaryMovies().subscribe(data =>{
      this.documentaryMoviesData = data.results;
    })
  }
  sciFiData(){
    this.movieApiService.fetchScienceFictionMovies().subscribe(data =>{
      this.sciFiMoviesData = data.results;
    })
  }
  thrillerData(){
    this.movieApiService.fetchThrillerMovies().subscribe(data =>{
      this.thrillerMoviesData = data.results;
    })
  }



  
}
