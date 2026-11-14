import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

/** Site shell: header, the routed page, footer. */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styles: `
    header { padding: 24px 0; }
    .brand { display: inline-flex; align-items: center; gap: 10px; font-weight: 700; font-size: 20px; letter-spacing: .2px; text-decoration: none; }
    .brand svg { width: 28px; height: 28px; color: var(--star); }
    footer { border-top: 1px solid var(--line); padding: 20px 0 32px; font-size: 14px; color: var(--muted); }
  `,
})
export class AppComponent {
  readonly year = new Date().getFullYear();
}
