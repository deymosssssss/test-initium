import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GridComponent } from './grid.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { UserService } from '../core/services/user.service';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddEditUserModalComponent } from './modals/add-edit-user-modal/add-edit-user-modal.component';
import { DeleteUserModalComponent } from './modals/delete-user-modal/delete-user-modal.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    // UI
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  declarations: [GridComponent, AddEditUserModalComponent, DeleteUserModalComponent],
  exports: [GridComponent],
  providers: [UserService],
})
export class GridModule {}
