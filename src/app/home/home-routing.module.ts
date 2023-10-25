import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrandCrumbResolver, CategoryCrumbResolver, FamilyCrumbResolver, ProductCrumbResolver } from './resolvers';
import { HomeRootComponent } from './home-root.component';

const BRANDS_ICON: string = "../../assets/images/svg/currency_bitcoin_white.svg";
const CATEGORIES_ICON: string = "../../assets/images/svg/category_white.svg";
const FAMILIES_ICON: string = "../../assets/images/svg/account_tree_white.svg";
const PRODUCTS_ICON: string = "../../assets/images/svg/shopping_cart_white.svg";

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
                            image: BRANDS_ICON
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
                            image: BRANDS_ICON
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
                            image: BRANDS_ICON
                        },
                        {
                            path: "brandId",
                            resolve: "brand"
                        },
                        {
                            path: "categories",
                            name: "Categories",
                            image: CATEGORIES_ICON,
                        },
                        {
                            path: "categoryId",
                            resolve: "category"
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
                            image: BRANDS_ICON
                        },
                        {
                            path: "brandId",
                            resolve: "brand"
                        },
                        {
                            path: "categories",
                            name: "Categories",
                            image: CATEGORIES_ICON
                        },
                        {
                            path: "categoryId",
                            resolve: "category"
                        },
                        {
                            path: "families",
                            name: "Families",
                            image: FAMILIES_ICON
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
                            image: BRANDS_ICON
                        },
                        {
                            path: "brandId",
                            resolve: "brand",
                        },
                        {
                            path: "categories",
                            name: "Categories",
                            image: CATEGORIES_ICON
                        },
                        {
                            path: "categoryId",
                            resolve: "category"
                        },
                        {
                            path: "families",
                            name: "Families",
                            image: FAMILIES_ICON
                        },
                        {
                            path: "familyId",
                            resolve: "family"
                        },
                        {
                            path: "products",
                            name: "Products",
                            image: PRODUCTS_ICON
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