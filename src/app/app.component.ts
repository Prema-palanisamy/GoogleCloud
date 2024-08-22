import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'simple-ng-app';
  data!: any;
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    const apiUrl = `${environment.dbHost} `;
    console.log("innnk")

    this.http.get(apiUrl).subscribe({
      next: (response) => {
        this.data = response;
        console.log('Data received:', this.data);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }
}
