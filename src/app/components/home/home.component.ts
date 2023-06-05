import { Component,OnInit,Input } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  bannerData:any = [];
  constructor(private movieApiService:MovieApiService){}

  ngOnInit(): void {
    this.getBannerData()
  }
  getBannerData(){
    this.movieApiService.bannerData().subscribe(data =>{
      this.bannerData = data.results;
      console.log(data.results)
    })
  }
}
