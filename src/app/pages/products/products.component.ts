import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   // Importando o CommonModule
import { CurrencyPipe } from '@angular/common';  // Importando o CurrencyPipe
import { CartComponent } from '../cart/cart.component'; // Importando o CartComponent, se necessário

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,  // Adicionando o CommonModule
    CurrencyPipe   // Adicionando o CurrencyPipe
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    { name: 'Caderno', price: 5, description: 'Caderno espiral com 100 folhas.', image: 'assets/images/caderno.jpg' },
    { name: 'Caneta', price: 1.5, description: 'Caneta esferográfica azul.', image: 'assets/images/caneta.jpg' },
    { name: 'Papel A4', price: 3, description: 'Pacote com 500 folhas de papel A4.', image: 'assets/images/papel.jpg' },
    { name: 'Impressão em Camiseta', price: 20, description: 'Impressão personalizada em camiseta de algodão.', image: 'assets/images/camiseta.jpg' },
    { name: 'Caneca Personalizada', price: 12, description: 'Caneca personalizada com logo ou foto.', image: 'assets/images/caneca.jpg' }
  ];

  // Método para adicionar um produto ao carrinho
  addToCart(product: any) {
    // Chama o método do CartComponent
    const cartComponent = new CartComponent();
    cartComponent.addToCart(product);
  }
}
