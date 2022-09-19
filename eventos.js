const URL_REGIOES = 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes';
const URL_ESTADOS = (id) => `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${id}/estados`;
const URL_CIDADES = (id) => `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`;

fetch(URL_REGIOES)
    .then(response => response.json())
    .then(data => {
        data.map(cadaResult => {
            regiao.innerHTML += `<option value="${cadaResult.id}">${cadaResult.nome}</option>`;
        });       
    });

   // regiao.addEventListener('change', () => {

regiao.addEventListener('change', () => {
    estado.innerHTML = '<option>-- Selecione --</option>'
    fetch(URL_ESTADOS(regiao.value))
    .then(response => response.json())
    .then(dados => {
        dados.map(est => {
            estado.innerHTML += `<option value="${est.id}">${est.nome}</option>`;
        })
    });



estado.addEventListener('change', () => {
    cidade.innerHTML = '<option>-- Selecione --</option>'
    fetch(URL_CIDADES(estado.value))
    .then(response => response.json())
    .then(dados => {
            dados.map(cid => {
                cidade.innerHTML += `<option value="${cid.id}">${cid.nome}</option>`;
            })
        });
    })

});