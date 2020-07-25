export abstract class Shape{

    //declaração de variavel e construtor na mesma linha
    constructor(private _x: number, private _y: number){       
    }

    public get x(): number {
        return this._x;
    }

    public set x(x: number) {
        this._x = x;
    }

    public get y(): number {
        return this._y;
    }

    public set y(y: number) {
        this._y = y;
    }

    //override
    getInfo(): string{
        return `x=${this._x}, y=${this._y}`;
    }

    abstract calculateArea(): number;

}

