import { Component, OnInit } from '@angular/core';
import { SharedModule } from "../../../shared/sharedmodule";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { FoodMenuService } from '../../../services/catalogue/food-menu.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FoodMaster } from '../../../models/food-master.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-food-menu-master',
  imports: [SharedModule,RouterModule,FormsModule,ReactiveFormsModule,SpkReusableTablesComponent, NgIf],
  templateUrl: './food-menu-master.component.html',
  styleUrl: './food-menu-master.component.scss'
})
export class FoodMenuMasterComponent implements OnInit {
  lists: any[] = [];
  
  constructor( private readonly router: Router,
    private readonly foodService: FoodMenuService,
    private readonly dialog: MatDialog,
    private readonly snackBar: MatSnackBar,
    private readonly route: ActivatedRoute,
  ) {
    
  }

  ngOnInit(): void {
    this.foodService.getFoodMenuList().subscribe({
      next: (data: any) => {
        this.lists = data.result;
        console.log('Food menu fetched:', data);
      },
      error: (error) => {
        console.error('Error fetching food menu:', error);
      }
    });
  }

  toggleRowChecked(row: any): void {
    // Check if all rows are selected
    this.allTasksChecked = this.lists.every(row => row.checked);

    // Update the state of the header checkbox accordingly
  }
  handleToggleSelectAll(checked: any) {
    this.lists.forEach(list => list.checked = checked);
    this.allTasksChecked = checked;
  }

  openDetails(id: any) {
    this.router.navigate(['catalogue/food-menu-details', id]);
  }


  Remove(id: any) {
    var Outputdata = this.lists.filter((x) => {
      return x.id != id;
    });
    this.lists = Outputdata;
  }

  Clear = () => {
    this.lists = [];
  };
  allTasksChecked: boolean = false;
  tasks: any[] = [/* your tasks here */];

  toggleSelectAll(event: Event) {
    this.allTasksChecked = (event.target as HTMLInputElement).checked;
  }
  productlistColumns=[
    {header:"Product",field:"Product"},
    {header:"Category",field:"Category"},
    {header:"Price",field:"Price"},
    {header:"Status",field:"Status"},
    {header:"Published",field:"Published"},
    {header:"Action",field:"Action"},
  ]

}
