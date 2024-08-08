import { Component, input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { SearchComponent } from '../search/search.component';
import * as usersData from '../../../public/assets/users.json';

@Component({
  selector: 'app-user-lists',
  standalone: true,
  imports: [UserComponent, SearchComponent],
  templateUrl: './user-lists.component.html',
  styleUrl: './user-lists.component.css',
})
export class UserListsComponent {
  
  users: any[] = usersData.users;
  originalUsers: any[] = this.users;

  filterSearch(newList: any) {
    if (newList === '') {
      this.users = this.originalUsers;
    } else {
      this.users = this.users.filter((user) => user.email.startsWith(newList));
    }
  }
}
