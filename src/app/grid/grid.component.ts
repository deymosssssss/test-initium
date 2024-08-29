import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { ID, User } from '../core/models/User';
import { UserService } from './../core/services/user.service';
import { AddEditUserModalComponent } from './modals/add-edit-user-modal/add-edit-user-modal.component';
import { DeleteUserModalComponent } from './modals/delete-user-modal/delete-user-modal.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent {
  displayedColumns: string[] = ['checked', 'name', 'surname', 'email', 'phone'];
  data$ = this.userService.fetchAllUsers();

  selected: ID[] = [];

  constructor(private userService: UserService, public dialog: MatDialog) {}

  checkInteraction(element: User) {
    const index = this.selected.indexOf(element.id);
    if (index !== -1) {
      this.selected = this.selected.splice(index, 1);
    } else {
      this.selected.push(element.id);
    }
  }

  onAddUserAcces() {
    this.dialog.open(AddEditUserModalComponent, { data: { mode: 'ADD' }, width: '400px' });
  }

  editUser(user: User) {
    this.dialog.open(AddEditUserModalComponent, { data: { user, mode: 'EDIT' }, width: '400px' });
  }

  deleteUsers() {
    this.dialog.open(DeleteUserModalComponent, { data: { selected: this.selected } });
  }

  getSelected(user: User) {
    return !!this.selected.find((id) => id === user.id);
  }

  selectAll(event: MatCheckboxChange, users: User[]) {
    this.selected = event.checked ? users.map((user) => user.id) : [];

    console.log(this.selected);
  }
}
