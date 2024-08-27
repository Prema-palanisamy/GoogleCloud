import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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
  title = 'Angular';
  data!: any;
  private apiUrl1 = 'http://localhost:8080';
  uploadProgress: number | undefined;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {

    const apiUrl = `${environment.dbHost} `;
    

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

  moveToUrl() {
    this.router.navigateByUrl("/upload")
  }


}
