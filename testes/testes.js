function testar(id){
    if(id == 1){   
        teste1();
    }else if(id == 2){
        teste2();
    }else if(id == 3){
        teste3();
    }else if(id == 4){
        teste4();
    }else if(id == 5){
        teste5();
    }else if(id == 6){
        teste6();
    }else if(id == 7){
        teste7();
    }else if(id == 8){
        teste8();
    }else if(id == 0){
        teste1();
        teste2();
        teste3();
        teste4();
        teste5();
        teste6();
        teste7();
        teste8();
    }
} 


function danger(id){
    let btn = document.querySelector(`#section_${id} > button`);
    btn.classList.remove('btn-primary');
    btn.classList.remove('btn-success');
    btn.classList.add('btn-danger');
    btn.innerHTML = '<i class="fa fa-times-circle-o" aria-hidden="true"></i>';
}
function success(id){
    let btn = document.querySelector(`#section_${id} > button`);
    btn.classList.remove('btn-primary');
    btn.classList.remove('btn-danger');
    btn.classList.add('btn-success');
    btn.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>';
}


function teste1(){
    const id = 1;
    let flag = false;
    for(let i = 0 ; i < 5 ; i++){
        let retorno = buscaCortePorId(i+1);
        if(retorno == undefined){
            showAlert(1, 'Sua função não possui um retorno válido.');
            flag = true;
        }else if(typeof retorno != 'object'){
            showAlert(1, 'Sua função não está retornando o tipo correto de dado.');
            flag = true;
        }
        else if(retorno.id != barbearia.cortes[i].id ||
            retorno.tipo != barbearia.cortes[i].tipo ||
            retorno.valor != barbearia.cortes[i].valor
        ){
            showAlert(1, 'Sua função não está retornando o objeto com os valores esperados.');
            flag = true;
        }
    }

    let retorno_nao_encontrado = buscaCortePorId(-1);
    if(typeof retorno_nao_encontrado != 'string' && !flag){
        showAlert(1, 'Se o corte não for encontrado você deve retornar a string "Corte não encontrado"');
        flag = true;
    }else if( retorno_nao_encontrado.toLowerCase() !== 'corte não encontrado' && retorno_nao_encontrado.toLowerCase() !== 'corte nao encontrado' && !flag){
        showAlert(1, 'Se o corte não for encontrado você deve retornar "Corte não encontrado"');
        flag = true;
    }

    if(flag){
        danger(id);
    }else{
        success(id);
    }
}

function teste2(){
    const id = 2;
    let flag = false;
    for(let i = 0 ; i < 5 ; i++){
        let retorno = buscaBarbaPorId(i+1);
        if(retorno == undefined){
            flag = true;
            showAlert(2, 'Sua função não possui um retorno válido.');
        }else if(typeof retorno != 'object'){
            showAlert(2, 'Sua função não está retornando o tipo correto de dado.');
            flag = true;
        }
        else if(retorno.id != barbearia.barbas[i].id ||
            retorno.tipo != barbearia.barbas[i].tipo ||
            retorno.valor != barbearia.barbas[i].valor
        ){
            showAlert(2, 'Sua função não está retornando o objeto com os valores esperados.');
            flag = true;
        }
    }

    let retorno_nao_encontrado = buscaBarbaPorId(-1);
    if(typeof retorno_nao_encontrado != 'string' && !flag){
        showAlert(2, 'Se a barba não for encontrada você deve retornar a string "Barba não encontrada"');
        flag = true;
    }else if( retorno_nao_encontrado.toLowerCase() !== 'barba não encontrada' && retorno_nao_encontrado.toLowerCase() !== 'barba nao encontrada' && !flag){
        showAlert(2, 'Se a barba não for encontrada você deve retornar "Barba não encontrada"');
        flag = true;
    }

    if(flag){
        danger(id);
    }else{
        success(id);
    }
}

function teste3(){
    const id = 3;
    let retorno = verificaStatusBarbearia();
    if((barbearia.estaAberto && retorno == "Estamos abertos") || !barbearia.estaAberto && retorno == "Estamos fechados"){
        success(id);
    }else if(retorno == undefined){
        showAlert(3, 'Sua função não possui um retorno válido.');
        danger(id);
    }else{
        showAlert(3, 'Sua função não está retornando o valor esperado.');
        danger(id);
    }
}

