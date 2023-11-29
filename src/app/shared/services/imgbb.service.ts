import { Injectable }  from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';  

import { environment } from '@ebay/env/environment';

interface IImgBBResponse {
  data: {
    display_url: string
  }
}

@Injectable({
  providedIn: "root"
})
export class ImgBBService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  upload(file: File): Observable<string> {
    const payload = new FormData();
    payload.append('image', file);

    return this.httpClient.post<IImgBBResponse>(environment.apis.shared.uploadNewImage, payload, {
      params: {
        key: environment.keys.imageBB
      }
    }).pipe(
      map((response: IImgBBResponse): string => {
        return response.data.display_url; 
      })
    )
  }
}
