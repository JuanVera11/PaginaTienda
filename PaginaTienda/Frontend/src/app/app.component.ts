import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Frontend';
  mensajeBackend: string = 'Conectando con el servidor...';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/api').subscribe({
      next: (res) => {
        this.mensajeBackend = res.message;
      },
      error: (err) => {
        this.mensajeBackend = '⚠️ No se pudo conectar con el Backend';
        console.error(err);
      }
    });
  }
}