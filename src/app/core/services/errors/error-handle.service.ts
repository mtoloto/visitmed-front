import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ErrorHandleService {

  constructor(private snackBar: MatSnackBar) { }

  handleForSnackBar(code) {
    var message = "";
    switch (code) {
      case 400:
        //alert('Não foi possível se conectar com o servidor.');
        message = 'Não foi possível se conectar com o servidor.';
        break;
      case 401:
        //alert('Usuário ou senha inválidos');
        message = 'Usuário ou senha inválidos.';
        break;
      case 403:
        //alert('Acesso negado');
        message = 'Acesso negado.';
        break;
      case 404:
        //alert('Não foi possível encontrar conexão com o servidor');
        message = 'Não foi possível encontrar conexão com o servidor.';
        break;
      case 500:
        // alert('Servidor não encontrado.');
        message = 'Problema ao fazer requisição.';
        break;
      case 0:
        // alert('Servidor não encontrado.');
        message = 'Servidor não encontrado.';
        break;
    }
 

    this.snackBar.open(message, "Ok", {
      duration: 3000,
    });
  }



  handleFriendlyMessage(code) {
    switch (code) {
      case 400:
        //alert('Não foi possível se conectar com o servidor.');
        return 'Não foi possível se conectar com o servidor.';

      case 401:
        //alert('Usuário ou senha inválidos');
        return 'Usuário ou senha inválidos.';

      case 403:
        //alert('Acesso negado');
        return 'Acesso negado.';

      case 404:
        //alert('Não foi possível encontrar conexão com o servidor');
        return 'Não foi possível encontrar conexão com o servidor.';

      case 500:
        // alert('Servidor não encontrado.');
        return 'Problema ao fazer requisição.';

      case 0:
        // alert('Servidor não encontrado.');
        return 'Servidor não encontrado.';

    }

  }


}
