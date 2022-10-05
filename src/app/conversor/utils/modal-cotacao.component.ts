import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Conversao, ConversaoResponse } from '../models';
import { ConversorService } from '../services';

@Component({
  selector: 'modal-cotacao',
  templateUrl: './modal-cotacao.component.html',
  styleUrls: ['./modal-cotacao.component.css'],
})
export class ModalCotacaoComponent implements OnInit {
  @Input() id: string;
  @Input() conversaoResponse: ConversaoResponse;
  @Input() conversao: Conversao = new Conversao();
  @Output() confirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private conversorService: ConversorService) {}

  ngOnInit() {}
  novaConsulta() {
    this.confirm.emit();
  }

  get valorConvertido(): string {
    if (this.conversaoResponse === undefined) {
      return '0';
    }

    return this.conversaoResponse.result.toFixed(5);
  }

  get dataCotacao(): string {
    return this.conversorService.dataCotacao(this.conversaoResponse);
  }
}
