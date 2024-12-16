import {ChangeDetectionStrategy, Component, inject} from '@angular/core';

import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
@Component({
  selector: 'modal-dialog-info',
  templateUrl: 'dialog-info.component.html',
  styleUrls: ['dialog-info.component.scss'],
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, FaIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class DialogInfoComponent {

  private dialog = inject(MatDialog);
  protected readonly faInfoCircle = faInfoCircle;

  closeDialog() {
    this.dialog.closeAll();
  }
}
