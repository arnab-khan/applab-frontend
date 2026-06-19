import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';

export const credentialsInterceptor: HttpInterceptorFn = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
    // Include cookies with every HttpClient request.
    const apiReq = req.clone({
        withCredentials: true
    });
    return next(apiReq);
};