function teste4(){
    const id = 4;
    let retorno = retornaTodosCortes();
    if(retorno == undefined){
        showAlert(4, 'Sua função não possui um retorno válido.');
        danger(id);
    }else if(retorno[0].tipo == "Militar" && retorno[3].tipo == "Moicano"){
        success(id);
    }else{
        showAlert(4, 'Sua função não está retornando o valor esperado.');
        danger(id);
    }
}

function teste5(){
    const id = 5;
    let retorno = retornaTodasBarbas();
    if(retorno == undefined){
        showAlert(5, 'Sua função não possui um retorno válido.');
        danger(id);
    }else if(retorno[0].tipo == "Capitão Jack" && retorno[3].tipo == "Barba Baixa"){
        success(id);
    }else{
        showAlert(5, 'Sua função não está retornando um array com todas as barbas.');
        danger(id);
    }
}

function teste6(){
    const id = 6;
    let teste1 = criaPedido('Thiago', 2, 2);
    let teste2 = criaPedido('Felipe', 1, 3);

    if(teste1 == undefined || teste2 == undefined || teste3 == undefined){
        showAlert(6, 'Sua função não possui um retorno válido.');
        danger(id);
    }else{
        let flag = false;
        if( teste1.nome == 'Thiago' && 
            teste1.pedidoCorte == 'Samurai' &&
            teste1.pedidoCortePreco == 35 &&
            teste1.pedidoBarba == 'Van Dyke' &&
            teste1.pedidoBarbaPreco == 20 &&
            teste2.nome == 'Felipe' &&
            teste2.pedidoCorte == 'Militar' &&
            teste2.pedidoCortePreco == 20 &&
            teste2.pedidoBarba == 'Barba Média' &&
            teste2.pedidoBarbaPreco == 20
        ){
            flag = true;
        }

        if(!flag){
            showAlert(6, 'Sua função não está criando o pedido com o valores ou atributos esperados.');
            danger(id);
        }else{
            success(id);
        }
    }
}

function teste7(){
    const id = 7;
    let lista = [
        {
            id: 1,
            tipo: 'teste',
            valor: 20
        },{
            id: 2,
            tipo: 'teste',
            valor: 20
        }
    ]
    let teste1 = atualizarServico(lista, 1, 25, 'teste1');
    let teste2 = atualizarServico(lista, 2, 30, 'teste2');
    if(teste1 == undefined || teste2 == undefined){
        danger(id);
        showAlert(7, 'Sua função não possui um retorno válido.');
    }else{
        if(teste1[0].valor != 25 || teste1[0].tipo != 'teste1' || teste2[1].valor != 30 || teste2[1].tipo != 'teste2'){
            danger(id);
            showAlert(7, 'Sua função não está alterando o pedido. Tente revisar seu codigo!');
        }else{
            success(id);
        }
    }
}

function teste8(){
    const id = 8;
    const pedido1 = {
        nome: 'Thiago', 
        pedidoCorte: 'Samurai',
        pedidoCortePreco: 35,
        pedidoBarba: 'Van Dyke',
        pedidoBarbaPreco: 20
    }
    const pedido2 = {
        nome: 'Felipe',
        pedidoCorte: 'Militar',
        pedidoCortePreco: 20,
        pedidoBarba: 'Barba Média',
        pedidoBarbaPreco: 20
    }
    let retorno1 = calculaTotal(pedido1);
    let retorno2 = calculaTotal(pedido2);
    if(retorno1 == undefined || retorno2 == undefined){
        showAlert(8, 'Sua função não possui um retorno válido.');
        danger(id);
    }else if(retorno1 != 55 || retorno2 != 40 ){
        showAlert(8, 'Sua função não está calculando o total corretamente.');
        danger(id);
    }else{
        success(id);
    }
}

function showAlert(id, mensagem){
    if(document.querySelector(`#section_${id} .alert`)){
        document.querySelector(`#section_${id} .alert`).remove();
    }
    document.querySelector(`#section_${id}`).insertAdjacentHTML('beforeend', `<div class="alert alert-warning" role="alert">
    ${mensagem}
</div> `);
}
