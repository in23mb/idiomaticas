PennController.ResetPrefix(null);

Sequence("Start", "TCLE1","TCLE2","TCLE3","TCLE4","Profile","Instructions1","Instructions2","Instructions3","Test","Test1", "Test2", "TestEnd",randomize("experimental"), SendResults(),"WaitForResults","Final","ExpCancel");
//Start: tela de boas-vindas
//TCLE1, TCLE2, TCLE3, TCLE4: 4 partes do termo de consentimento 
//Profile: perfil do participante
//Instructions1, Instructions2, Instructions3: instruções divididas em 3 partes 
//Test: teste da tarefa 
//randomize("Itens"): apresentação randômica dos itens experimentais
//SendResults(): envio dos dados para o servidor
//WaitForResults: esperar 3 segundos para o envio dos resultados
//TextCancel: tela de cancelamento do teste
//Final:tela final de encerramento

newTrial("Start",
    newText("<p>Bem-vindo(a) ao nosso experimento!</p>")
    .css("font-size", "1.4em")
    .center()
    .print()
    ,
    newText("<p>Muito obrigada por dedicar seu tempo a este estudo. Sua participação é essencial para a pesquisa sobre processamento da linguagem!</p>")
    .print()
    .css("font-size", "1.3em")
    ,
    newText("<p>Antes de começar, leia o <strong>Termo de Consentimento Livre e Esclarecido</strong> cuidadosamente e siga as etapas seguintes com atenção.</p>")
    .print()
    .css("font-size", "1.3em")
    ,
    newButton("Continuar")
    .print()
    .css("font-size", "1.2em")
    .center()
    .wait()
);

newTrial("TCLE1",
    newText("<p><strong>Termo de Consentimento Livre e Esclarecido (1/4)</strong></p>")
        .css("font-size", "1.4em")
        .center()
        .print()
    ,    
    newText("<p>Você está sendo convidado(a) a participar da pesquisa intitulada “O processamento linguístico de expressões idiomáticas em Língua Portuguesa por surdos usuários de Libras como L1”, sob a responsabilidade das pesquisadoras Camila Leite e Ingrid Barbosa. Nesta pesquisa nós estamos buscando investigar como se dá a compreensão de expressões idiomáticas de Língua Portuguesa (LP) por surdos que possuem Libras como primeira língua. O Termo/Registro de Consentimento Livre e Esclarecido está sendo obtido de forma virtual antes do início da sua participação na pesquisa e coleta de dados. Caso você concorde em participar desta pesquisa, você deve clicar no botão “ACEITO”. Neste caso, você estará aceitando participar da coleta de dados. Caso você não concorde em participar desta pesquisa, você deve clicar no botão “NÃO ACEITO”. Neste caso, a tarefa não será iniciada. Antes de concordar em participar da pesquisa, você pode entrar em contato com os(as) pesquisadores(as), em tempo real, para discutir as informações do estudo. O contato poderá ser efetuado por meio de aplicativo de mensagem (whats app) com qualquer das duas pesquisadoras. Você tem o tempo que for necessário para decidir se quer ou não participar da pesquisa (conforme item IV da Resolução nº 466/2012 ou Capítulo. III da Resolução nº 510/2016). </p>")
        .css("font-size", "1.3em")
        .print()
    ,
    newCanvas("botoes", 400, 50)  // criar um "quadrado" para a disposição dos botões 
        .add( 0, 0, newButton("back", "Voltar")
            .css("font-size", "1.2em")
            .print()
        ) 
        .add( 200, 0, newButton("next", "Continuar (2/4)")
            .css("font-size", "1.2em")
            .print()
        ) 
        .center()
        .print()
    ,
    newSelector("selecionaBotao") //seletor para escolher um botão
        .add(getButton("back"), getButton("next"))
        .wait()
        .log()
    ,
    getSelector("selecionaBotao").test.selected()
        .and( getSelector("selecionaBotao").test.selected(getButton("back")).success(jump("Start")) )
        .and( getSelector("selecionaBotao").test.selected(getButton("next")).success(jump("TCLE2")) )
);

