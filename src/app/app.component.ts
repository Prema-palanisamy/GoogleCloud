import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular';
  private apiUrl1 = 'https://prema-node-service-3zi2jgwjrq-uc.a.run.app/';
  uploadProgress: number | undefined;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
  }

  moveToUrl() {
    this.router.navigateByUrl("/upload")
  }

  moveToViewTableUrl() {  
    this.router.navigate(["/view"])
  }

}
