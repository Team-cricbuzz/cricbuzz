import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.css']
})
export class VideoSectionComponent implements OnInit {
  yt_iframe_html1: any;
  yt_iframe_html2: any;
  
  youtubeUrl1 = "https://www.youtube.com/watch?v=B6tYagQ4H9o";
  youtubeUrl2 = "https://www.youtube.com/watch?v=LrARKZ6Kyd8";
  
  ngOnInit() {
  }

  constructor(
    private embedService: EmbedVideoService
  ) {
    this.yt_iframe_html1 = this.embedService.embed(this.youtubeUrl1);
    this.yt_iframe_html2 = this.embedService.embed(this.youtubeUrl2); 
  }

  

}
