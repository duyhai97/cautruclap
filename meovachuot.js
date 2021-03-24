class Mouse{
    constructor(_name, _weight,_speed) {
        this.status = true;
        this.name = _name;
        this.weight = _weight;
        this.speed = _speed;
    }
    speak(str){
        return this.name + " " + str;
    }

}


class Cat{
    constructor(_name, _weight,_speed) {
        this.name = _name;
        this.weight = _weight;
        this.speed = _speed;
    }
    speak(str){
        return this.name + "" + str;
    }
    catch(mouse){
        if (this.speed > mouse.speed)
            console.log(this.name + " da bat dc " + mouse.name);
    }
    eat(mouse){
        if (mouse.status)
        {
            mouse.status = false;
            this.weight += mouse.weight;
            console.log("chuot " + mouse.name + " da bi meo " + this.name + "thit" );
        }
    }
}
let meoo = new Cat("Meoo", 10, 20);

let Chuot1 = new Mouse("chuot1", 3, 15);
let Chuot2 = new Mouse("chuot2", 4,25);

meoo.catch(Chuot1);

meoo.eat(Chuot1);


meoo.catch(Chuot2); //khoong dc vi speed meo < chuot 2

meoo.eat(Chuot2);