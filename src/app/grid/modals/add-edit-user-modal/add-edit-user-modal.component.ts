import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddUser, User } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/user.service';
import { Mode } from './mode';

@Component({
  selector: 'app-add-edit-user-modal',
  templateUrl: './add-edit-user-modal.component.html',
  styleUrls: ['./add-edit-user-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditUserModalComponent implements OnInit {
  modalForm = this.fb.group({
    name: this.fb.control('', [Validators.required, Validators.minLength(2)]),
    surname: this.fb.control('', [Validators.required, Validators.minLength(2)]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    phone: this.fb.control('', [Validators.pattern(/^\+7\d{10}$/)]),
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private dialogRef: MatDialogRef<AddEditUserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user?: User; mode: Mode }
  ) {}

  ngOnInit(): void {
    if (this.data.mode === 'EDIT') {
      this.modalForm.patchValue(this.data.user!);
    }
  }

  close() {
    this.modalForm.reset();
    this.dialogRef.close();
  }

  save() {
    if (!this.modalForm.valid) return;
    if (this.data.mode === 'ADD') {
      this.userService.adduser(this.modalForm.value as AddUser);
    }
    if (this.data.mode === 'EDIT') {
      this.userService.editUser({ ...this.modalForm.value, id: this.data.user!.id } as User);
    }
    this.dialogRef.close();
  }
}
