import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListsComponent } from './user-lists/user-lists.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'usersList-ang-app';
}

