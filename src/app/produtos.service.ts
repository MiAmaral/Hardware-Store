import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;

  constructor() { }

  getAll(){
    return this.produtos;
  }

  getOne(produtoId: number){
    return this.produtos.find(produto => produto.id === produtoId);
    /* No caso desse código, a função de callback recebe o parâmetro produto que representa cada objeto do array de produtos. Dentro da função, é feita uma comparação estrita (===) entre o valor da propriedade id do objeto produto e o valor do parâmetro produtoId. Se essa comparação for verdadeira, ou seja, se o id do objeto for igual ao produtoId, o método find retorna o objeto produto encontrado. Caso contrário, a função de callback é executada para o próximo elemento do array. */
  }
}

// Serviço para consulta dos produtos (requisição)