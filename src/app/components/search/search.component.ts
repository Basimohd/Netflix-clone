import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms'
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
searchResult!:any;

constructor(private movieService:MovieApiService){}
searchForm = new FormGroup({
  'movieName' : new FormControl(null)
})
submitForm(){
  console.log(this.searchForm.value);
  this.movieService.getSearchMovie(this.searchForm.value).subscribe(data=>{
    this.searchResult = data.results
    console.log(data.results)
    
  })
}
}
