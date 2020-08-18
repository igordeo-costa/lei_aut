var shuffleSequence = seq(
    sepWith("sep",
    rshuffle(startsWith("e."),
    startsWith("D")))
    );

var progressBarText = "Progresso";

var sendingResultsMessage = "Estamos salvando suas respostas. Por favor, não feche a janela ainda.";

var completionMessage = "Pronto! Acabamos! Muito obrigado por sua participação!";

var defaults = [

    "DashedSentence", {
        mode: "self-paced reading"
    },

	// Comando para parte repetitiva das questões a ser aplicada em todos os trials:
    "Question", {
        as:["Apenas um(a)", "Vários(as)", "Nenhum(a)"],
        randomOrder: true,
        showNumbers: false,
    },
    
    ];

var items = [
    
    // Mensagem mostrada entre os itens
    ["sep", "Separator",{
        transfer: "keypress",
        normalMessage: "Aperte qualquer tecla para a próxima sentença."
    }
    ],
    
    // Itens experimentais (cada item tem 4 versões):
    
    // Codificação:
    // e. (de sentenças experimentais);
    // Indefinido primeiro (Ind_); Ambígua (A_); Anáfora Singular (SG);
    // Universal primeiro (Uni_); Ambígua (A_); Anáfora Singular (SG);
    // Indefinido primeiro (Ind_); Ambígua (A_); Anáfora Plural (PL);
    // Universal primeiro (Uni_); Ambígua (A_); Anáfora Plural (PL);

    //Item 1
    [["e.Ind_A_SG", 1], "DashedSentence",
    {s: "A vendedora mostrou uma pulseira para todo comprador de joias, \n mas a peça não era muito bonita."},
    "Question", {
        q: "Quantas peças havia?"}
    ],

    [["e.Uni_A_SG", 1], "DashedSentence",
    {s: "A vendedora mostrou toda pulseira de ouro para um comprador, \n mas o moço não era muito decidido."},
    "Question", {
        q: "Quantos compradores havia?"}
    ],
    
    // Item 2
    [["e.Ind_A_SG", 2], "DashedSentence",
    {s: "A fotógrafa mostrou uma foto para todo crítico de arte, \n mas a obra não era muito inovadora."},
    "Question", {
        q: "Quantas obras havia?"}
    ],

    [["e.Uni_A_SG", 2], "DashedSentence",
    {s: "A fotógrafa mostrou toda foto de paisagem para um crítico, \n mas o homem não era muito receptivo."},
    "Question", {
        q: "Quantos homens havia?"}
    ],
  
    // Itens distratores
    
    ["D_1", "DashedSentence",
    {s: "Esse aqui é um item distrator."},
    "Question", {
        q: "Quantos itens distratores há aqui?"
    }
    ],
    
    ["D_2", "DashedSentence",
    {s: "Esse aqui é outro item distrator."},
    "Question", {
        q: "Quantos itens experimentais há aqui?"
    }
    ]
    
    ];