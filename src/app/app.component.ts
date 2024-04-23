import { Component, ViewChild, } from '@angular/core';

import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTable, MatTableDataSource } from '@angular/material/table';

export interface People {
  name: string;
  weight: number;
  age: number;
  height:number;
  idx?:number;
  selected?:boolean;
}

const PEOPLE_DATA: People[] = [
  { name: 'mitsos', weight: 100000, age: 10, height:151},
  { name: 'takis', weight: 100000, age: 10, height:152},
  { name: 'takis', weight: 100000, age: 10, height:153},
  { name: 'takis', weight: 100000, age: 10, height:154},
  { name: 'takis', weight: 500000, age: 32, height:155},
  { name: 'takis', weight: 100000, age: 10, height:156},
  { name: 'mitsos', weight: 100000, age: 10, height:157},
  { name: 'mitsos', weight: 100000, age: 10, height:158},

];

@Component({
 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // imports:[CmConvertPipe]

})


export class AppComponent {
  selectedElements: People[] = [];
  idxOfElements: number[]=[];
  selection = new SelectionModel<People>(true, []);
  title = 'first-app';
  displayedColumns: string[] = [ 'name', 'weight', 'age', 'height'];
  dataSource = new MatTableDataSource<People>(PEOPLE_DATA);
  @ViewChild(MatTable) table: MatTable<People> | undefined;

  constructor(
    public dialog: MatDialog,
   
    
  ) {
    this.selection.changed.asObservable().subscribe(selectionChange => {
      this.selectedElements = [...this.selection.selected]
    });
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(ModalFormComponent, {
      height: '400px',
      width: '600px',  
      data:{
        addPeople:(name:string, weight:number, age:number, height:number)=>{
          console.log(name,weight,age,height)
          const guy = { name,weight,age,height}
          const data = this.dataSource.data
          data.push(guy)
          this.dataSource.data = data; 
          this.dialog.closeAll()
        }
      }   
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.addPeople();
    });
   
  
  }
  logIndex(i:number):void{
    const data = this.dataSource.data
    data[i].selected = true
    this.dataSource.data = data
  }
  deletePeople(): void {
    const data = this.dataSource.data
    const newData = data.filter((item,idx)=>{return !item.selected &&  item})
    this.dataSource.data = newData; 
  }
  // addPeople():void{
    
  
  //   const data = this.dataSource.data
  //   data.push(guy)
  //   this.dataSource.data = data; 
  // }
  filteringMethod(filterStr?: Event): void {
    if((filterStr?.target as HTMLInputElement).value != null) {
      this.dataSource.filter = (filterStr?.target as HTMLInputElement).value.trim().toLowerCase();
    }
  }
 
}
