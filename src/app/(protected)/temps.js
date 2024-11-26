import React, { useState } from 'react';
import { Text, View, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const data = [
  { id: '1', title: 'Temp 1', image: 'https://m.media-amazon.com/images/S/pv-target-images/26104940db2aab9b9bbf2c36f1358ad2df0175fcf426f079fc74b94cd638fa68.jpg', extraText: 'A primeira temporada de Supernatural estreou em 13 de setembro de 2005 e terminou em 4 de maio de 2006, com 22 episódios. A série segue os irmãos Sam e Dean Winchester enquanto procuram por seu pai, John, que está caçando o demônio que matou a mãe deles e a namorada de Sam. Durante suas viagens, eles usam o diário de seu pai para ajudá-los a continuar o negócio da família—salvar pessoas e caçar criaturas sobrenaturais.' },
  { id: '2', title: 'Temp 2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCnr6tbxgow8csVMQeMUhOsqmgY2IOtJZlA&s', extraText: 'IA segunda temporada de Supernatural estreou em 28 de setembro de 2006 na emissora The CW, e terminou em 17 de maio de 2007, sendo composta por 22 episódios. A temporada segue os irmãos Sam e Dean Winchester enquanto caçam Azazel, o demônio responsável pelas mortes de seus pais, Mary e John. Eles tentam descobrir o plano do demônio para Sam e outras crianças psíquicas—jovens adultos que foram visitados por Azazel quando bebês e ganharam habilidades, e cujas mães também morreram em um incêndio. Durante suas viagens, eles usam o diário de seu pai para ajudá-los a continuar o negócio da família—salvar pessoas e caçar criaturas sobrenaturais' },
  { id: '3', title: 'Temp 3', image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/e/e1/Supernatural_Season_3_poster.jpg/230px-Supernatural_Season_3_poster.jpg', extraText: 'A terceira temporada de Supernatural estreou em 4 de outubro de 2007 e terminou em 15 de maio de 2008, com 16 episódios. Originalmente, 22 episódios foram encomendados para a terceira temporada, assim como nas temporadas anteriores, mas a produção foi prejudicada pela Greve dos roteiristas dos Estados Unidos de 2007–2008, sendo paralisada após 12 episódios. Então, a temporada foi encurtada para 16 episódios.Os irmãos Sam e Dean Winchester rastreiam os demônios que foram soltos do inferno. Eles se aliam a um demônio chamado Ruby, que afirma conhecer uma maneira de libertar Dean de seu pacto demoníaco — ele vendeu sua alma a um demônio e ganhou apenas um ano de vida em troca da ressurreição de Sam — e quer protegê-los da nova líder dos demônios, Lilith. À medida que a morte de Dean se aproxima, seus esforços para continuar vivo ainda são prejudicados por Bela Talbot, uma ladra profissional de itens secretos que muitas vezes está em desacordo com os Winchester. ' },
  { id: '4', title: 'Temp 4', image: 'https://upload.wikimedia.org/wikipedia/pt/2/2c/Supernatural-Quarta_Temporada_%28Blu-ray%29.jpg', extraText: 'A quarta temporada de Supernatural estreou no dia 18 de setembro de 2008 e terminou em 14 de maio de 2009, sendo composta por 22 episódios. Dean Winchester é resgatado do inferno e trazido de volta por um anjo chamado Castiel, um dos vários anjos que aparecem ao longo da temporada. O resto da temporada segue os irmãos como eles trabalham com Castiel para parar Lilith, com o plano de quebrar os 66 selos, o que permitiria Lúcifer para andar livre novamente. O relacionamento de Sam e Dean fica tensa, quando Sam começa a se aliar com o Ruby sobre Dean. Ele também começa a dar em seu lado demoníaco por beber sangue de demônio para se tornar forte o suficiente para derrotar Lilith. Depois de rastrear e matar Lilith, Sam descobre que sua morte é na verdade o último selo e Ruby estava enganando todo o tempo. Dean chega tarde demais para detê-lo, mas mata Ruby, a porta da jaula de Lúcifer se abre sob eles.' },
  { id: '5', title: 'Temp 5', image: 'https://upload.wikimedia.org/wikipedia/pt/e/e6/Supernatural-Quinta_Temporada_%28Blu-ray%29.jpg', extraText: 'A Quinta Temporada, estreou no dia 10 de setembro de 2009 e teve seu último episódio exibido no dia 13 de maio de 2010.A Quinta temporada gira em torno da luta para deter Lúcifer e salvar o mundo do apocalipse. Ao longo da temporada, Sam e Dean Winchester batalham ambos contra anjos e demônios, para lutar contra seu destino de se tornar as cascas de Miguel e Lúcifer. Incapaz de derrotar Lúcifer, recolhem os anéis dos Quatro Cavaleiros do Apocalipse, que agem como as chaves para a jaula de Lúcifer. A ideia de destino versus liberdade de escolha desempenha um grande papel. Ao longo da temporada, Dean, Sam, Castiel e Bobby Singer tem uma crise como nas quais quase desistem. No entanto, através do outro apoio, continuam em frente até o final. Castiel se rebela contra o Céu para Dean nesta temporada. Também é notável que Bobby e Castiel tem uma amizade contínua durante esta temporada, enquanto Dean e Sam crescem ainda mais distantes. ' },
  { id: '6', title: 'Temp 6', image: 'https://upload.wikimedia.org/wikipedia/pt/4/46/Supernatural_%28sexta_temporada%29.jpg', extraText: 'A Sexta Temporada, estreou no dia 24 de Setembro de 2010. A temporada começa com Dean Winchester vivendo uma vida feliz com Lisa e Ben Braeden . Sam retorna ao mundo dos vivos e a formar equipe com Dean, que deixa sua vida nova para trás. Sam tem vindo a trabalhar com Samuel Campbell, a fim de caçar e capturar vivos monstros Alfas (primeiro do conjunto de genes). Castiel é pouco útil porque a guerra civil no Céu toma seu tempo. É descoberto que Samuel está seguindo as ordens de Crowley em troca do retorno de sua filha. Crowley quer usar os Alfas para localizar o Purgatório , em que há um conjunto vasto de almas que poderiam ser usados ​​para a alimentação. Crowley trouxe de volta Sam sem sua alma, e Dean implora a ajuda do Cavaleiro da Morte, a fim de recuperá-la. A morte coloca um muro na mente de Sam para que ele não se lembre do inferno. O velho Sam retorna sem nenhuma lembrança do ano passado. Acontece que Castiel fez um acordo com Crowley para cada um deles receber metade das almas do Purgatório. Dean não gosta da idéia e tenta parar o duo. Para parar os irmãos Winchester e Bobby Singer, Castiel derruba a barreira mental de Sam. Castiel trai Crowley, Crowley torna-se aliado de Rafael e executa o ritual de abrir as portas do Purgatório. Ele falha porque eles tinham sangue falso e Castiel aparece cheio de poder de ter feito o ritual certo. Ele destrói Raphael e deixa Crowley escapar. Quando o Winchesters tentam falar com Castiel, ele revela que ele não é mais um anjo, ele se tornou o novo Deus.' },
  { id: '7', title: 'Temp 7', image: 'https://upload.wikimedia.org/wikipedia/pt/4/43/Supernatural-Temporada7_%28Blu-ray%29.jpg', extraText: 'A sétima temporada de Supernatural estreou em 26 de abril de 2011. Exibida nas noites de sexta-feira às 21:00 h e estreou em 23 de setembro de 2011, e o final da temporada foi ao ar em 18 de maio de 2012. A sétima temporada encontra Dean e Sam se recuperando da perda de seu amigo. Lembranças violentas de Sam no inferno ameaça vence-lo. Enquanto isso, Dean luta sob o peso de um segredo que ameaça separá-los. Eles estão prestes a enfrentar um inimigo mais esperto e adaptável ​​do que qualquer outro que já lutoaram. O cenário em torno deles se torna cada vez mais traiçoeiro, as ferramentas que eles já sabiam não poderão mais confiar . Nossos heróis, vão encontrar-se totalmente desarmados, sem ninguém em quem confiar, somente um ao outro.' },
  { id: '8', title: 'Temp 8', image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5a/Supernatural_%28oitava_temporada%29-Capa.jpg/200px-Supernatural_%28oitava_temporada%29-Capa.jpg', extraText: ' oitava temporada de Supernatural estreou em 3 de outubro de 2012 e terminou em 15 de maio de 2013, exibindo 23 episódios. Um ano depois de ser arrastado para o Purgatório, Dean retorna à Terra sem Castiel, carregando dentro de seu corpo a alma de um vampiro chamado Benny. Os dois irmãos começam uma luta contra Crowley para encontrar a Placa dos Demônios e trancar os Portões do Inferno, prendendo assim todos os demônios no Inferno. Os irmãos usam Kevin Tran para ajudá-los a ler a placa e fazer isso. Castiel é trazido de volta por um anjo chamado Naomi, e toma posse da Placa dos Anjos. Enquanto Kevin trabalha na placa, Sam e Dean têm um encontro inesperado com seu avô paterno, Henry Winchester, que era membro dos Homens de Letras, uma organização dedicada a reunir conhecimento sobrenatural; seu desaparecimento em 1958 foi na verdade ele usando um feitiço de viagem no tempo para ir ao futuro e escapar de um ataque do demônio Abaddon. Henry é morto protegendo seus netos, mas ele fornece a eles acesso ao bunker dos Homens de Letras, um depósito para vários artefatos e livros sobrenaturais, que os Winchesters posteriormente adotam como um novo "lar". Kevin traduz três testes que devem ser concluídos para fechar os Portões do Inferno para sempre, mas embora Sam tenha concluído os dois primeiros, Dean termina os testes antes que o terceiro possa ser concluído, pois concluí-los mataria Sam. Infelizmente, Castiel é enganado pelo anjo Metatron para completar outra série de testes que teriam supostamente bloqueado todos os anjos no céu, mas na verdade baniu todos os anjos além de Metatron para a Terra, a temporada terminando com milhões de anjos caindo do céu e Castiel despido de sua graça.' },
  { id: '9', title: 'Temp 9', image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/98/Supernatural_%28nona_temporada%29-Capa.jpg/200px-Supernatural_%28nona_temporada%29-Capa.jpg', extraText: 'A nona temporada de Supernatural estreou em 8 de outubro de 2013 e terminou em 20 de maio de 2014, sendo composta por 23 episódios. A emocionante e aterrorizante jornada dos irmãos Winchester continua com a SUPERNATURAL entrando em sua nona temporada. Sam (Jared Padalecki ) e Dean (Jensen Ackles ) passaram suas vidas na estrada, lutando contra todo tipo de ameaça sobrenatural. Ao longo dos anos, depois de dezenas de aventuras sangrentas, eles têm enfrentado desde o demônio de olhos amarelos que matou sua mãe para vampiros, fantasmas, metamorfos, anjos e deuses caídos. Eles ainda ficaram cara a cara com Lúcifer e os Quatro Cavaleiros na prevenção do Apocalipse. Com a ajuda de aliados - tanto humana quanto sobrenatural - eles descobriram que cada ameaça que eles venciam abria uma nova porta para o mal entrar. Na 8ª temporada da série, sua expedição de caça sobrenatural levou-os diretamente em uma luta pelo poder secular envolvendo o Rei do Inferno, legiões de anjos guerreiros e uma série de julgamentos divinos para provar-se digno de selarem as portas do inferno para sempre. Com a ajuda de seu protetor, o anjo caído Castiel (Misha Collins), a busca da vida toda de Sam e Dean para livrar o mundo do mal toma tudo deles. Assim que o amanhecer chega após a sua luta sem fim e sacrifício para derrotar monstros do mundo, eles sabem que, ao anoitecer, algo de outro mundo - algo sobrenatural - vai agarrar seu caminho para fora das sombras, exigindo sua atenção.' },
  { id: '10', title: 'Temp 10', image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/6/64/Supernatural-Temporada_10-capa.jpg/200px-Supernatural-Temporada_10-capa.jpg', extraText: 'A 10ª temporada começa com a busca frenética de Sam por seu irmão, que desapareceu sem deixar vestígios. O caminho para a recuperação do Dean leva Sam por caminhos escuros, com consequências que irão abalar os meninos. Sem sua graça e com anjos desonestos ainda à solta, Cas enfrentará o relógio de sua própria mortalidade, como todas as novas ameaças surgem para empurrar mais uma vez todos os nossos heróis aos seus limites.' },
  { id: '11', title: 'Temp 11', image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/7/79/Supernatural_%28Temporada_11%29_poster.jpg/200px-Supernatural_%28Temporada_11%29_poster.jpg', extraText: 'A décima primeira temporada de Supernatural estreou no dia 07 de outubro de 2015 e terminou em 25 de maio de 2016, contando com 23 episódios. Os irmãos Winchester irão enfrentar o maior perigo de toda a sua vida. Escuridão (Amara) é libertada pela remoção da marca da caim no braço de Dean. É um entidade mais antiga que Deus, e que pretende queimar o mundo, tendo fortes ressentidos e mágoas de seu irmão Deus. Que até agora não deu as caras. Os Winchesters devem descobrir como combatê-la e enfrentam as consequências da marca removida, no planeta. Amara é super poderosa, e tenta aplicar o seu poder em toda a Terra' },
  { id: '12', title: 'Temp 12', image: 'https://upload.wikimedia.org/wikipedia/pt/5/58/Supernatural_%28temporada_12%29_-_Poster.jpg', extraText: 'A décima segunda temporada de Supernatural estreou em 13 de outubro de 2016 e terminou em 18 de maio de 2017, contando com 23 episódios.A  temporada retoma de onde parou, com Sam sequestrado pelo membro britânico dos Homens de Letras Toni Bevell; e Dean em choque ao ver sua mãe, Mary, que está morta há muito tempo. Castiel é forçado a fazer parceria com Crowley para procurar Lúcifer. À medida que Lúcifer começa a possuir pessoas mais poderosas e influentes para conseguir o que quer, os caçadores são forçados a enfrentar a morte de um dos seus. Enquanto tentam deter Lúcifer, os irmãos Winchester são acusados injustamente e presos por seu crime - levando Mary e Castiel a recorrer a uma fonte improvável para encontrá-los.' },
  { id: '13', title: 'Temp 13', image: 'https://upload.wikimedia.org/wikipedia/pt/9/9c/Supernatural_Temporada_13_Poster.jpg', extraText: 'A décima terceira temporada de Supernatural estreou no dia 12 de outubro de 2017 e foi concluída em 17 de maio de 2018. Desde que era pequeno, Sam Winchester (Jared Padalecki) tentava escapar do próprio passsado. Após a misteriosa morte de Mary (Samantha Smith), o pai de Sam passou a procurar vingança contra as forças do mal que mataram a esposa, destruindo qualquer ser maligno que cruze o seu caminho. Ao contrário de Sam, Dean (Jensen Ackles), irmão mais velho, sempre quis seguir os passos do pai. Sam está determinado a se livrar do "negócio da família", mas sua vida está prestes a tomar os rumos que ele não desejava, quando ele fica sem escolhas a não ser unir-se ao irmão.' },
  { id: '14', title: 'Temp 14', image: 'https://upload.wikimedia.org/wikipedia/pt/c/c4/Supernatural_temporada_14_poster.jpg', extraText: 'A décima quarta temporada de Supernatural estreou em 11 de outubro de 2018 e concluída em 25 de abril de 2019, contando com 20 episódios. Há 20 anos, Sam e Dean Winchester perderam sua mãe em um trágico e misterioso acidente, no qual as forças sobrenaturais — muito obscuras — estiveram envolvidas. Por esta razão, seu pai decidiu ensiná-los a lidar com a vida sobrenatural, ensinando-lhes técnicas de defesa contra as forças do mal; chegando até a ensinar a maneira ideal para matar os diferentes tipos de demônios. Agora, os irmãos Winchester percorrem os Estados Unidos em seu velho Chevy travando uma verdadeira batalha contra a obscuridade e a maldade. Objetos amaldiçoados, vampiros, bruxas e entidades maléficas — incluindo um Papai Noel não tão bonzinho — são só alguns dos desafios que estes dois irmãos têm de superar.' },
  { id: '15', title: 'Temp 15', image: 'https://m.media-amazon.com/images/S/pv-target-images/da965f3ac7162bf10c0f8d99c7b33846fe7ca055e71ed0286732ecea974be565.jpg', extraText: 'A décima quinta e última temporada de Supernatural estreou em 10 de outubro de 2019 e inicialmente estava definida para terminar em maio de 2020, mas um hiato ocorreu após o episódio de 23 de março de 2020 devido a atrasos na produção causados pela pandemia de COVID-19 nos Estados Unidos. A jornada épica dos irmãos Winchester chega ao fim quando Supernatural entra em sua temporada final. Sam (Jared Padalecki) e Dean (Jensen Ackles) lutaram contra demônios e anjos, criaturas míticas e monstros, em uma busca aparentemente interminável para salvar o mundo. Mas na batalha final, eles enfrentam o próprio Deus (Rob Benedict), recusando-se a matar seu filho nefilim substituto, Jack (Alexander Calvert), e trazendo assim a decisão de Deus de acabar com essa realidade de uma vez por todas.' },
];

export default function List() {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedItem(selectedItem === item.id ? null : item.id)}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
      {selectedItem === item.id && (
        <View style={styles.extraBox}>
          <Text style={styles.extraText}>{item.extraText}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    padding: 20, 
    backgroundColor: "#2b2d42",
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#a4161a',
    borderRadius: 15,
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 50,
  },
  textContainer: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  extraBox: {
    marginTop: 10,
    backgroundColor: '#f0efeb',
    padding: 10,
    borderRadius: 10,
    width: '90%', 
    alignSelf: 'center',
  },
  extraText: {
    fontSize: 14,
    color: '#000',
  },
});
