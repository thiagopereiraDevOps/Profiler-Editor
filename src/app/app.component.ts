import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public contactForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl()
  });

  onSubmit() {
    console.log(this.contactForm.value);
  }
  
  title = 'profiler-editor';
}
