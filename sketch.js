let suaidade;
let aventura;
let ação;
let RPG;
let título;
let corpo;
let jogos = {
  menor10:{
    ação: "Minecraft",
    aventura: "Lego City",
    RPG: "Pokemon"
  },
  entre10e14:{
    ação: "Splatoon",
    aventura: "Zelda",
    RPG: "Ninokini"
    
  },
  entre14e16:{
    ação: "Fortinite",
    aventura: "Uncharted",
    RPG: "Final Fantesy"
  },
  entre16e18:{
    ação: "Call of Duty",
    aventura: "The Witcher",
    RPG: "Persona"
  },
  maior18:{
    ação: "DOOM",
    aventura: "Red Dead Redemption 2",
    RPG: "Skyrim"
  }
};

let button;

function setup() {
  createCanvas(850, 400).position(100,100);
  createSpan("Qual sua idade").position(590,530).addClass("hidden");
  suaidade = createInput("").position(630,585).addClass("hidden");
  
  ação = createCheckbox("Gosta de jogos de ação?").position(100,600).addClass("hidden");
  aventura = createCheckbox("Gosta de jogos de aventura?").position(100,650).addClass("hidden");
  RPG = createCheckbox("Gosta de jogos de RPG?").position(100,700).addClass("hidden");
 título = "Nerko One";
  corpo = "Protest Guerrilla";
  button = createButton("Clica aí").position(width/2,560);
  button.mousePressed(bota);
button.addClass("botao");
}
function bota(){
  selectAll(".hidden").forEach((el)=>el.removeClass("hidden"));
  button.hide();
}
function draw() {
  
  background(220);
  
let idade = parseInt(suaidade.value());
  let checkação = ação.checked();
  let checkaventura = aventura.checked();
  let checkRPG = RPG.checked();
  let jogo = "Bota aí Fela";
  if (suaidade.value() !== ""){
    jogo = mostrajogo(idade, checkação , checkaventura, checkRPG);
    
  }
  fill("black");
  textAlign(CENTER, CENTER);
  textSize(40);
  text(jogo, width/2, height/2);
  textFont(título);
  fill("black");
  stroke("red");
  textAlign(CENTER,CENTER);
  textSize(40);
  text("MELHOR INDICADOR DE JOGOS", width/2, 20);
  textFont(corpo);
}
function mostrajogo(idade, checkação, checkaventura, checkRPG) {
  if (isNaN(idade)) {
    return "Idade Inválida";
  } else if (idade < 5) {
    return "Cai fora pirralho(a)";
  } else if (idade > 120) {
    return "Oloco defunto, vai descansar";
  }

  // Definindo um jogo padrão
  let jogoEscolhido = "Nenhum jogo encontrado";

  if (idade >= 5 && idade < 10) {
    if (checkação) {
      jogoEscolhido = jogos["menor10"]["ação"];
    } else if (checkaventura) {
      jogoEscolhido = jogos["menor10"]["aventura"];
    } else if (checkRPG) {
      jogoEscolhido = jogos["menor10"]["RPG"];
    }
  } else if (idade >= 10 && idade < 14) {
    if (checkação) {
      jogoEscolhido = jogos["entre10e14"]["ação"];
    } else if (checkaventura) {
      jogoEscolhido = jogos["entre10e14"]["aventura"];
    } else if (checkRPG) {
      jogoEscolhido = jogos["entre10e14"]["RPG"];
    }
  } else if (idade >= 14 && idade < 16) {
    if (checkação) {
      jogoEscolhido = jogos["entre14e16"]["ação"];
    } else if (checkaventura) {
      jogoEscolhido = jogos["entre14e16"]["aventura"];
    } else if (checkRPG) {
      jogoEscolhido = jogos["entre14e16"]["RPG"];
    }
  } else if (idade >= 16 && idade < 18) {
    if (checkação) {
      jogoEscolhido = jogos["entre16e18"]["ação"];
    } else if (checkaventura) {
      jogoEscolhido = jogos["entre16e18"]["aventura"];
    } else if (checkRPG) {
      jogoEscolhido = jogos["entre16e18"]["RPG"];
    }
  } else if (idade >= 18) {
    if (checkação) {
      jogoEscolhido = jogos["maior18"]["ação"];
    } else if (checkaventura) {
      jogoEscolhido = jogos["maior18"]["aventura"];
    } else if (checkRPG) {
      jogoEscolhido = jogos["maior18"]["RPG"];
    }
  }

  return jogoEscolhido; // Retorna o jogo escolhido
}
