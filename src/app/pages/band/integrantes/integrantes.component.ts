import { Component, Input, OnInit } from '@angular/core';
import { bandaInterface } from 'src/app/interface/banda.interface';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.scss']
})
export class IntegrantesComponent implements OnInit {

  @Input() public integrantes!: bandaInterface

  constructor() { }

  ngOnInit(): void {
  }

}
