import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class LoaderService {
    public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public loaderModule: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    display(mostrar: boolean) {
        this.status.next(mostrar);
    }

    displayLoaderModule(mostrar: boolean) {
      this.loaderModule.next(mostrar);
    }
}
