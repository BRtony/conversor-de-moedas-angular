import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoedaService, ConversorService } from '../services';
import { Moeda, ConversaoResponse, Conversao } from '../models';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css'],
  providers: [ConversorService],
})
export class ConversorComponent implements OnInit {
  moedas: Moeda[];
  possuiErro: boolean;
  conversaoResponse: ConversaoResponse;
  conversao: Conversao;

  @ViewChild('conversaoForm', { static: true }) conversaoForm: NgForm;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService
  ) {}

  ngOnInit(): void {
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  /**
   * Efetua a chamada para a conversão dos valores
   * @return void
   */
  init(): void {
    this.conversao = new Conversao('USD', 'BRL', null);
    this.possuiErro = false;
  }

  /**
   * Efetua a chamada para a conversão dos valores
   */
  converter(): void {
    if (this.conversaoForm.form.valid) {
      this.conversorService.converter(this.conversao).subscribe(
        (response) => {
          this.conversaoResponse = response;
        },

        (error) => (this.possuiErro = true)
      );
    }
  }
}
