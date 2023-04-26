import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuardModalService } from 'src/app/services/guard-modal.service';

@Component({
  selector: 'app-guard-modal',
  templateUrl: './guard-modal.component.html',
  styleUrls: ['./guard-modal.component.scss']
})
  export class GuardModalComponent {

    guardConfirmForm = new FormGroup({
      confirmCode: new FormControl<string | any>('', [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  
    isWrongCode=false;
    constructor(public modalGuardService: GuardModalService, private router: Router) { }

    get confirmCode() {
      if(this.isWrongCode) this.isWrongCode=false;
      return this.guardConfirmForm.controls.confirmCode as FormControl
    }
  
    submit() {
      let code = this.guardConfirmForm.value.confirmCode as string
  
      if (code === "123456") {
        this.isWrongCode = false;
        this.modalGuardService.closeConfirmGuardModal(code);
        this.router.navigate(["/exp-guard"]);
      } else {
        this.isWrongCode = true;
      }
    }
  
    initIsCodeWrong(initValue: boolean){
      this.isWrongCode = initValue;
    }
  }

