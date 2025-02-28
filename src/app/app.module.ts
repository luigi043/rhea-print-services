import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Importação de componentes standalone
import { AppComponent } from './app.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductsComponent } from './pages/products/products.component';

// Remover os componentes de declarations
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  // Não inclua os componentes no array 'declarations'
  // Remove os componentes AppComponent, CartComponent e ProductsComponent da propriedade declarations.
})
export class AppModule { }

// Inicializar a aplicação com 'bootstrapApplication'
import { bootstrapApplication } from '@angular/platform-browser';
bootstrapApplication(AppComponent);
