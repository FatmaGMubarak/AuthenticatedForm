class User{
    #amount
    constructor(mail,password,amount){
        this.mail = mail
        this.password = password
        this.#amount = amount
    }
    getAmount(){
        return `${this.#amount}`;
    }
}

const user1 = new User("fg2@gmail.com" , "123654",15000);
const myForm = document.getElementById("myForm");
const mail1 = document.getElementById("mail");
const pass = document.getElementById("pass");
const btn = document.getElementById("btn");

btn.onclick = function(e){
    e.preventDefault()
    if(mail1.value === user1.mail && pass.value === user1.password){
        para = document.createElement("p")
        para.innerText = `Your total balance is ${user1.getAmount()}`
    }
    else{
        para = document.createElement("p")
        if(mail1.value !== user1.mail && pass.value !== user1.password){
            para.innerText = `You are NOT registred`
        } else if(pass.value !== user1.password){
            para.innerText = `Invalid PASSWORD`
        }
        else if(mail1.value !== user1.mail){
            para.innerText = `Invalid Email`
        }
    }
    myForm.appendChild(para);
}