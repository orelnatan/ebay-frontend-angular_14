import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { image } from '@ebay/assets/images';

import { BrandCrumbResolver, CategoryCrumbResolver, FamilyCrumbResolver, ProductCrumbResolver } from './resolvers';
import { HomeRootComponent } from './home-root.component';

const routes: Routes = [
  { path: '', redirectTo: 'brands', pathMatch: 'full' },
  { path: '', component: HomeRootComponent, children:
    [
      { 
        path: 'brands',
        loadChildren: () => import('./pages/brands-page').then(brands => brands.BrandsPageModule),
        data: {
          crumbs: [
            {
              path: "brands",
              name: "Brands",
              image: image("brand.svg")
            }
          ]
        }
      },
      { 
        path: 'brands/:brandId',
        loadChildren: () => import('./pages/categories-page').then(categories => categories.CategoriesPageModule),
        data: {
          crumbs: [
            {
              path: "brands",
              name: "Brands",
              image: image("brand.svg")
            },
            {
              path: "brandId",
              resolve: "brand",
            },
          ]
        },
        resolve: {
          brand: BrandCrumbResolver,
        }
      },
      { 
        path: 'brands/:brandId/categories/:categoryId',
        loadChildren: () => import('./pages/families-page').then(families => families.FamiliesPageModule),
        data: {
          crumbs: [
            {
              path: "brands",
              name: "Brands",
              image: image("brand.svg")
            },
            {
              path: "brandId",
              resolve: "brand"
            },
            {
              path: "categories",
              name: "Categories",
              image: image("category.svg"),
            },
            {
              path: "categoryId",
              resolve: "category",
            },
          ]
        },
        resolve: {
          brand: BrandCrumbResolver,
          category: CategoryCrumbResolver
        }
      },
      { 
        path: 'brands/:brandId/categories/:categoryId/families/:familyId',
        loadChildren: () => import('./pages/products-page').then(products => products.ProductsPageModule),
        data: {
          crumbs: [
            {
              path: "brands",
              name: "Brands",
              image: image("brand.svg")
            },
            {
              path: "brandId",
              resolve: "brand",
            },
            {
              path: "categories",
              name: "Categories",
              image: image("category.svg"),
            },
            {
              path: "categoryId",
              resolve: "category",
            },
            {
              path: "families",
              name: "Families",
              image: image("family.svg"),
            },
            {
              path: "familyId",
              resolve: "family",
            }
          ]
        },
        resolve: {
          brand: BrandCrumbResolver,
          category: CategoryCrumbResolver,
          family: FamilyCrumbResolver
        }
      },
      { 
        path: 'brands/:brandId/categories/:categoryId/families/:familyId/products/:productId',
        loadChildren: () => import('./pages/product-spec-page').then(product => product.ProductSpecPageModule),
        data: {
          crumbs: [
            {
              path: "brands",
              name: "Brands",
              image: image("brand.svg")
            },
            {
              path: "brandId",
              resolve: "brand",
            },
            {
              path: "categories",
              name: "Categories",
              image: image("category.svg"),
            },
            {
              path: "categoryId",
              resolve: "category"
            },
            {
              path: "families",
              name: "Families",
              image: image("family.svg"),
            },
            {
              path: "familyId",
              resolve: "family"
            },
            {
              path: "products",
              name: "Products",
              image: image("product.svg")
            },
            {
              path: "productId",
              resolve: "product"
            }
          ]
        },
        resolve: {
          brand: BrandCrumbResolver,
          category: CategoryCrumbResolver,
          family: FamilyCrumbResolver,
          product: ProductCrumbResolver
        }
      },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: [
    BrandCrumbResolver,
    CategoryCrumbResolver,
    FamilyCrumbResolver,
    ProductCrumbResolver
  ]
})
export class HomeRoutingModule {}