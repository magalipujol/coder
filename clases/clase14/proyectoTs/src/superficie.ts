export class Superficie {
    public circulo(radio:number):number {
        return Math.PI * Math.pow(radio, 2);
    }

    public cuadrado(lado:number):number {
        return Math.pow(lado, 2);
    }

    public rectangulo(base:number, altura:number):number {
        return base * altura;
    }
}