import { HttpInterceptorFn } from '@angular/common/http';
import { enviroments } from '../../enviroments/enviroments.prod';

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  const apiKey:string = enviroments.apiKey;
  if(req.url.includes('football.api-sports.io')){
    const modifiedReq = req.clone({
      setHeaders: {
        'x-rapidapi-key': apiKey
      }
    });
    return next(modifiedReq);
  }
  return next(req);
};
