import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card-usuario',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-usuario.component.html',
  styleUrl: './card-usuario.component.css'
})
export class CardUsuarioComponent {
  @Input() user: any;
  //imgUrl: string = '';
  name: string = '';
  email: string = '';
  id: number = 0;

  ngOnInit() {
    this.name = this.user.name;
    this.email = this.user.email;
    this.id = this.user.id; 
  }
}
