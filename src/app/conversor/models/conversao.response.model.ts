export class ConversaoResponse {
  //   query: {
  //     from: string;
  //     to: string;
  //     amount: number;
  //   };

  constructor(
    public base: string,
    public date: string,
    public result: number,
    public amount: number,
    public query: {
      from: string;
      to: string;
      amount: number;
    },
    public info: {
      timestamp: number;
      rate: number;
    },
    public rates: {
      BRL: number;
    }
  ) {}
}
// {
//     "base":"USD",
//     "date": "2021-10-04",
//     "rates": {
//         "BRL": 5.5005
//     }
// }
