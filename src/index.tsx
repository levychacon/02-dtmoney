import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './App';

createServer({

  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[{
        id:1,
        title:'Freelancer de website',
        type: 'deposit',
        category: 'Dev',
        amount: 5000,
        createdAt: new Date('08-24-2021 17:50:00')


      },
      {
        id:2,
        title:'Pagamento de aluguel',
        type: 'withdraw',
        category: 'Casa',
        amount: 800,
        createdAt: new Date('01-08-2021 16:00:00')


      }]
    })
  },
  routes(){
    this.namespace='api'

    this.get('transactions', ()=>{
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request)=>{
      const data= JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


