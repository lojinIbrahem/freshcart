export interface Cart {
    numOfCartItems: number
    cartId: string
    data: CartData
  }
  
  export interface CartData {
    cartOwner: string
    products: Product[]
    totalCartPrice: number
  }
  
  export interface Product {
    count: number
    _id: string
    product: productDetails
    price: number
  }
  
  export interface productDetails {
    subcategory: Subcategory[]
    _id: string
    title: string
    quantity: number
    imageCover: string
    category: Category
    brand: Brand
    ratingsAverage: number
    id: string
  }
  
  export interface Subcategory {
    _id: string
    name: string
    slug: string
    category: string
  }
  
  export interface Category {
    _id: string
    name: string
    slug: string
    image: string
  }
  
  export interface Brand {
    _id: string
    name: string
    slug: string
    image: string
  }
  