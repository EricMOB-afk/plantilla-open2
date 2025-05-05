import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Product } from '../model/product.entity';
import { ProductResponse } from './product.response';
import { ProductAssembler } from './product.assembler';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakestoreApiService {
private baseUrl = environment.fakestoreProviderApiBaseUrl
private productsEndpoint = environment.fakestoreProviderProductsEndpointPath;

constructor(private http: HttpClient) { }

getProducts(): Observable<Product[]> {
  return this.http.get<ProductResponse[]>(`${this.baseUrl}${this.productsEndpoint}`)
    .pipe(
      map(responseArray =>
        ProductAssembler.toEntityFromResponseArray(responseArray))
  );
}
}
