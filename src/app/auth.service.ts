import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    // Envie os dados de login para a API e retorne um Observable com a resposta.
    return this.http.post('/api/login', { email, password });
  }
}
