import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
    constructor(private injector: Injector) { }    

    handleError(error:any){
      let router = this.injector.get(Router);
      console.log("error occured at :"+router.url)
      if(error instanceof HttpErrorResponse){
        console.log("backend error status code :"+error.status);
        console.log("backend error message :"+error.message);
      }
      else
      console.log("status code :"+error.status);
      router.navigate(['/error']);
    }
}