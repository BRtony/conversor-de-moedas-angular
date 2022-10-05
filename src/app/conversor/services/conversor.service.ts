import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conversao, ConversaoResponse } from '../models';
@Injectable()
export class ConversorService {
  constructor(private http: HttpClient) {}
  myHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  private readonly requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: {
      apikey: 'ODIKyQD9ajXzlUPPKYrQTG6kjAvLGV0j',
    },
  };

  /**
   * Realiza a chamada para a API de conversão de moedas.
   *
   * @param {Conversao} conversao
   * @return {Observable<ConversaoResponse>}
   */
  converter(conversao: Conversao): Observable<any> {
    return this.http.get(
      `https://api.apilayer.com/fixer/convert?to=${conversao.moedaPara}&from=${conversao.moedaDe}&amount=${conversao.valor}`,
      this.requestOptions
    );
  }
  /**
   * Retorna a data da cotação dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @return string
   */
  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '';
    }
    return conversaoResponse.date;
  }
}
