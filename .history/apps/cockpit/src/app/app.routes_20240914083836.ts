import { Route } from '@angular/router';

export const appRoutes: Route[] = [{
    path: '',
    loadComponent: () => 
        import('@angular-monorepo/contracting').then(m) => m.ContractingComponent
},];
