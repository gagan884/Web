import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ApiService } from '../services/api.service';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  freshnesslist=["Brand New","Second Hand","Refurbished"]
  productForm!: FormGroup;
  actionBtn:string="Save";
  constructor(private formBuilder:FormBuilder,
     private api: ApiService,
     @Inject(MAT_DIALOG_DATA) public editData:any,
     private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.productForm=this.formBuilder.group({
      productName:['',Validators.required],
      category:['',Validators.required],
      date:['',Validators.required],
      freshness:['',Validators.required],
      price:['',Validators.required],
     comment:['',Validators.required]

    })
    if(this.editData)
    {
      this.actionBtn="Update";
      this.productForm.controls['productName'].setValue(this.editData.productName);
      this.productForm.controls['category'].setValue(this.editData.category);
      this.productForm.controls['date'].setValue(this.editData.date);
      this.productForm.controls['freshness'].setValue(this.editData.freshness);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['comment'].setValue(this.editData);
    }
  }
  addProduct(){
    console.log(this.productForm.value)
   if(!this.editData){
    if(this.productForm.valid)
    {
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(res)=>{
          alert("Product Successfully add");
          this.dialogRef.close('save');

        },
        error:()=>{
          alert("error while adding prodiuct")

        }
      })
    }
   }
   else{
    this.updateProduct()
   }
   
  }
  updateProduct(){
    this.api.putProduct(this.productForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Product sucessfully updates");
        this.productForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("error while updating the record ")
      }
      
    })
  }
  

}



