import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importando o CommonModule
import { FormsModule } from '@angular/forms';    // Importando o FormsModule

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,   // Adicionando o CommonModule
    FormsModule     // Adicionando o FormsModule
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  // Definindo tipo para os itens do carrinho
  cart: { name: string; price: number; quantity: number }[] = [
    { name: 'Caderno', price: 5, quantity: 2 },
    { name: 'Caneta', price: 1.5, quantity: 5 }
  ];

  // Calculando o total
  getTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // Removendo item do carrinho
  removeFromCart(item: { name: string; price: number; quantity: number }): void {
    this.cart = this.cart.filter(i => i !== item);
  }

  // Atualizando a quantidade
  updateQuantity(item: { name: string; price: number; quantity: number }, quantity: number): void {
    item.quantity = quantity;
  }

  // Método para adicionar um produto
  addToCart(product: { name: string; price: number; quantity: number }): void {
    // Verifica se o produto já está no carrinho
    const existingProduct = this.cart.find(i => i.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += product.quantity; // Aumenta a quantidade
    } else {
      this.cart.push({ ...product, quantity: 1 }); // Adiciona como novo item
    }
  }
}
