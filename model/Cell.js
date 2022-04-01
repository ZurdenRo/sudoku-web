


export class ObjCell {


    constructor(number, posX, posY, hidden){
        this.number = number
        this.posX = posX
        this.posY = posY
        this.hidden = hidden
    }

    getNumber(){
        return this.number;
    }
    
    getPosX(){
        return this.posX;
    }
    
    getPosY(){
        return this.posY;
    }

    getHidden(){
        return this.hidden;
    }
}