import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public cat: any;

  constructor(private catSvc: CatService) {}

  ngOnInit(): void {
    console.log("Listado")
    this.catSvc.obtenerGatos().subscribe(ct => {
        this.cat = ct;
        console.log("CAT: ", this.cat)
      }
    );
  }

}
