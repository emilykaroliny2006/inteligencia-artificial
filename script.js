const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios híper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é asustador!",
                afirmação: "No início ficou com medo do que essa tecnologia pode fazer."
            },
        {
                texto: "Isso é maravilhoo!",
                afirmação: "Quis saber como uar o IA no eu dia a dia."
        }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobr esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Ultiliza uma ferramenta de busca na internet que ultilza IA para que ela ajude a encontrar informaçõe relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmação: "Conseguiu ultilizar o IA para buscar informações úteis."
            },
        {
            texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
            afirmação: "Sentiu mais facilidade em ultilizar seus próprio recursos para escrever seu trabalho."
        }
    ]
},
{
    enunciado: "Após a elaborção do trabalho escrito, a professora realizou um debate entre a turma para entender como oi realizada a pesquisa a escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
    alternativas: [
        {
            texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
            afirmação: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
        },
        {
            texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
            afirmação: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de ulilização IA de forma ética."
        }
    ]
},
{
    enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    alternativas: [
        {
            texto: "Criar uma imagem ultilizando uma plataforma de design comoo Paint.",
            afirmação: "Notou também que muitas pessoas não sabem ainda ultilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design ultilizando ferramentas de pintura digital para iniciantes."
        },
        {
            texto: "Criar uma imagem ultilizando um gerador de imagem de IA.",
            afirmação: "Acelerou o processo de criação de trabalhos ultilizando geradores de imagem e agora consegue ensinar pessoas que sentem diiculdades em desenhar manualmente como ultilizar também!"
        }
    ]
},
{
    enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    alternativas?: [
        {
            texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema ultilizar o texto inteiro.",
            afirmação: "Infelizmente passou a ultilizar a IA para fazer todas suas tarefas e agora suas tarefas e agora se sente depende da IA para tudo."
        },
        {
            texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trebalho e contribuir com as perspectivas pessoais é essencial.",
            afirmação: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxilio e não como resultado final."
        }
    ]
},
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
}
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = 