import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Partner } from '../model/partner';
import { PartnerService } from '../service/partner.service';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
@Component({
  selector: 'app-partner-content',
  templateUrl: './partner-content.component.html',
  styleUrls: ['./partner-content.component.css']
})
export class PartnerContentComponent implements OnInit {
  @Input() partners!: Partner[]

  constructor(private partnerService: PartnerService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  remove(id: number) {
    // swal({
    //   title: 'Warning',
    //   text: 'Are you sure wanna delete All Training History?',
    //   icon: 'warning',
    //   buttons: ['Cancel', 'Confirm'],
    //   dangerMode: true
    // }).then(confirm => {
    //   if(confirm){
        let index = this.partners?.findIndex(i => i.id === id)
        this.partnerService.deletePartner(id).subscribe(a => this.partners.splice(index, 1))
      // }
    // })

  }

  openDialog(id:number) {
		const dialogRef = this.dialog.open(ConfirmationComponent,{
		data:{
			message: 'Do you want to delete the partner from list?'
		}
		});
		
		dialogRef.afterClosed().subscribe((confirmed: boolean) => {
			if (confirmed) {
				this.remove(id);
			}
		});
	} 

}
