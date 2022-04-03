export class Usuario {
    usuario:string = '';
    contrasenia:string = '';

login(){
    console.log("Usuario:" + this.usuario);
    console.log("Contraseña:" + this.contrasenia);
}

}
