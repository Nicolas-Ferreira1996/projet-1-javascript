const prompt = require("prompt-sync")()
let isAlive = true
let choice = 0

console.log(" Bonsoir... Vous venez de vous réveiller au milieu d'une forêt, il fait nuit.. Vous voyez une lumière au loin.. ");

let correctAnswer = false

while (correctAnswer === false  && isAlive === true) {
    choice = parseInt(prompt(" Vous aller en direction de cette lumière ? (1) ou Vous courrez dans le sens inverse en hurlant ? (2) "))
    if (choice === 1) {
        console.log(" Vous arrivez dans un village, vos souvenirs vous reviennes, vous tentez d'echapper à un guerrier surpuissant.. Vous voyez une taverne.. ");
        correctAnswer = true
    } else if (choice === 2) {
        console.log(" Un guerrier surpuissant vous retrouve et vous tue.. Vous êtes mort ! ");
        correctAnswer = true
        isAlive = false
    }
}

correctAnswer = false
choice = 0

while (correctAnswer === false && isAlive === true) {
    choice = parseInt(prompt(" Vous entrez à l'interieur de la taverne ? (1) ou Vous espionnez l'interieur pour voir ce qu'il s'y passe ? (2) "))

    if (choice === 1) {
        console.log(" Vous vous retrouvez nez à nez avec le guerrier surpuissant, il vous met un coup d'épée.. Vous êtes mort ! ");
        correctAnswer = true
        isAlive = false
    } else if (choice === 2) {
        console.log(" Vous voyez le guerrier surpuissant sortir, il est à votre recherche... Il s'en va à pied et disparait dans la nuit sombre, vous ne le voyez plus.. la voie à l'air libre, vous entrez dans la taverne... ");
        correctAnswer = true
    }
}

correctAnswer = false
choice = 0

while (correctAnswer === false && isAlive === true) {
    choice = parseInt(prompt(" Vous allez demander au comptoir si un cheval et une épée sont disponibles ? (1) ou Vous allez voir un Templier assis au fond de la taverne ? (2) "))

    if (choice === 1) {
        console.log(" Le Tavernier sort et hurle que vous êtes ici, le guerrier surpuissant arrive à dos de cheval et vous met un coup d'épée.. Vous êtes mort ! ");
        correctAnswer = true
        isAlive = false
    } else if (choice === 2) {
        console.log(" Le Templier vous indique qu'il souhaite tuer le guerrier et qu'il a un plan ! Vous suivez le Templier... ");
        correctAnswer = true
    }
}

correctAnswer = false
choice = 0

while (correctAnswer === false && isAlive === true) {
    choice = parseInt(prompt(" Le templier vous explique que pour son plan il a besoin de votre aide, souhaitez-vous l'aider ? (1) ou Souhaitez vous quitter ce village sans aider le Templier ? (2) "))

    if (choice === 1) {
        console.log(" Vous arrivez en face du guerrier surpuissant.. Le plan est simple, attirer son attention vers une grotte, le guerrier vous suit.. ");
        correctAnswer = true
        
    } else if (choice === 2) {
        console.log(" Vous sortez du village, le guerrier surpuissant vous trouve et vous tue.. Vous êtes mort ! ");
        correctAnswer = true
        isAlive = false
    }
}

correctAnswer = false
choice = 0

while (correctAnswer === false && isAlive === true) {
    choice = parseInt(prompt(" Le Templier vous dit de rester calme et de vous mettre bien évidence pour attirer le Guerrier au fond de la grotte, vous suivez son conseil ? (1) ou vous vous cachez derrière un rocher ? (2) "))

    if (choice === 1) {
        console.log(" Vous attirer le guerrier au fond de la grotte, mais vous êtes bloqué et le templier met trop de temps à arriver, le Guerrier vous tue... Vous êtes mort ! ");
        correctAnswer = true
        isAlive = false
    } else if (choice === 2) {
        console.log(" Vous vous cacher derrière le rocher le Guerrier vous cherche, mais, ne vous trouve pas... Le Templier arrive derrière lui et le tue.. Félicitation vous avez survécu ! ");
        correctAnswer = true
        
    }
}