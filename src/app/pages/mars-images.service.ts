import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { IMarsImagesDto } from '@shared/models/mars-images-dto.model';

type HttpMarsImagesDto = Observable<HttpResponse<IMarsImagesDto>>;

@Injectable({
  providedIn: 'root',
})
export class MarsImagesService {
  readonly #hostUrl = 'https://api.nasa.gov';
  readonly #apiUrl = '/mars-photos/api/v1/rovers/curiosity/photos';
  readonly #apiKey = 'r3x72x8gOvw0yqkDmrjqHu10JWItLGovv4P1Xdg8';

  constructor(private readonly http: HttpClient) {}

  getImages({ page = 1, earthDate = '2021-6-3' }): HttpMarsImagesDto {
    const params = `earth_date=${earthDate}&page=${page}&api_key=${
      this.#apiKey
    }`;

    return this.http
      .get<IMarsImagesDto>(`${this.#hostUrl}${this.#apiUrl}?${params}`, {
        observe: 'response',
      })
      .pipe(
        tap(
          // En cas de réponse normale, on ne garde pas l'historique
          () => {},
          // Utiliser le localstorage pour stocker les modifications de favoris
          (error: any) => {
            console.error('HTTP ERROR | ' + error);
          },
        ),
      );
  }
}
