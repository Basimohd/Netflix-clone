import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  movieKey: any;
  
  @Input() bannerData!: any;

  constructor(private movieService: MovieApiService, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  onClickPlay(id: any) {
    this.movieService.getMovieVideo(id).subscribe(data => {
      data.results.forEach((element: any) => {
        if (element.type === "Trailer") {
          this.renderer.setAttribute(window.open(`https://www.themoviedb.org/video/play?key=${element.key}`), 'target', '_blank')
        }
      })
    })
  }
}
