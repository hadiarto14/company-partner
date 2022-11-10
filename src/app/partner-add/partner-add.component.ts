import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Partner } from '../model/partner';
import { PartnerService } from '../service/partner.service';

@Component({
  selector: 'app-partner-add',
  templateUrl: './partner-add.component.html',
  styleUrls: ['./partner-add.component.css']
})
export class PartnerAddComponent implements OnInit {
  partnerForm: FormGroup;
  submitted = false;
  constructor(public fb: FormBuilder, private partnerService:PartnerService) { 
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
    if(this.partnerForm.valid){
      this.partnerService.addPartner(this.partnerForm.getRawValue() as Partner)
      .subscribe(partner => {
        this.partnerForm.reset();
        
      })
    }
  }

}
