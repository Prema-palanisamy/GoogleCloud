import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewtable',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './viewtable.component.html',
  styleUrl: './viewtable.component.css'
})
export class ViewtableComponent {

  data: any= [];
 
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {

    const apiUrl = `${environment.dbHost} `;
    

    this.http.get(apiUrl).subscribe({
      next: (response) => {
        console.log("response : ", response)
        this.data = response;
        console.log('Data received:', this.data);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }

}