newTrial("TCLE2",
    newText("<p><strong>Termo de Consentimento Livre e Esclarecido (2/4)</strong></p>")
        .css("font-size", "1.4em")
        .center() 
        .print()
    ,
    newText("<p>Na sua participação, antes do início da tarefa, você responderá a 6 questões para que possamos confirmar o seu perfil. Nenhuma das questões têm como objetivo te identificar. Apenas garantir que você corresponde ao perfil desta pesquisa. Para a tarefa, você fará a leitura, no seu computador, de 30 frases que serão apresentadas palavra por palavra. Para realizar a tarefa, você irá realizar um treinamento para entender como usar a plataforma. Essa tarefa exigirá de você um tempo estimado de 15 minutos. Você tem o direito de não responder a qualquer questão, sem necessidade de explicação ou justificativa para tal. Há 6 questões cujas respostas são obrigatórias, entretanto haverá a opção “PREFIRO NÃO RESPONDER”. Você não terá nenhum gasto nem ganho financeiro por participar na pesquisa. Nós, pesquisadores, atenderemos às orientações das Resoluções nº 466/2012, Capítulo XI, Item Xl.2: f e nº 510/2016, Capítulo VI, Art. 28: IV - manter os dados da pesquisa em arquivo, físico ou digital, sob nossa guarda e responsabilidade, por um período mínimo de 5 (cinco) anos após o término da pesquisa. Os resultados da pesquisa serão publicados, e ainda assim a sua identidade será preservada. Para isso, você não será solicitado a identificar-se. Além disso, receberá um código alfanumérico do tipo P01. Devemos ressaltar que de acordo com a resolução 466/12, qualquer pesquisa oferece riscos ao participante. </p>")
        .css("font-size", "1.3em")
        .print()
   ,
    newCanvas("botoes", 400, 50)  // criar um "quadrado" para a disposição dos botões 
        .add( 0, 0, newButton("back", "Voltar (1/4)")
            .css("font-size", "1.2em")
            .print()
        ) 
        .add( 200, 0, newButton("next", "Continuar (3/4)")
            .css("font-size", "1.2em")
            .print()
        ) 
        .center()
        .print()
    ,
    newSelector("selecionaBotao") //seletor para escolher um botão
        .add(getButton("back"), getButton("next"))
        .wait()
        .log()
    ,
    getSelector("selecionaBotao").test.selected()
        .and( getSelector("selecionaBotao").test.selected(getButton("back")).success(jump("TCLE1")) )
        .and( getSelector("selecionaBotao").test.selected(getButton("next")).success(jump("TCLE3")) )
);

newTrial("TCLE3",
    newText("<p><strong>Termo de Consentimento Livre e Esclarecido (3/4)</strong></p>")
        .css("font-size", "1.4em")
        .center() 
        .print()
    ,
    newText("<p>O risco mínimo é o da sua identificação. Para tentar suprimir tal risco, conforme dito acima, você não será solicitado a se identificar e receberá um código. Para minimizar alguns riscos do ambiente virtual, é importante que você tenha todo o cuidado com a segurança e privacidade do local quando realizar o acesso às etapas virtuais da pesquisa para que sejam garantidos o sigilo e a confidencialidade necessários. Antes, durante ou após o consentimento ou a coleta de dados, informe ao(à) pesquisador(a) quaisquer condições adversas, como entradas inesperadas de pessoas no ambiente. O benefício ao participar dessa pesquisa é poder contribuir para o conhecimento sobre o processamento linguístico dos surdos em Língua Portuguesa. Você é livre para deixar de participar da pesquisa a qualquer momento sem qualquer prejuízo ou coação. Após o término de cada frase completa, você deverá responder a uma pergunta sobre essa frase. É necessário ressaltar que, após a realização da tarefa, haverá um botão “CANCELAR PARTICIPAÇÃO” que você poderá clicar para cancelar sua participação, mesmo após ter respondido a todas as questões. Entretanto, como não haverá coleta de informações indicativas da sua identidade, caso você não clique nesse botão, não será possível a exclusão dos dados, uma vez que não haverá identificação nos dados coletados. Caso queira continuar a participação, basta clicar em “MANTER PARTICIPAÇÃO”. </p>")
        .css("font-size", "1.3em")
        .print()
    ,
    newCanvas("botoes", 400, 50)  
        .add( 0, 0, newButton("back", "Voltar (2/4)")
            .css("font-size", "1.2em")
            .print()
        ) 
        .add( 200, 0, newButton("next", "Continuar (4/4)")
            .css("font-size", "1.2em")
            .print()
        ) 
        .center()
        .print()
    ,
    newSelector("selecionaBotao") //seletor para escolher um botão
        .add(getButton("back"), getButton("next"))
        .wait()
        .log()
    ,
    getSelector("selecionaBotao").test.selected()
        .and( getSelector("selecionaBotao").test.selected(getButton("back")).success(jump("TCLE2")) )
        .and( getSelector("selecionaBotao").test.selected(getButton("next")).success(jump("TCLE4")) )
);

