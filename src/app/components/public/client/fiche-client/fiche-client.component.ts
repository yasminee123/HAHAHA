import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-fiche-client',
  templateUrl: './fiche-client.component.html',
  styleUrls: ['./fiche-client.component.scss']
})
export class FicheClientComponent implements OnInit {
  
  constructor(private route:ActivatedRoute,private ser: ClientService) { }
  clt :Client= {}
  ngOnInit(): void {
    let idClient=this.route.snapshot.params.id
    let c
    this.ser.getOneClient(idClient).subscribe(
      res=>{this.clt=res[0],console.log(this.clt)},
      err=>console.log(err)
    )
  }

}
