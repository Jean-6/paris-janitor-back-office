import {CanActivateFn} from '@angular/router';
import {Router} from "express";
import {AuthService} from "../_services/auth.service";
import {inject} from "@angular/core";

export const AuthGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject (Router);

  if(authService.isConnected()){
    router.navigate(["/login"]);
    return true;
  }
  return false;
};
