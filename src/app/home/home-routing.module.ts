import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ICrumb } from '@ebay/shared/breadcrumbs/models';

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
                            name: "Brand-id",
                        },
                    ] as Array<ICrumb>
                },
                resolve: {
                    brandId: BrandCrumbResolver
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
                            name: "Brand-id"
                        },
                        {
                            path: "categories",
                            name: "Categories",
                        },
                        {
                            path: "categoryId",
                            name: "Category-id",
                        },
                    ] as Array<ICrumb>
                },
                resolve: {
                    brandId: BrandCrumbResolver,
                    categoryId: CategoryCrumbResolver
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
                            name: "Brand-id",
                        },
                        {
                            path: "categories",
                            name: "Categories"
                        },
                        {
                            path: "categoryId",
                            name: "Category-id",
                        },
                        {
                            path: "families",
                            name: "Families"
                        },
                        {
                            path: "familyId",
                            name: "Family-id"
                        }
                    ] as Array<ICrumb>
                },
                resolve: {
                    brandId: BrandCrumbResolver,
                    categoryId: CategoryCrumbResolver,
                    familyId: FamilyCrumbResolver
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