newTrial("TCLE4",
    newText("<p><strong>Termo de Consentimento Livre e Esclarecido (4/4)</strong></p>")
        .css("font-size", "1.4em")
        .center()
        .print()
    ,
    newText("<p>Este Termo de Consentimento Livre e Esclarecido deve ser salvo nos seus arquivos clicando no link (o link será inserido após termos a aprovação do CEP). Este Termo está assinado pelo(a) pesquisador(a) responsável e contém seu telefone e endereço de contato para que você possa tirar dúvidas sobre o projeto e sua participação Em qualquer momento, caso tenha qualquer dúvida ou reclamação a respeito da pesquisa, você poderá entrar em contato com Camila Leite, professora da Universidade Federal de Uberlândia, pelo email camila.leite@ufu.br , ou com a Ingrid Barbosa pelo telefone (12)996414722, aluna de graduação da Universidade Federal de Uberlândia (Av. João Naves de Ávila, 2121 - Bairro Santa Mônica, Uberlândia, MG). Havendo algum dano decorrente da pesquisa, você tem direito a solicitar indenização através das vias judiciais (Código Civil, Lei 10.406/2002, Artigos 927 a 954 e Resolução CNS nº 510 de 2016, Artigo 19). Para obter orientações quanto aos direitos dos(as) participantes de pesquisa, acesse a cartilha disponível no link: https://propp.ufu.br/sites/propp.ufu.br/files/media/documento/cartilha_dos_direitos_dos _participantes_de_pesquisa.pdf. Você poderá também entrar em contato com o Comitê de Ética na Pesquisa com Seres Humanos – CEP, da Universidade Federal de Uberlândia, localizado na Av. João Naves de Ávila, nº 2121, bloco A, sala 224, campus Santa Mônica – Uberlândia/MG, 38408-100; pelo telefone (34) 3239-4131; ou pelo e-mail cep@propp.ufu.br. O CEP/UFU é um colegiado independente criado para defender os interesses dos(as) participantes das pesquisas em sua integridade e dignidade e para contribuir para o desenvolvimento da pesquisa dentro de padrões éticos conforme resoluções do Conselho Nacional de Saúde.</p>")
        .css("font-size", "1.3em")
        .print()
   ,
    newCanvas("botoes", 600, 50)  
        .add( 0, 0, newButton("back", "Voltar (3/4)")
            .css("font-size", "1.2em")
            .print()
        ) 
        .add( 200, 0, newButton("end", "Não Aceito")
            .css("font-size", "1.2em")
            .callback( jump("TestEnd") )
            .print()
        ) 
        .add( 400, 0, newButton("next", "ACEITO participar!")
            .css("font-size", "1.2em")
            .print()
        ) 
        .center()
        .print()
    ,
    newSelector("selecionaBotao") //seletor para escolher um botão
        .add(getButton("back"), getButton("end"), getButton("next"))
        .wait()
        .log()
    ,
    getSelector("selecionaBotao").test.selected()
        .and( getSelector("selecionaBotao").test.selected(getButton("back")).success(jump("TCLE3")) )
        .and( getSelector("selecionaBotao").test.selected(getButton("end")).success(jump("ExpCancel")) )
        .and( getSelector("selecionaBotao").test.selected(getButton("next")).success(jump("Profile")) )
);

