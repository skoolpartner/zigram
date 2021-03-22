import { Component, OnInit } from '@angular/core';
import { CocktailService } from './app.cocktail.service';
import { COMMON_CONSTANT } from './constants/common-const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listingArray:any=[];
  editMode:Boolean = false;
  searchBox:String;

  //values are defined in common constant file, these values can be re-use at multiple places
  alcholic:any = COMMON_CONSTANT.alcholic;
  category:any = COMMON_CONSTANT.category;
  glass:any = COMMON_CONSTANT.glass;

  constructor(private cocktailService:CocktailService){}

  ngOnInit(){
    this.getCocktaisListing(); 
  }
  
  //whole listing starting with a alphbets, [note: could not findout API for complete listing]
  getCocktaisListing(){
    this.cocktailService.listAllCocktails().subscribe(data=>{
      this.listingArray = data.drinks;
    })
  }

  //Top of the table, I have added Edit button to make this fields in editable mode
  editButton(){
    this.editMode = true;
  }

  //Top of the table, I have added Save Button, It will make the unEditable, could not findout POST API to make the post
  saveButton(){
    this.editMode = false;
  }

  //It will filter Alcoholic, Category, Glass
  filterData(param){
    this.cocktailService.itemSortBy(param).subscribe(data=>{
      this.listingArray = data.drinks;
    })
  }

  //It will filter ID, the API is different for ID Filter and Alcoholic, Category, Glass hence two different call is required...
  filterDataById(param){    
    this.cocktailService.itemSortById(param).subscribe(data=>{
      this.listingArray = data.drinks;
    })
  }

  




}
