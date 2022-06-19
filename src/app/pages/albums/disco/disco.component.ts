import { Component, Input, OnInit } from '@angular/core';
import { DiscoInterface } from 'src/app/interface/discoInterface'; 
import { Router } from '@angular/router';
import { DiscosService } from 'src/app/services/disco.service';

@Component({
  selector: 'app-disco',
  templateUrl: './disco.component.html',
  styleUrls: ['./disco.component.scss']
})
export class DiscoComponent implements OnInit {
  @Input() public disco!: any;
  constructor(private discosService: DiscosService, private router: Router) { }

  ngOnInit(): void {
  }
  public editDisco(disco: any) {
    this.discosService.editItem(disco);
    this.router.navigate(["/Form"])
  }
  public borrarDisco(disco: any) {
    this.discosService.deleteDisco(disco);
    this.router.navigate(["/Form"])
  }

}
