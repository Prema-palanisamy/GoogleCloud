import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viewtable',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './viewtable.component.html',
  styleUrl: './viewtable.component.css'
})
export class ViewtableComponent {

  data: any= [];
  public apiUrl = `${environment.dbHost}`;
  public inputForm!: FormGroup;
  public id!:number;
  constructor(private http: HttpClient, private router: Router,  private formBuilder: FormBuilder,) {
    this.inputForm = new FormGroup({
      tabVote: new FormControl(''),
      castVote: new FormControl('')
    });
  }
  ngOnInit(): void {
    this.get();
  }

  get() {
    this.http.get(this.apiUrl).subscribe({
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

save() {
  console.log("inpits : ", this.inputForm.getRawValue())
  const data = this.inputForm.getRawValue();
  this.http.post(`${environment.dbHost}/upload`, {tabvote : data.tabVote, castvote: data.castVote}).subscribe({
      next: (response) => {
        console.log("uploaded successfully ", response);
        this.get();
      },
      error: (error) => {
        console.error("error occured", error);
      },
    });
}

delete() {
  console.log("inpits : ", this.id)
  this.http.put(`${environment.dbHost}/delete`, {id : this.id}).subscribe({
      next: (response) => {
        console.log("uploaded successfully ", response);
      },
      error: (error) => {
        console.error("error occured", error);
      },
    });
}
home() {
  this.router.navigateByUrl("/home")
}
}
