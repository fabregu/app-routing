import { Component } from '@angular/core';
import { CardUsuarioComponent } from "./card-usuario/card-usuario.component";
import { UsuarioService } from '../../../services/usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-usuarios',
  standalone: true,
  imports: [CommonModule, CardUsuarioComponent],
  templateUrl: './list-usuarios.component.html',
  styleUrl: './list-usuarios.component.css'
})
export class ListUsuariosComponent {
  listUsuarios: any[] = [];
  loading = true;

  constructor(private _usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this._usuarioService.getUsuarios().subscribe(data => {
      console.log(data);
      this.listUsuarios = data;
      this.loading = false;
    });
  }
}
