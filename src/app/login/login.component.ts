import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password)
      .subscribe({
        next: () => {
          // Login bem-sucedido! Redirecionar para a página principal ou realizar outras ações.
          console.log('Login bem-sucedido!');
        },
        error: (error) => {
          // Login falhou! Exibir mensagem de erro para o usuário.
          console.error('Falha no login:', error);
        }
      });
  }
}