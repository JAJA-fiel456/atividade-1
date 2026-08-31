const famosos = {
    einstein: {
        nome: "Albert Einstein",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/500px-Albert_Einstein_Head.jpg"
    },
    monroe: {
        nome: "Marilyn Monroe",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Marilyn_Monroe_1953_studio_portrait.jpg/440px-Marilyn_Monroe_1953_studio_portrait.jpg"
    },
    turing: {
        nome: "Alan Turing",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/440px-Alan_Turing_Aged_16.jpg"
    },
    frida: {
        nome: "Frida Kahlo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/440px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg"
    },
    pele: {
        nome: "Pelé",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Pele_con_brasil_%28cropped%29.jpg/440px-Pele_con_brasil_%28cropped%29.jpg"
    },
    curie: {
        nome: "Marie Curie",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/440px-Marie_Curie_c._1920s.jpg"
    },
    jobs: {
        nome: "Steve Jobs",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/440px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg"
    },
    mandela: {
        nome: "Nelson Mandela",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/440px-Nelson_Mandela_1994.jpg"
    }
};

function mostrarImagem(chave) {
    const pessoa = famosos[chave];
    const container = document.getElementById('container');
    const nomeDiv = document.getElementById('nome');

    if (!pessoa) {
        registrarErro(`Chave inválida: ${chave}`);
        container.innerHTML = `<p class="placeholder">Erro: pessoa não encontrada</p>`;
        nomeDiv.textContent = "";
        return;
    }

    // Cria a imagem
    const img = document.createElement('img');
    img.src = pessoa.url;
    img.alt = pessoa.nome;

    // Quando a imagem carregar com sucesso
    img.onload = function() {
        container.innerHTML = '';
        container.appendChild(img);
        nomeDiv.textContent = pessoa.nome;
    };

    // Quando ocorrer erro ao carregar a imagem
    img.onerror = function() {
        const mensagem = `Erro ao carregar imagem de ${pessoa.nome} | URL: ${pessoa.url} | Data: ${new Date().toLocaleString('pt-BR')}`;
        registrarErro(mensagem);

        container.innerHTML = `<p class="placeholder">Erro ao carregar a imagem de ${pessoa.nome}</p>`;
        nomeDiv.textContent = "Falha no carregamento";
    };
}

function registrarErro(mensagem) {
    console.error("[ERRO]", mensagem);

}