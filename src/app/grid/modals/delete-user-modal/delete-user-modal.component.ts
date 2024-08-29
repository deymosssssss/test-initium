import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ID } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/user.service';
import { AddEditUserModalComponent } from '../add-edit-user-modal/add-edit-user-modal.component';

@Component({
  selector: 'app-delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteUserModalComponent {
  constructor(
    private dialogRef: MatDialogRef<AddEditUserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { selected: ID[] },
    private userService: UserService
  ) {}

  close() {
    this.dialogRef.close();
  }

  delete() {
    this.userService.deleteUsers(this.data.selected);
    this.dialogRef.close();
  }
}
