import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular';
  private apiUrl1 = 'https://prema-node-service-3zi2jgwjrq-uc.a.run.app/';
  uploadProgress: number | undefined;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {

    const apiUrl = `${environment.dbHost} `;
    
  //   this.http.get(apiUrl).subscribe({
  //     next: (response) => {
  //       console.log("response : ", response)
  //       this.data = response;
  //       console.log('Data received:', this.data);
  //     },
  //     error: (error) => {
  //       console.error('Error fetching data:', error);
  //     }
  //   });
  }

  moveToUrl() {
    this.router.navigateByUrl("/upload")
  }

  moveToViewTableUrl() {
    // this.router.navigateByUrl("/view")
    this.router.navigate(["/view"])
  }

}
