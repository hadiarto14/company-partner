import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Partner } from '../model/partner';
import { PartnerService } from '../service/partner.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-partner-detail',
  templateUrl: './partner-detail.component.html',
  styleUrls: ['./partner-detail.component.css']
})
export class PartnerDetailComponent implements OnInit {
  partner : Partner | undefined;
  constructor( private partnerService: PartnerService,  private route: ActivatedRoute, private location:Location)
  { }

  ngOnInit(): void {
    
    this.getPartner()
  }

  getPartner(): void{
    console.log('masuk');
    
    const idParam = Number(this.route.snapshot.paramMap.get('id'));
    console.log(idParam);
    
    this.partnerService.getPartner(idParam).subscribe(a => this.partner = a);
  }

}
