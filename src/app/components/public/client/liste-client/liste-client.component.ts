import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Client } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';
import { ViewChild } from '@angular/core'






@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.scss'],
  
})



export class ListeClientComponent implements OnInit {
  clt: Client[] = []
  c: Client[] = []
  //sets
  CatTarif: any
  Com: any
  Reg: any
  //selected data
  selectedCat: string[] = [];
  selectedCom: string[] = [];
  selectedReg: string[] = [];

  //
  auxClt: Client[] = []

  //Get access to the datatable
  @ViewChild('dt1') dataTable: Table;

  //Boolean variables to check fields entrance
  enterCat: boolean = false
  enterCom: boolean = false
  enterReg: boolean = false
  cptCat = 0
  cptCom = 0
  cptReg = 0


  constructor(private ser: ClientService) { }

  ngOnInit(): void {

    this.ser.getAllClients().subscribe(
      res => {
        this.clt = res,
          this.CatTarif = [... new Set(this.clt.map(obj => obj.Categorie_Tarifaire))]
        this.Com = [...new Set(this.clt.map(item => item.Nom_Commercial))].filter(elem => elem != null)
        this.Reg = [... new Set(this.clt.map(obj => obj.Region))].filter(elem => elem != '')
      },
      err => console.log(err)
    )

  }

  clear(table: Table) {
    table.clear();
    this.selectedReg = []
    this.selectedCom = []
    this.selectedCat = []
    this.CatTarif = [... new Set(this.dataTable.value.map(obj => obj.Categorie_Tarifaire))]
    this.Reg = [... new Set(this.dataTable.value.map(obj => obj.Region))].filter(elem => elem != '')
    this.Com = [...new Set(this.dataTable.value.map(item => item.Nom_Commercial))].filter(elem => elem != null)
  }

  GetSelectedCat() {
    // Le sens 1,2,3 : je sélectionne une cat
    // if (this.selectedCat.length != 0) {
    this.Com = [...new Set(this.dataTable.filteredValue.map(item => item.Nom_Commercial))].filter(elem => elem != null)
    this.Reg = [... new Set(this.dataTable.filteredValue.map(obj => obj.Region))].filter(elem => elem != '')
    // }
    //j'ai tout déselectionné (3,2,1 ou 2,3,1)
    /*if (this.selectedCom.length == 0 && this.selectedCat.length == 0 && this.selectedReg.length == 0) {
      this.CatTarif = [... new Set(this.dataTable.value.map(obj => obj.Categorie_Tarifaire))]
      this.Reg = [... new Set(this.dataTable.value.map(obj => obj.Region))].filter(elem => elem != '')
      this.Com = [...new Set(this.dataTable.value.map(item => item.Nom_Commercial))].filter(elem => elem != null)
    }*/


  }

  GetSelectedCom() {

    // Le sens 1,2,3 : je sélectionne un comm
    /*if (this.selectedCat.length != 0 && this.selectedCom.length != 0 && this.selectedReg.length == 0)
      this.Reg = [... new Set(this.dataTable.filteredValue.map(obj => obj.Region))].filter(elem => elem != '')*/

    //je selectionne 1,2,3 puis je déselectionne 3 et 2 
    /* if (this.selectedCat.length != 0 && this.selectedCom.length == 0 && this.selectedReg.length == 0) {
       this.Reg = [... new Set(this.dataTable.filteredValue.map(obj => obj.Region))].filter(elem => elem != '')
     }*/

    //je selectionne 1,2,3 puis je déselectionne 2 et 3  rien ne se passe au niveau du comm
    this.CatTarif = [... new Set(this.dataTable.filteredValue.map(obj => obj.Categorie_Tarifaire))]
    this.Reg = [... new Set(this.dataTable.filteredValue.map(obj => obj.Region))].filter(elem => elem != '')



  }


  GetSelectedReg() {
    //je sélectionne 1,2,3 je déselectionne 2 puis 3
    /* if (this.selectedCat.length != 0 && this.selectedCom.length == 0 && this.selectedReg.length == 0) {
       this.Reg = [... new Set(this.dataTable.filteredValue.map(obj => obj.Region))].filter(elem => elem != '')
     }*/
    this.CatTarif = [... new Set(this.dataTable.filteredValue.map(obj => obj.Categorie_Tarifaire))]
    this.Com = [...new Set(this.dataTable.filteredValue.map(item => item.Nom_Commercial))].filter(elem => elem != null)

  }



}
