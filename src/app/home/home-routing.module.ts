import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ICrumb } from '@ebay/shared/breadcrumbs';

import { BrandCrumbResolver, CategoryCrumbResolver, FamilyCrumbResolver } from './resolvers';
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
                            name: "Brands"
                        }
                    ] as Array<ICrumb>
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
                        },
                        {
                            path: "brandId",
                            resolve: "brand"
                        },
                    ] as Array<ICrumb>
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
                            name: "Brands"
                        },
                        {
                            path: "brandId",
                            resolve: "brand"
                        },
                        {
                            path: "categories",
                            name: "Categories",
                        },
                        {
                            path: "categoryId",
                            resolve: "category"
                        },
                    ] as Array<ICrumb>
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
                            name: "Brands"
                        },
                        {
                            path: "brandId",
                            resolve: "brand"
                        },
                        {
                            path: "categories",
                            name: "Categories",
                        },
                        {
                            path: "categoryId",
                            resolve: "category"
                        },
                        {
                            path: "families",
                            name: "Families"
                        },
                        {
                            path: "familyId",
                            resolve: "family"
                        }
                    ] as Array<ICrumb>
                },
                resolve: {
                    brand: BrandCrumbResolver,
                    category: CategoryCrumbResolver,
                    family: FamilyCrumbResolver
                }
            },
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes), ],
    exports: [ RouterModule ],
    providers: [
        BrandCrumbResolver,
        CategoryCrumbResolver,
        FamilyCrumbResolver
    ]
})
  
export class HomeRoutingModule {}