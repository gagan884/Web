import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  @ViewChild('fileInput')
  fileInput!: ElementRef;
  fileAttr = 'Choose File';
  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttr += file.name + ' - ';
      });
      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          let imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = '';
    } else {
      this.fileAttr = 'Choose File';
    }
  }
}

 




// import { Component, ViewChild, ElementRef } from '@angular/core';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent {
//   @ViewChild('fileInput') fileInput: ElementRef;
//   fileAttr = 'Choose File';
//   uploadFileEvt(imgFile: any) {
//     if (imgFile.target.files && imgFile.target.files[0]) {
//       this.fileAttr = '';
//       Array.from(imgFile.target.files).forEach((file: any) => {
//         this.fileAttr += file.name + ' - ';
//       });
//       // HTML5 FileReader API
//       let reader = new FileReader();
//       reader.onload = (e: any) => {
//         let image = new Image();
//         image.src = e.target.result;
//         image.onload = (rs) => {
//           let imgBase64Path = e.target.result;
//         };
//       };
//       reader.readAsDataURL(imgFile.target.files[0]);
//       // Reset if duplicate image uploaded again
//       this.fileInput.nativeElement.value = '';
//     } else {
//       this.fileAttr = 'Choose File';
//     }
//   }
// }