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
    path: 'invoice',
    loadComponent: () =>
      import('@angular-monorepo/invoicing').then((m) => m.InvoicingComponent),
  },
];
