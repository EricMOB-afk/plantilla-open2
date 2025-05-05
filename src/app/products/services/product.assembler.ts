import { ProductResponse } from './product.response';
import { Product } from '../model/product.entity';

export class ProductAssembler {
  static toEntityFromResponseArray(responseArray: ProductResponse[]): Product[] {
    return responseArray.map((response) =>
      this.toEntityFromResponse(response));
  }
  static toEntityFromResponse(response: ProductResponse): Product {
    return {
      id: response.id,
      title: response.title,
      price: response.price,
      description: response.description,
      category: response.category,
      image: response.image,
      rating: {
        rate: response.rating.rate,
        count: response.rating.count
      }
    };
  }


}
