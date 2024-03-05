import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [AppComponent, CommonModule],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
}
