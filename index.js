function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

window.onload = function() {
    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    let indexWho = random(0,who.length-1); // guarda posicion aleatoria
    let indexAction = random(0,action.length-1);
    let indexWhat = random(0,what.length-1);
    let indexWhen = random(0,when.length-1);

    let excuseSentence = who[indexWho]+" "+action[indexAction]+" "+what[indexWhat]+" "+when[indexWhen];
    document.querySelector("#excuse").innerHTML = excuseSentence;
}
