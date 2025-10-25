import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  id: number = 0;
  name: string = '';
  gender: string = '';
  email: string = '';
  loading = true;

  constructor(private aRoute: ActivatedRoute, private _usuarioService: UsuarioService) {
    this.id= +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    console.log(this.id)
    this.getUsuario();
  }

  getUsuario(): void {
    this._usuarioService.getUsuario(this.id).subscribe(data => {
      console.log(data);
      this.name = data.name;
      this.gender = data.gender;
      this.email = data.email;
      this.loading = false;
    });
  }
}