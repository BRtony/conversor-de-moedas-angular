import { Injectable } from '@angular/core';
// Importamos o HttpClient ao invés do Http para o Angular 7
//import { Http } from '@angular/http';
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

  // fetch("https://api.apilayer.com/fixer/convert?to={to}&from={from}&amount={amount}", requestOptions)
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));
  /**
   * Realiza a chamada para a API de conversão de moedas.
   *
   * @param {Conversao} conversao
   * @return {Observable<ConversaoResponse>}
   */
  converter(conversao: Conversao): Observable<any> {
    // Na linha abaixo altere a '?' por '&'
    let params = `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;
    console.log(conversao, 'conversao');
    return this.http.get(
      `https://api.apilayer.com/fixer/convert?to=${conversao.moedaPara}&from=${conversao.moedaDe}&amount=${conversao.valor}`,
      this.requestOptions
    );
    // No Angular 6 as duas próximas linha não são mais necessárias
    // .map(response => response.json() as ConversaoResponse)
    // .catch(error => Observable.throw(error));
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