newTrial("Profile",
    newText("<p>Obrigada por confirmar sua participação! Agora precisamos que você nos dê algumas informações para confirmarmos o seu perfil.</p>")
        .css("font-size", "1.4em")
        .center() //pq não está ficando centralizado?
        .print()
    ,
    newText("<p>Idade:</p>")
    .css("font-size", "1.3em")
    .print()
    , 
    newTextInput("Idade")
        .css("width", "50px")
        .css("font-size", "1.3em")
        .print()
    ,
    newText("<p>Sexo:</p>")
    .css("font-size", "1.3em")
    .print()
    ,
    newDropDown("Sexo", "Selecione")
        .css("font-size", "1.2em")
        .add("Feminino", "Masculino", "Prefiro não responder")
        .print()
    ,
    newText("<p>Você é surdo ou ouvinte?</p>")
    .css("font-size", "1.3em")
    .print()
    ,
    newDropDown("Audicao", "Selecione")
        .css("font-size", "1.2em")
        .add("Surdo", "Ouvinte")
        .print()
    ,
    newText("<p>Nacionalidade:</p>")
    .css("font-size", "1.3em")
    .print()
    ,
    newDropDown("Nacionalidade", "Selecione")
        .css("font-size", "1.2em")
        .add("Brasileiro", "Estrangeiro")
        .print()
    ,
    newText("<p>Qual é a sua primeira língua?</p>")
    .css("font-size", "1.3em")
    .print()
    ,
    newDropDown("L1", "Selecione")
        .css("font-size", "1.2em")
        .add("Libras", "Português", "Outra")
        .print()
    ,
    newText("<p>Escolaridade:</p>")
    .css("font-size", "1.3em")
    .print()
    ,
    newDropDown("Escolaridade", "Selecione")
        .css("font-size", "1.2em")
        .add("Ensino Fundamental incompleto", "Ensino Fundamental completo",
             "Ensino Médio incompleto", "Ensino Médio completo",
             "Ensino Superior incompleto", "Ensino Superior completo")
        .print()
    ,
    newButton("Continuar")
        .css("font-size", "1.2em")
        .print()
        .wait(
            getTextInput("Idade").testNot.text("")
                .and(getDropDown("Sexo").test.selected())
                .and(getDropDown("Audicao").test.selected())
                .and(getDropDown("Nacionalidade").test.selected())
                .and(getDropDown("L1").test.selected())
                .and(getDropDown("Escolaridade").test.selected())
                .failure(newText("<p style='color:red;'>Por favor, preencha todos os campos.</p>").print())
        )
    ,
    newVar("Idade").global().set(getTextInput("Idade")),
    newVar("Sexo").global().set(getDropDown("Sexo")),
    newVar("Audicao").global().set(getDropDown("Audicao")),
    newVar("Nacionalidade").global().set(getDropDown("Nacionalidade")),
    newVar("L1").global().set(getDropDown("L1")),
    newVar("Escolaridade").global().set(getDropDown("Escolaridade"))
)
.log("Idade", getVar("Idade"))
.log("Sexo", getVar("Sexo"))
.log("Audicao", getVar("Audicao"))
.log("Nacionalidade", getVar("Nacionalidade"))
.log("L1", getVar("L1"))
.log("Escolaridade", getVar("Escolaridade"));

newTrial("Instructions1",
    newText("<p>Esse experimento consiste em ler sentenças palavra por palavra, apertando um botão para ler a próxima parte. </p>")
    .css("text-align", "center")
    .css("font-size", "1.3em")
    .print()
    ,
    newText("<p>Pedimos para que esteja em um lugar com poucas distrações e que leia o mais natural possível.</p>")
    .css("text-align", "center")
    .css("font-size", "1.3em")
    .print()
    ,
    newText("<p>Use a tecla ESPAÇO no seu teclado para ler cada trecho.</p>")
    .css("text-align", "center")
    .css("font-size", "1.3em")
    .print()
    ,
    newImage("tecla", "tecla_espaco.png")
    .size(600, 210)
    .print()
    .center()
    ,
    newButton("Próximo")
    .print()
    .center()
    .css("font-size", "1.2em")
    .wait()
);

