export class Perimetro {
    public circulo(radio:number):number {
        return 2 * Math.PI * radio;
    }

    public cuadrado(lado:number):number {
        return 4 * lado;
    }

    public rectangulo(base:number, altura:number):number {
        return 2 * (base + altura);
    }
}