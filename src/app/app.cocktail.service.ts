import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
   

@Injectable()

export class CocktailService {

    constructor(private http: HttpClient) {}

    listAllCocktails(): Observable<any>{
        let ListCocktails = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
        return this.http.get(ListCocktails).pipe(map(
            data => {
                return data;
            }
        ));
    }

    itemSortBy(params): Observable<any>{
        let ListCocktails = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?"+params;
        return this.http.get(ListCocktails).pipe(map(
            data => {
                return data;
            }
        ));
    }

    itemSortById(params): Observable<any>{
        let ListCocktails = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?"+params;
        return this.http.get(ListCocktails).pipe(map(
            data => {
                return data;
            }
        ));
    }



    
    

}
