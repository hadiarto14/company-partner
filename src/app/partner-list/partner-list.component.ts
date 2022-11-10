import { Component, Input, OnInit } from '@angular/core';
import { Partner, PartnerModel } from '../model/partner';
import { PartnerService } from '../service/partner.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.css']
})
export class PartnerListComponent implements OnInit {
  partners: Partner[] = [];
  constructor(private partnerService:PartnerService, private location:Location) { }

  ngOnInit(): void {
    this.getAllContact()
  }

  getAllContact(): void{
    this.partnerService.getAllPartner().subscribe(partner => this.partners = partner)
  }

}
