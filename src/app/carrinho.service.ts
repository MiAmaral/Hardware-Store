import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = []; //Iniciando o vetor carrinho

  constructor() {
    this.carregarCarrinho();
  }

  carregarCarrinho() { //O objetivo desse método é atualizar o vetor de itens do carrinho com base no valor armazenado no localStorage. Para quando for chamdo o vetor de itens, ele não vira vazio
    const carrinho = localStorage.getItem("carrinho");
    this.itens = JSON.parse(carrinho || "[]");// O JSON.parse serve para converter uma string JSON em um objeto JavaScript. 
  }

  obtemCarrinho() {
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));// O JSON.stringfy serve para converter uma string JSON em um objeto JavaScript.
  }

  removerProdutoCarrinho(produtoId: number){
    this.itens = this.itens.filter(item => item.id !== produtoId); //Mantendo os outros itens no carrinho
    localStorage.setItem("carrinho", JSON.stringify(this.itens));//Atualizando o localStorage
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.removeItem('carrinho');
  }

}
