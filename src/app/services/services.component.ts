
import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from './api.service';
import {AfterViewInit,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent  implements OnInit{
  displayedColumns: string[] = ['productName', 'category','date','freshness', 'price','comment','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(private dialog: MatDialog , private api:ApiService)
  { }
  ngOnInit(): void {
    this.getAllProducts();
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'30%'
      }).afterClosed().subscribe(val=>{
        if(val=='save'){
          this.getAllProducts();
        }

      })
      
      
    }
    getAllProducts(){
      this.api.getProduct()
      .subscribe({
        next:(res)=>{
          console.log(res);
          this.dataSource=new MatTableDataSource(res);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
        },
        error:()=>{
          alert("error while fetching the records")
        }
      })

    }
    editProduct(row:any){
      this.dialog.open(DialogComponent,{
      width:'30%',
     data: row
      }).afterClosed().subscribe(val=>{
        if(val=='update'){
          this.getAllProducts();
        }

      })
     }
     deleteProduct(id:number){
      this.api.deleteProduct(id)
      .subscribe({
        next:(res)=>{
          alert("Product Sucessfully Deleted");
          this.getAllProducts();
        },
        error:()=>{
          alert("Error while deleting Product")
        }
      })
     }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    } 
    
 
  
 }
 
 

 
    
