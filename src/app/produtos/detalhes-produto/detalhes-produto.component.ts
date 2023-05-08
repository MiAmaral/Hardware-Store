import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { CarrinhoService } from 'src/app/carrinho.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade = 1; // O = serve para atribuir o valor
  
  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ){}

  ngOnInit(): void{
    const routeParams =  this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id")); //O parâmetro da rota sempre virá como uma string, por isso foi utilizado o método number()
    this.produto = this.produtosService.getOne(produtoId);
  }

  adicionarAoCarrinho(){
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho! 🛒");
    const produto:IProdutoCarrinho = {
      ...this.produto!, // O operador de exclamação indica que "this.produto" não é nulo ou indefinido, mesmo que não esteja explicitamente definido como tal
      quantidade: this.quantidade
    };
    this.carrinhoService.adicionarAoCarrinho(produto);
  }
}
