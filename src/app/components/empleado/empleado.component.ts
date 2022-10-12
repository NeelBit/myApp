import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-empleado',
    templateUrl: './empleado.component.html',
    styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

    /* private _nombre = "nombre1";

    public get nombre() {
        return this._nombre;
    }
    public set nombre(value) {
        this._nombre = value;
    }

    private _apellido = "apellido1";

    public get apellido() {
        return this._apellido;
    }

    public set apellido(value) {
        this._apellido = value;
    }

    private _edad = 30;

    public get edad() {
        return this._edad;
    }
    public set edad(value) {
        this._edad = value;
    }

    private _empresa = "empresa1";

    public get empresa() {
        return this._empresa;
    }
    public set empresa(value) {
        this._empresa = value;
    } */

    nombre = "nombre2";
    apellido = "apellido2";
    edad = 20;
    //empresa = "empresa2";

    estaDeshabilitadoProperty = false;

    usuRegistradoProperty = false;

    textoRegistroProperty = "no hay nadie registrado";

    activeRegistroUsuario() {
        this.usuRegistradoProperty = false;
    }

    registrarUsuario() {
        alert("Usuario registrado exitósamente al hacer check!");
        this.textoRegistroProperty = "Se ha registrado 1 persona";
    }

    /* empresaRenombre(nombreNuevo: String) {
        let empresa = nombreNuevo;
    } */


    // radio button genero
    genero = "";

    // lugar
    lugar = "algun lugar";



    /* lugarNuevo(e: Event) {
        this.lugar = (<HTMLInputElement>e.target).value;
    } */

    cambioGenero(e: Event) {
        // tipo casting del evento
        //console.log((<HTMLInputElement>e.target).value);
        this.genero = (<HTMLInputElement>e.target).value;
    }


    constructor() { }

    ngOnInit(): void {
    }

/*     getNombre(): string {
        return this.nombre;
    }

    getApellido(): string {
        return this.apellido;
    }

    getEdad(): number {
        return this.edad;
    }

    getEmpresa(): string{
        return this.empresa;
    } */



}
