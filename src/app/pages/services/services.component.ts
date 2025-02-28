import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    { name: 'Impressão Digital', description: 'Impressão de alta qualidade em diversos tipos de papéis.', image: 'assets/images/impressao.jpg' },
    { name: 'Encadernação', description: 'Encadernação de documentos, com várias opções de acabamentos.', image: 'assets/images/encadernacao.jpg' },
    { name: 'Personalização de Camisetas', description: 'Impressão personalizada em camisetas, ideal para empresas e eventos.', image: 'assets/images/camiseta.jpg' }
  ];
}
