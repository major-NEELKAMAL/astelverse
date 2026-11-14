import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="wrap">
      <h1>Page not found</h1>
      <p>That page doesn't exist. <a routerLink="/">Go to the Astelverse home page</a>.</p>
    </section>
  `,
  styles: `section { padding: 56px 20px 80px; } h1 { margin: 0 0 8px; } p { color: var(--muted); }`,
})
export class NotFoundComponent {}
