import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Creado con ♥ por <b><a href="https://github.com/aotaduy" target="_blank">Andres Otaduy Botas</a></b> 2020
    </span>
    <div class="socials">
      <a href="https://github.com/aotaduy" target="_blank" class="ion ion-social-github"></a>
      <a href="https://ar.linkedin.com/in/andres-otaduy-48b69156" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
