import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  providers: [provideNgxMask()] 
  //A diretiva "mask" é usada para aplicar uma máscara de formatação a um campo de entrada em um formulário Angular. Isso é útil para garantir que os dados inseridos pelos usuários sigam um formato específico, como um número de telefone ou um endereço de e-mail.
})
export class ContatoComponent {
  formContato = this.fb.group({
    nome:["", [
      Validators.minLength(4),
      Validators.required
    ]],
    assunto: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    telefone: ["", [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    mensagem: ["", [
      Validators.minLength(20),
      Validators.required
    ]]
  })

  constructor(
    private fb: FormBuilder
  ) { }

  enviarFormulario(){
    alert("A mensagem foi enviada com sucesso!");
    this.formContato.reset();

  }
}
