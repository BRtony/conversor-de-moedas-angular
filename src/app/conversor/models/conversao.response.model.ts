export class ConversaoResponse {
    constructor(
        public base: string,
        public date: string,
        public rates: any,
    ){}
}
// {
//     "base":"USD",
//     "date": "2021-10-04", 
//     "rates": {
//         "BRL": 5.5005
//     }
// }