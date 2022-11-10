import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PartnerService } from '../service/partner.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public searchText! : string;
  constructor(private parentService:PartnerService) { }

  ngOnInit(): void {
  }
  sendData(e:string){
    this.parentService.getSearch(e)
  }

}
