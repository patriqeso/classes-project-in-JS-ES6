class FamilyMember {

    constructor(name,role,age,sex){
        this._name = name;
        this._role = role;
        this._age = age;
        this._surname = 'Urik';
        this._sex = sex;
    }

    get name(){
        return this._name;
    }

    get role(){
        return this._role;
    }

    get age(){
        return this._age;
    }

    get surname() {
        surname('duchovic');
        return this._surname;
    }

    set surname(newSurname) {
        if (this._sex === 'woman'|| this._sex === 'zena') {
            this._surname = newSurname;
        }
        else {
            console.error('I cant change your surname cause you are a Man');
        }
      }

}

class ParentMember extends FamilyMember{
    
    constructor(name,role,age,sex,empolyer,wage) {
        super(name,role,age,sex);
        this._employer = empolyer;
        this._wage = wage;
    }

    get employer(){
        return this._employer;
    }

    get wage(){
        return this._wage + ' €';
    }
}

class childMember extends FamilyMember{
    
    constructor(name,role,age,sex,school,hobbies) {
        super(name,role,age,sex);
        this._school = school;
        this._hobbies = hobbies;
    }

    get school(){
        return this._school;
    }

    get hobbies(){
        return this._hobbies;
    }
}

const Pato = new childMember('Patrik','children',23,'man','High School Novaky',['swimming','waterpolo','bike']);
const Niky = new childMember('Nikola','children',10,'woman','Primary School Oslany', ['books reading', 'drawing', 'dance']);
const Toby = new childMember('Tobias','children',30,'man','FRI Zilina',['programing','computer games']);
const Otec = new ParentMember('Andrej','parent',55,'man','Google INC.', 8450,);
const Mama = new ParentMember('Simona','parent',50, 'woman','Coop Jednota', 630);
console.log(`My name is ${Pato.name} ${Pato.surname}. I am ${Pato.age} years old. I was study in ${Pato.school}
and my hobbies are: ${Pato.hobbies}`);
console.log(`My name is ${Niky.name} ${Niky.surname}. I am ${Niky.age} years old. I am studying in ${Niky.school}
and my hobbies are: ${Niky.hobbies}`);
console.log(`My name is ${Toby.name} ${Toby.surname}. I am ${Toby.age} years old. I was study in ${Toby.school}
and my hobbies are: ${Toby.hobbies}`);
console.log(`My name is ${Otec.name} ${Otec.surname}. I am ${Otec.age} years old
I am work in ${Otec.employer} and I am earning ${Otec.wage}`);
console.log(`My name is ${Mama.name} ${Mama.surname}. I am ${Mama.age} years old
I am work in ${Mama.employer} and I am earning ${Mama.wage}`);


console.log('\n')
console.log('\n')
console.log('Calling setter in Niky and Pato Object\'s');
console.log('\n')

 console.log(`My name is ${Niky.name} ${Niky.surname}. I am ${Niky.age} years old`);
 Niky.surname = 'Urikova';
 console.log(`My name is ${Niky.name} ${Niky.surname}. I am ${Niky.age} years old`);

 console.log(`My name is ${Pato.name} ${Pato.surname}. I am ${Pato.age} years old`);
 Pato.surname = 'Urik'
 console.log(`My name is ${Pato.name} ${Pato.surname}. I am ${Pato.age} years old`);


