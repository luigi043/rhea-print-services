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
    CommonModule,
    // Standalone components are handled via bootstrapApplication, no need to include them in declarations
  ],
  // Não inclua os componentes no array 'declarations'
  // Remove os componentes AppComponent, CartComponent e ProductsComponent da propriedade declarations.
  // Do not use declarations here as these are standalone components
})
export class AppModule { }

// Inicializar a aplicação com 'bootstrapApplication'
import { bootstrapApplication } from '@angular/platform-browser';
bootstrapApplication(AppComponent, {
  providers: [
    // Any additional providers you may need for bootstrapping
  ]
});
