import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {

  private apiUrl = 'http://localhost:8080/upload'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file, file.name);
      this.http.post(this.apiUrl,formData).subscribe({
      // this.fileUploadService.uploadFile(file).subscribe({
        next: (response) => {
          console.log("uploaded successfully ", response);
        },
        error: (error) => {
          console.error("error occured", error);
        },
      });
    }
  }

}