newTrial("Instructions2",
    newText("<p>A cada sentença lida, você responderá à uma pergunta de “sim” ou “não” sobre o que foi lido ao apertar botões como os da imagem a seguir:</p>")
        .css("font-size", "1.3em")
        .center()
        .print()
        ,
    newImage("tecla2", "sim_nao.png")
    .size(500, 125)
    .print()
    .center()
    ,
    newButton("Próximo")
    .print()
    .center()
    .css("font-size", "1.2em")
    .wait()
);

newTrial("Instructions3",
    newText("<p>Antes de começarmos, você fará um teste para se costumar com a tarefa.</p>")
    .css("text-align", "center")
    .css("font-size", "1.3em")
    .print()
    ,
    newText("<p>Clique em “INICIAR TESTE” para começar. </p>")
    .css("text-align", "center")
    .css("font-size", "1.3em")
    .print()
    ,
    newButton("Iniciar Teste")
    .print()
    .center()
    .css("font-size", "1.2em")
    .wait()
);
newTrial("Test",
    newText("<p><strong>Treinamento</strong></p>")
        .css("font-size", "1.3em")
        .center()
        .print()
    ,
    newText("<p>Nesta etapa, você fará um teste para se familiarizar com a tarefa.</p>")
        .css("font-size", "1.2em")
        .css("text-align", "center")
        .print()
    ,
    newText("<p>Pressione a tecla <strong>ESPAÇO</strong> para avançar na leitura das frases.</p>")
        .css("font-size", "1.3em")
        .css("text-align", "center")
        .print()
    ,
    newText("Depois de ler a frase, responda à pergunta de compreensão clicando em <strong>Sim</strong> ou <strong>Não</strong>.</p>")
        .css("font-size", "1.3em")
        .css("text-align", "center")
        .print()
    ,
    newButton("Começar o Teste")
        .css("font-size", "1.2em")
        .center()
        .print()
        .wait()
);

//Primeira frase de teste
newTrial("Test1",
    newText("<p><strong>Leia a frase abaixo:</strong></p>")
        .css("font-size", "1.3em")
        .center()
        .print()
    ,
    newController("DashedSentence", {s: "O_galo cantou em cima do muro ao nascer do sol."})
        .css("font-size", "1.3em")
        .center()
        .print()
        .log()
        .wait()
        .remove()
    ,
    newText("<p>O galo cantou ao anoitecer?</p>")
        .css("font-size", "1.3em")
        .center()
        .print()
    ,
    newCanvas("botoes", 400, 80) 
        .add( 50, 0, newButton("Sim")
            .css("font-size", "1.2em")
            .css("background-color", "#4CAF50") // Verde
            .css("color", "white")
            .css("padding", "10px 20px")
            .css("border", "none")
            .css("border-radius", "5px")
            .css("cursor", "pointer")
            .print()
        ) 
        .add( 300, 0, newButton("Não")
            .css("font-size", "1.2em")
            .css("background-color", "#F44336") // Vermelho
            .css("color", "white")
            .css("padding", "10px 20px")
            .css("border", "none")
            .css("border-radius", "5px")
            .css("cursor", "pointer")
            .print()
        ) 
        .center()
        .print()
    ,
    newSelector("Resposta1")
        .add(getButton("Sim"), getButton("Não"))
        .wait()
        .log()
);

// Segunda frase de teste
newTrial("Test2",
    newText("<p><strong>Leia a frase abaixo:</strong></p>")
        .css("font-size", "1.3em")
        .center()
        .print()
    ,
    newController("DashedSentence", {s: "Flávia e suas amigas estudaram juntas durante a tarde."})
        .css("font-size", "1.3em")
        .center()
        .print()
        .log()
        .wait()
        .remove()
    ,
    newText("<p>Flávia estudou sozinha?</p>")
        .css("font-size", "1.3em")
        .center()
        .print()
   ,
    newCanvas("botoes", 450, 80) 
        .add( 100, 0, newButton("Sim")
            .css("font-size", "1.2em")
            .css("background-color", "#4CAF50") // Verde
            .css("color", "white")
            .css("padding", "10px 20px")
            .css("border", "none")
            .css("border-radius", "5px")
            .css("cursor", "pointer")
            .print()
        ) 
        .add( 300, 0, newButton("Não")
            .css("font-size", "1.2em")
            .css("background-color", "#F44336") // Vermelho
            .css("color", "white")
            .css("padding", "10px 20px")
            .css("border", "none")
            .css("border-radius", "5px")
            .css("cursor", "pointer")
            .print()
        ) 
        .center()
        .print()
    ,
    newSelector("Resposta2")
        .add(getButton("Sim"), getButton("Não"))
        .wait()
        .log()
);
// Tela de Transição
newTrial("TestEnd",
    newText("<p><strong>Ótimo! Agora você pode iniciar o experimento.</strong></p>")
        .css("font-size", "1.3em")
        .center()
        .print()
    ,
    newButton("Iniciar Experimento")
        .css("font-size", "1.2em")
        .center()
        .print()
        .wait()
);

