import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'contracts',
    loadComponent: () =>
      import('@angular-monorepo/contracting').then(
        (m) => m.ContractingComponent
      ),
  },
  {
    path: 'contracts',
    loadComponent: () =>
      import('@angular-monorepo/contracting').then(
        (m) => m.ContractingComponent
      ),
  },
];
