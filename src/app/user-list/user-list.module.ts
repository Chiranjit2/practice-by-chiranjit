import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [UserListComponent, UserFormComponent],
  imports: [
    CommonModule,
    UserListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleModule,
  ],
})
export class UserListModule {}
