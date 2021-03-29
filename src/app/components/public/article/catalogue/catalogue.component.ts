import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { ArticleVue } from 'src/app/interfaces/article-vue';
import { ArticlesService } from 'src/app/services/articles.service';
import { ToastrService } from 'ngx-toastr';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  cat: Article[] = [] //from api 
  art: ArticleVue[] = [] //from api
  s: Article[] = [] //pour le catalogue
  ss: ArticleVue[] = [] //pour les articles
  id: number[] = []
  parent = true
  parentId: any
  p: number = 1;
  total:number=0;
  crumbs:string[]=[]
 
  closeResult = '';

  constructor(private ser: ArticlesService,private toastr: ToastrService,private modalService: NgbModal) { }
  
  ngOnInit(): void {
    this.getParent();
  }

  getChild(id: number, pid: number) {
    this.parent = false
    //les fils qu'on va afficher
    this.s = this.cat.filter(item => item.parentId == id);
    let article=this.cat.filter(item=>item.Id==id)
    let name=article[0].name
    this.crumbs.push(name)
    this.ss = this.art.filter(item => item.iN1 == id || item.iN2 == id || item.iN3 == id || item.iN4 == id);
    if(this.ss.length==0)
      this.showInfo();
    this.id.push(pid)
    this.total=this.ss.length
  }

  OnClickPrevious() {
    this.parentId = this.id.pop()
    this.crumbs.pop()
    this.s = this.cat.filter(item => item.parentId == this.parentId);
    this.ss=this.art.filter(item => item.iN1 == this.parentId || item.iN2 == this.parentId || item.iN3 == this.parentId || item.iN4 == this.parentId)
    this.total=this.ss.length
    if (this.id.length == 0)
      this.getParent()
  }

  getParent() {
    this.ser.getAllArticles().subscribe(
      res => {
        this.cat = res;
        this.s = this.cat.filter(item => item.parentId == 0);
        this.parent = true
      },
      err => console.log(err)
    )
    this.ser.getAllArticlesData().subscribe(
      res => {this.art = res,this.ss=res,this.total=this.ss.length},
      err => console.log(err)
    )
  } 

  showInfo() {
    this.toastr.error("Pas d'articles disponibles", 'Nous sommes désolés', {
      timeOut: 3000,
    });
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
