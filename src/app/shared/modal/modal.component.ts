import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { GuardModalService } from 'src/app/services/guard-modal.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title: string;
  @Input() сonfirmForm: any;
  @Output() changeIsCodeWrong = new EventEmitter<boolean>();
  
  constructor(public modalService: ModalService, public guardModalService: GuardModalService){}

  closeModal() {
		this.modalService.close();
    this.guardModalService.closeGuardModal();
    this.changeIsCodeWrong.emit(false);
    this.сonfirmForm.reset();
	}
}
