import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { FakestoreApiService } from '../../services/fakestore-api.service';
import { Product } from '../../model/product.entity';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatCardModule, TranslateModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Array<Product> = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'description', 'category', 'image'];
  dataSource: any;

  constructor(private fakestoreApiService: FakestoreApiService) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.fakestoreApiService.getProducts().subscribe(
      (data: Product[]) => {
        console.log('Productos cargados:', data);
        this.products = data;
      },
      (error) => {
        console.error('Error al cargar los productos:', error);
      }
    );
  }
}
