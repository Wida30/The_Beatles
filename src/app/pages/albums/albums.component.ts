import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DiscosService } from 'src/app/services/disco.service';
import { DiscoInterface } from 'src/app/interface/discoInterface';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  public discos: DiscoInterface[] = [];
  public countryList!: string[];
  public filteredList!: DiscoInterface[];
  public filter!: string;
  
  

  constructor(private discosService: DiscosService) {
    
  }

  ngOnInit(): void {
    
    this.discosService.getDiscos().subscribe((data: any) => {

      const discosApi:DiscoInterface[] = data.album.map((disco: any) =>({
        id: disco.id,
        author: disco.author,
        title: disco.title,
        year: disco.year,
        cover: disco.cover,
        song: disco.song,
      }));

      this.discos = discosApi
      // console.log(this.discos)


    
      this.filteredList= this.discos
      

    });
  }
  onChangeFilter(param: string) {
    this.filteredList = this.discos.filter((el: any) => el.title.toLowerCase().includes(param.trim().toLowerCase()));
    
  }
}


