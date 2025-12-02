function votarUp(btn) {
    const countEl = btn.parentElement.querySelector(".vote-count");
    countEl.innerText = parseInt(countEl.innerText) + 1;
}

function votarDown(btn) {
    const countEl = btn.parentElement.querySelector(".vote-count");
    countEl.innerText = parseInt(countEl.innerText) + 1;
}

function login() {
    document.getElementById("login-screen").style.display = "none";
    const mainSite = document.getElementById("main-site");
    mainSite.style.display = "block";

    setTimeout(() => { 
        mainSite.style.opacity = 1; 
    }, 50);
}

function adicionarFeedback() {
    const nome = document.getElementById("input-nome").value || "Anônimo";
    const tipo = document.getElementById("input-tipo").value;
    const prioridade = document.getElementById("input-prioridade").value;
    const descricaoEl = document.getElementById("input-descricao");
    const descricao = descricaoEl.value.trim();

    if (descricao === "") {
        descricaoEl.classList.add("erro");
        descricaoEl.placeholder = "Este campo é obrigatório!";
        return;
    } else {
        descricaoEl.classList.remove("erro");
    }

    const msg = document.getElementById("msg-sucesso");
    msg.style.display = "block";
    setTimeout(() => { msg.style.opacity = 1; }, 10);

    setTimeout(() => {
        msg.style.opacity = 0;
        setTimeout(() => { msg.style.display = "none"; }, 500);
    }, 2500);

    const card = document.createElement("div");
    card.className = "feedback-card " +
        (prioridade==="Baixa" ? "prioridade-baixa" :
         prioridade==="Média" ? "prioridade-media" :
         "prioridade-alta");

    card.innerHTML = `
        <strong>${nome}</strong> – ${tipo}
        <p><strong>Prioridade:</strong> ${prioridade}</p>
        <p>“${descricao}”</p>
        <div class="vote-container">
            <div class="vote-box">
                <button class="vote-btn" onclick="votarUp(this)"><div class="arrow-up"></div></button>
                <span class="vote-count">0</span>
            </div>
            <div class="vote-box">
                <button class="vote-btn" onclick="votarDown(this)"><div class="arrow-down"></div></button>
                <span class="vote-count">0</span>
            </div>
        </div>
    `;

    document.getElementById("lista").appendChild(card);

    document.getElementById("input-nome").value = "";
    descricaoEl.value = "";
    document.getElementById("input-tipo").selectedIndex = 0;
    document.getElementById("input-prioridade").selectedIndex = 0;

    card.scrollIntoView({ behavior: "smooth" });
}
