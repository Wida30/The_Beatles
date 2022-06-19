import { Component, OnInit } from '@angular/core';
import { DiscosService } from 'src/app/services/disco.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  public unDisco!: any; 
    
  constructor(private discosService: DiscosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params)=>{

      const songId = params.get("songId");
      this.discosService.soloUno(songId).subscribe((data:any)=>{
        this.unDisco= data;



        console.log(this.unDisco);
        // console.log(this.unDisco.song);
      }
      )
    })
    
  }

}