Template("Exp_Itens_grupos_teste.csv", 
variable => newTrial("experimental",
    newController("DashedSentence", {s: variable.Sentence})
        .print()
        .css("font-size", "1.3em")
        .log()
        .wait()
        .remove()
    ,
    newText("Pergunta", variable.Question)
        .css("font-size", "1.3em")
        .css("text-align", "center")
        .css("margin-bottom","1.3em")
        .log()
        .center()
        .print()
    ,
newCanvas("botoes", 400, 80) 
        .add( 50, 0, newButton("Sim")
            .css("font-size", "1.2em")
            .css("background-color", "#4CAF50") // Verde
            .css("color", "white")
            .css("padding", "10px 20px")
            .css("border", "none")
            .css("border-radius", "5px")
            .css("cursor", "pointer")
            .print()
        ) 
        .add( 300, 0, newButton("Não")
            .css("font-size", "1.2em")
            .css("background-color", "#F44336") // Vermelho
            .css("color", "white")
            .css("padding", "10px 20px")
            .css("border", "none")
            .css("border-radius", "5px")
            .css("cursor", "pointer")
            .print()
        ) 
        .center()
        .print()
    ,
    newSelector("Resp")
        .add(getButton("Sim"), getButton("Não"))
        .wait()
        .log()
    ,
)
.log("Grupo", variable.Group) 
.log("Condicao", variable.Item_condition)
); 
SendResults()
//Sequence("Start", "TCLE1", "TCLE2", "TCLE3", "TCLE4", "Profile", "Instructions1", "Instructions2", "Instructions3", "Test", "Test1", "Test2", "TestEnd", randomize("experimental"), SendResults(), "WaitForResults", "Final");
newTrial("WaitForResults",
    newText("<p>Por favor, aguarde enquanto enviamos os resultados para o servidor.</p>")
        .css("font-size", "1.3em")
        .center()
        .print()
    ,
    newTimer(3000)
        .start()
        .wait()
    ,
    clear()
);

newTrial("Final",
    newText("<p>Obrigada por participar do nosso experimento!</p>")
        .css("font-size", "1.3em")
        .center()
        .print()
    ,
    newText("<p>Seus resultados foram enviados com sucesso!</p>")
        .css("font-size", "1.3em")
        .center()
        .print()
    ,
    newText("<p>Se desejar, você pode finalizar a participação ou cancelar a participação.</p>")
        .css("font-size", "1.3em")
        .center()
        .print()
    ,
    newCanvas("botoes", 400, 50)  
        .add( 0, 0, newButton("cancelExp", "Cancelar Participação")
            .css("font-size", "1.2em")
            .callback( jump("ExpCancel") )
            .print()
        ) 
        .add( 200, 0, newButton("confirm", "Manter participação e finalizar")
            .css("font-size", "1.2em")
            .callback( end() )
            .print()
        ) 
        .center()
        .print()
    ,
    newSelector("selecionaBotao") //seletor para escolher um botão
        .add(getButton("cancelExp"), getButton("confirm"))
        .wait()
        .log()
);

newTrial("ExpCancel",
    newText("<p><strong>Obrigada, o teste foi Cancelado.</strong></p>")
        .css("font-size", "1.3em")
        .center()
        .print()
    ,
    newButton("Finalizar")
        .css("font-size", "1.2em")
        .center()
        .print()
        .wait(end())
);
