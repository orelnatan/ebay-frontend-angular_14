// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const baseUrl: string = "http://localhost:3001"

export const environment = {
  production: false,
  keys: {
    imageBB: `a06872ef72c0b074aaa627abfe08f9ea`
  },
  apis: {
    shared: {
      uploadNewImage: `https://api.imgbb.com/1/upload`,
    },
    auth: {
      login: `${baseUrl}/login`,
      register: `${baseUrl}/register`,
    },
    home: {
      brands: {
        all: `${baseUrl}/get-all-brands`
      },
      categories: { 
        byBrandId: `${baseUrl}/get-categories-by-brand-id`
      },
      families: { 
        byCategoryId: `${baseUrl}/get-families-by-category-id`
      },
      products: {
        byFamilyId: `${baseUrl}/get-products-by-family-id`,
        byName: `${baseUrl}/get-products-by-name`,
      } 
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
