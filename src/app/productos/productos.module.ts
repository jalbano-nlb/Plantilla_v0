import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ProductoComponent } from './pages/producto/producto.component';


@NgModule({
  declarations: [
    AgregarComponent,
    ListadoComponent,
    EditarComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
