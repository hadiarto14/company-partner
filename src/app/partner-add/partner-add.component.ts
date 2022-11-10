import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Partner } from '../model/partner';
import { PartnerService } from '../service/partner.service';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partner-add',
  templateUrl: './partner-add.component.html',
  styleUrls: ['./partner-add.component.css']
})
export class PartnerAddComponent implements OnInit {
  partnerForm: FormGroup;
  submitted = false;
  
  constructor(public fb: FormBuilder, private partnerService:PartnerService, private dialog: MatDialog, private router: Router) { 
    this.partnerForm = this.fb.group({
      'name' : fb.control('', (Validators.required)),
      'skill' : fb.control('', (Validators.required)),
      'phone' : fb.control('', [(Validators.required), (Validators.maxLength(14))]),
      'notes' : fb.control('', (Validators.required)),
    })
  }

  ngOnInit(): void {
  }

  validateNo(e:any):boolean{
    const charCode = e.which? e.which: e.keyCode;
    if(charCode > 31 && (charCode < 48 || charCode >57)){
      return false
    }
    return true
  }

  validateForm(){
    Object.keys(this.partnerForm.controls).forEach((key:string) => {
      this.partnerForm.get(key)!.markAsTouched();
    })
  }

  submit(){
    this.validateForm()
    this.submitted = true
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      data: {
        message: 'Do you want to Add another partner?'
      }
    });
    if(this.partnerForm.valid){
      this.partnerService.addPartner(this.partnerForm.getRawValue() as Partner)
      .subscribe(partner => {
        dialogRef.afterClosed().subscribe((confirmed: boolean) => {
          if (confirmed) {
            this.partnerForm.reset();
          }else{
            this.router.navigate([''])
          }
        });
      })
    }
  }

}
