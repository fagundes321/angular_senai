import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public titulo!: string;
  public texto!: string;


  ClassToDiv = {};

  constructor(){

    this.ClassToDiv = {
      'text-success': true
    };
  }

  ngOnInit() {
    this.titulo! = 'Lorem ipsum é simplesmente';
    this.texto! =  'Lorem ipsum é simplesmente uma simulação de texto da indústria tipográfica e de';
  }
  onSubmit(form: NgForm) {
    let dados = `
    Nome: ${form.value.nome}
    Email: ${form.value.email}
    Senha: ${form.value.senha}`;

    console.log(dados);

  }

}
