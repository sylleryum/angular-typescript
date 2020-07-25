import { Shape } from './Shape';

export class Circle extends Shape{

    
    constructor(theX: number, theY: number, private _radios: number){
        super(theX, theY);
    }

    public get radios(): number {
        return this._radios;
    }

    public set radios(radios: number) {
        this._radios = radios;
    }

    getInfo(): string{
        return super.getInfo() + `, radius=${this._radios}`
    }
}