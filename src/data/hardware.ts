export type HardwareCategory = 'placa-mae' | 'processador' | 'placa-video' | 'periferico' | 'armazenamento' | 'memoria' | 'rede' | 'comunicacao' | 'multimidia' | 'computador' | 'outros';

export interface HardwareItem {
  id: string;
  name: string;
  category: HardwareCategory;
  year: string;
  manufacturer: string;
  description: string;
  detailedDescription: string;
  technicalSpecs: string[];
  imageUrl: string;
  documentationUrl: string;
  historicalSignificance: string;
}

export const hardwareCollection: HardwareItem[] = [
  {
    id: '1',
    name: 'PLACA-MÃE ASUS 486',
    category: 'placa-mae',
    year: '1990-1995',
    manufacturer: 'ASUS',
    description: 'Placa-mãe projetada para computadores baseados no processador Intel 80486 (i486 ou 486), o principal circuito impresso de um PC da época.',
    detailedDescription: 'O coração de computadores pessoais (PCs) usados para escritório (processamento de texto, planilhas), multimídia (jogos, CD-ROMs) e programação. Sua versão "V2.7" sugere uma revisão posterior. O design otimiza a comunicação para o 486, que integrava cache L1 e FPU, e possuía slots de expansão ISA para periféricos.',
    technicalSpecs: [
      'Compatibilidade: Processador Intel 80486 (i486)',
      'Slots de Expansão: ISA (Industry Standard Architecture)',
      'Memória: Suporta módulos de memória RAM SIMM de 72 pinos',
      'Plataforma: Base para PCs de uso doméstico e corporativo'
    ],
    imageUrl: '/assets/hardware/PLACA-MÃE_ASUS_486.png',
    documentationUrl: '',
    historicalSignificance: 'Representou um salto de desempenho em relação à geração 386. Foi crucial para a democratização da tecnologia e a popularização da arquitetura x86 com multitarefa.'
  },  
  {
    id: '2',
    name: 'PLACA CONTROLADORA MULTI-I/O (MULTI-INPUT/OUTPUT) ISA',
    category: 'periferico',
    year: '1988-1995',
    manufacturer: 'GoldStar',
    description: 'Placa de expansão que fornecia múltiplas portas de entrada/saída (seriais, paralela, controladores de Floppy Disk e IDE) em sistemas mais antigos.',
    detailedDescription: 'Conectada a um slot ISA (Industry Standard Architecture), integrava em uma única placa portas Seriais (COM) para mouses e modems, Porta Paralela (LPT) para impressoras e controladores para unidades de disquete (FDD) e discos rígidos (HDD) IDE. O chip central é um UART (Universal Asynchronous Receiver/Transmitter).',
    technicalSpecs: [
      'Interface: ISA (Industry Standard Architecture)',
      'Portas Incluídas: Portas Seriais (COM), Porta Paralela (LPT)',
      'Controladores Integrados: Floppy Disk (FDD), IDE (Integrated Drive Electronics)',
      'Chip Principal: GoldStar GM16C450-2J-D (UART)'
    ],
    imageUrl: '/assets/hardware/PLACA_CONTROLADORA_ISA.png',
    documentationUrl: '',
    historicalSignificance: 'Essencial para a funcionalidade básica de PCs da época (286, 386, 486), antes que essas portas fossem integradas nas placas-mãe. Simplificou a configuração e a expansão dos PCs.'
  },
  {
    id: '3',
    name: 'PLACA DAUGHTERBOARD (PLACA FILHA) DE PORTA USB COM JACK DE ÁUDIO',
    category: 'periferico',
    year: '2007-2012',
    manufacturer: 'Não especificado',
    description: 'Pequena placa de circuito impresso com portas USB e conector de áudio (jack), típica de notebooks para facilitar a montagem e reparo.',
    detailedDescription: 'Usada exclusivamente em notebooks e laptops, ela se conecta à placa-mãe principal via cabo flexível. A inscrição "48.4WO06.021" é provável número de peça. Sua principal vantagem é a modularidade e manutenibilidade, permitindo a troca apenas da placa filha em caso de danos na porta.',
    technicalSpecs: [
      'Tipo: Daughterboard (Placa Filha)',
      'Uso: Notebooks e Laptops',
      'Conectividade: Porta USB Tipo-A, Jack de Áudio (para fone/microfone)',
      'Material: Placa de circuito impresso (PCB) com especificação UL 94V-0'
    ],
    imageUrl: '/assets/hardware/PLACA_DAUGHTERBOARD.png',
    documentationUrl: '',
    historicalSignificance: 'Avanço no design de notebooks que prioriza a modularidade e a manutenibilidade, reduzindo custos e tempo de reparo de portas danificadas.'
  },
  {
    id: '4',
    name: 'PLACA DE TELECOMUNICAÇÕES ANTIGAS (CIRCUITO IMPRESSO)',
    category: 'comunicacao',
    year: '1980-1995',
    manufacturer: 'Não especificado',
    description: 'Placa de expansão ou módulo interno de um sistema maior, provavelmente um equipamento de comunicação como um PABX ou uma central telefônica/rede de dados antiga.',
    detailedDescription: 'Projetada para gerenciar linhas telefônicas, ramais ou conexões de rede. O design com muitos chips DIP (Dual In-line Package), conectores para cabos planos e um transformador/indutor encapsulado sugere o processamento e a interface de sinais de telefonia e dados.',
    technicalSpecs: [
      'Uso: Sistemas PABX (Private Automatic Branch Exchange), Centrais Telefônicas',
      'Componentes: Chips DIP de lógica TTL/CMOS, Transformador/Indutor encapsulado',
      'Interface: Conectores para cabos planos (ribbon cables)'
    ],
    imageUrl: '/assets/hardware/PLACA_TELECOMUNICAÇÕES_ANTIGAS.png',
    documentationUrl: '',
    historicalSignificance: 'Fundamental para a comunicação interna e externa em empresas antes da popularização das redes IP. Representa a modularidade dos sistemas de comunicação e é a base para as tecnologias de comunicação modernas (VoIP).'
  },
  {
    id: '5',
    name: 'COOLER PARA PROCESSADOR DE COMPUTADOR (AMD)',
    category: 'processador',
    year: '2005-2015',
    manufacturer: 'AMD',
    description: 'Cooler "stock" (padrão) de processador AMD, composto por um dissipador de calor e uma ventoinha, essencial para manter a temperatura operacional do CPU.',
    detailedDescription: 'O cooler é montado diretamente sobre o CPU na placa-mãe (característico de sockets AMD como AM2, AM3, AM3+). Sua função é absorver e dissipar o calor gerado pelo processador, evitando superaquecimento e garantindo desempenho e estabilidade do sistema. Possui presilha de fixação azul e metálica e o logo da AMD na ventoinha.',
    technicalSpecs: [
      'Componentes: Dissipador de Calor (Heatsink) e Ventoinha (Fan)',
      'Uso: Processadores AMD Desktop',
      'Tipo: Cooler Box (Stock), solução padrão de resfriamento',
      'Fixação: Presilha de clipe (típica de Socket AM2/AM3/AM3+)'
    ],
    imageUrl: '/assets/hardware/COOLER_PROCESSADOR_COMPUTADOR.png',
    documentationUrl: '',
    historicalSignificance: 'É um componente de suma importância para a estabilidade e desempenho de PCs modernos. Sua inclusão como solução de fábrica simplificou a montagem de PCs para o consumidor médio.'
  },
  {
    id: '6',
    name: 'PLACA DE REDE ETHERNET PCI',
    category: 'rede',
    year: '1998-2005',
    manufacturer: 'GTS (FC-515LS)',
    description: 'Placa de expansão para slot PCI que permite a conexão do computador a uma rede local (LAN) via cabo Ethernet.',
    detailedDescription: 'Conhecida como NIC (Network Interface Card), é crucial para acesso à internet banda larga e redes locais. O chip "PRECOM PECL362P H0023" é um transceptor Ethernet. Era usada em PCs sem porta Ethernet integrada para conectividade 10/100 Mbps, oferecendo maior largura de banda que o padrão ISA anterior.',
    technicalSpecs: [
      'Interface: PCI (Peripheral Component Interconnect)',
      'Conexão: Ethernet RJ-45',
      'Velocidade: Provavelmente 10/100 Mbps (Fast Ethernet)',
      'Chip Principal: PRECOM PECL362P H0023 (Transceptor Ethernet)'
    ],
    imageUrl: '/assets/hardware/PLACA_ETHERNET_PCI.png',
    documentationUrl: '',
    historicalSignificance: 'Democratizou a conectividade em rede e o acesso à internet banda larga antes da integração do Ethernet nas placas-mãe. Solidificou o padrão Ethernet com fio.'
  },
  {
    id: '7',
    name: 'MEMÓRIA RAM DDR (DDR1 SDRAM)',
    category: 'memoria',
    year: '2002-2006',
    manufacturer: 'Symox / Titan',
    description: 'Módulo de memória RAM DDR SDRAM de 512 Megabytes (MB), predecessor da DDR2, usado como área de trabalho temporária de alta velocidade para a CPU.',
    detailedDescription: 'O módulo de 512MB DDR1 utilizava a tecnologia Double Data Rate (DDR), que transferia dados duas vezes por ciclo de clock, dobrando a largura de banda da memória em relação à SDRAM anterior. As inscrições "512MB DDRD-4SMHL-CL4" indicam sua capacidade e latência CAS (CL4).',
    technicalSpecs: [
      'Tipo: DDR1 SDRAM (Double Data Rate)',
      'Capacidade: 512 Megabytes (MB)',
      'Frequência: Variável, mas o tipo "DDR" indica maior velocidade que SDRAM',
      'Formato: DIMM (Dual In-line Memory Module) para Desktop',
      'Latência: CL4 (Column Access Strobe)'
    ],
    imageUrl: '/assets/hardware/MEMÓRIA_RAM_DDR.png',
    documentationUrl: '',
    historicalSignificance: 'Representou um avanço significativo, dobrando a taxa de transferência de dados e impulsionando o desempenho para sistemas com Pentium 4 e Athlon XP. Estabeleceu a base para todas as gerações DDR subsequentes.'
  },
  {
    id: '8',
    name: 'PLACA DE REDE ETHERNET PCI Intel PRO/100',
    category: 'rede',
    year: '1998-2005',
    manufacturer: 'Intel',
    description: 'Placa de interface de rede (NIC) PCI Fast Ethernet da Intel, operando a 100 Megabits por segundo (Mbps), reconhecida por sua confiabilidade.',
    detailedDescription: 'Utilizada em desktops para conexão a redes locais (LAN) e internet banda larga. O chip Intel PRO/100 é sinônimo de drivers estáveis e bom desempenho, sendo a escolha preferida para ambientes corporativos e usuários exigentes. Foi o padrão Fast Ethernet antes da popularização da Gigabit Ethernet.',
    technicalSpecs: [
      'Interface: PCI (Peripheral Component Interconnect)',
      'Velocidade: 100 Mbps (Fast Ethernet)',
      'Chipset: Intel PRO/100',
      'Conexão: Ethernet RJ-45 (não visível, mas inerente à função)'
    ],
    imageUrl: '/assets/hardware/PLACA_ETHERNET_PCI_INTEL_PRO100.png',
    documentationUrl: '',
    historicalSignificance: 'Crucial para popularizar a Fast Ethernet (100 Mbps) e a internet banda larga, oferecendo confiabilidade e desempenho que impulsionaram a adoção em massa de redes de dados.'
  },
  {
    id: '9',
    name: 'PLACA DE SOM PCI CREATIVE LAB SOUND BLASTER (MODELO CT4810)',
    category: 'multimidia',
    year: '1998-2003',
    manufacturer: 'Creative Labs',
    description: 'Placa de som PCI Sound Blaster, provavelmente da série Live!, usada para processar e gerar áudio de alta qualidade superior às soluções onboard da época.',
    detailedDescription: 'O modelo CT4810 oferecia áudio posicional 3D e efeitos sonoros avançados (como EAX - Environmental Audio Extensions), essenciais para jogos e multimídia da época. Possui conectores coloridos padrão para saída de linha, microfone e Line-in. Ao ter seu próprio processador de áudio, liberava a CPU principal para outras tarefas.',
    technicalSpecs: [
      'Interface: PCI (Peripheral Component Interconnect)',
      'Modelo: CT4810 (Sound Blaster Live! ou similar)',
      'Recursos: Áudio 3D, Suporte a Efeitos (EAX)',
      'Conectores: Saída de linha (verde), Microfone (rosa), Line-in (azul) e outros'
    ],
    imageUrl: '/assets/hardware/PLACA_DE_SOM_PCI_CREATIVE_LAB_SOUND_BLASTER.png',
    documentationUrl: '',
    historicalSignificance: 'Revolucionou o áudio em PCs, transformando o computador em uma plataforma multimídia e de jogos viável. Foi pioneira no áudio 3D imersivo para o mercado de consumo.'
  },
  {
    id: '10',
    name: 'PLACA DE VÍDEO AGP MATROX G450 (DUAL HEAD)',
    category: 'placa-video',
    year: '1999-2004',
    manufacturer: 'Matrox',
    description: 'Placa de vídeo AGP (Accelerated Graphics Port) conhecida por sua excelente qualidade de imagem 2D e o recurso "Dual Head" (duas saídas VGA) para múltiplos monitores.',
    detailedDescription: 'A G450 era uma placa de vídeo de desempenho médio com foco em qualidade de imagem e produtividade. O dissipador de calor passivo (sem ventoinha) sobre o chip gráfico é comum. Seu recurso "Dual Head" permitia a conexão de dois monitores VGA simultaneamente, impulsionando a produtividade em ambientes profissionais e corporativos.',
    technicalSpecs: [
      'Interface: AGP (Accelerated Graphics Port)',
      'GPU: Matrox G450 (inferido)',
      'Recursos: Suporte a Dual Head (dois monitores simultâneos)',
      'Saídas de Vídeo: 2x VGA (azuis)',
      'Resfriamento: Passivo (Dissipador de calor)'
    ],
    imageUrl: '/assets/hardware/PLACA_DE_VÍDEO_AGP_MATROX_G450.png',
    documentationUrl: '',
    historicalSignificance: 'Pioneira na popularização do uso de múltiplos monitores (Dual Head) para aumentar a produtividade. Foi referência em qualidade de imagem 2D e fidelidade de cores para design gráfico e CAD.'
  },
  {
    id: '11',
    name: 'MÓDULO DE MEMÓRIA RAM SIMM DE 72 PINOS',
    category: 'memoria',
    year: '1994-1998',
    manufacturer: 'Mitsubishi / Master Informática',
    description: 'Módulo de memória RAM SIMM (Single In-line Memory Module) de 72 pinos, antecessor dos módulos DIMM, usado em sistemas das eras 486 e Pentium.',
    detailedDescription: 'Poderia ser do tipo FPM (Fast Page Mode) ou EDO (Extended Data Out) DRAM, com capacidade inferida de 8MB. O SIMM de 72 pinos (32 bits de dados) foi um avanço sobre o SIMM de 30 pinos, pois podia ser instalado individualmente ou em pares, simplificando a instalação e permitindo maior capacidade de memória no sistema.',
    technicalSpecs: [
      'Tipo: SIMM (Single In-line Memory Module)',
      'Pinos: 72 pinos',
      'Tecnologia: FPM ou EDO DRAM (Extended Data Out)',
      'Capacidade: 8MB (inferida)',
      'Uso: PCs com processadores Intel 486 e primeiros Pentium'
    ],
    imageUrl: '/assets/hardware/MÓDULO_DE_MEMÓRIA_RAM_SIMM_DE_72_PINOS.png',
    documentationUrl: '',
    historicalSignificance: 'Representou um aumento crucial na capacidade e largura de banda da memória, sendo vital para o suporte a sistemas operacionais mais complexos como o Windows 95.'
  },
  {
    id: '12',
    name: 'PLACA-MÃE ASUS A7V8X-MX',
    category: 'placa-mae',
    year: '2003-2005',
    manufacturer: 'ASUS',
    description: 'Placa-mãe Socket 462 (Socket A) baseada no chipset VIA KM400/KM400A, suportando processadores AMD Athlon XP e Duron.',
    detailedDescription: 'Placa-mãe de nível de entrada a médio desempenho para a época. Apresentava maior integração de recursos (áudio, vídeo onboard, Ethernet, USB/SATA) em comparação com gerações mais antigas. Incluía slots DDR DIMM para memória DDR1, slots PCI e um slot AGP para placas de vídeo dedicadas, oferecendo uma plataforma de bom custo-benefício.',
    technicalSpecs: [
      'Socket: Socket 462 (Socket A)',
      'Chipset: VIA KM400/KM400A + VIA VT8235/VT8237 (inferido)',
      'Memória: 2x Slots DDR DIMM (DDR1)',
      'Slots de Expansão: PCI, AGP, CNR',
      'Processadores Suportados: AMD Athlon XP e Duron'
    ],
    imageUrl: '/assets/hardware/PLACA-MÃE_ASUS_A7V8X-M.png',
    documentationUrl: '',
    historicalSignificance: 'Plataforma-chave para os processadores AMD Athlon XP, que eram fortes concorrentes do Intel Pentium 4. Demonstra o crescente nível de integração de funcionalidades diretamente nas placas-mãe.'
  },
  {
    id: '13',
    name: 'PLACA DE EXPANSÃO USB 2.0 PCI',
    category: 'periferico',
    year: '2001-2007',
    manufacturer: 'VIA Technologies',
    description: 'Placa de expansão PCI que adiciona portas USB 2.0 a um computador, permitindo a conexão de periféricos de alta velocidade (480 Mbps).',
    detailedDescription: 'Possui o controlador host USB 2.0 VIA VT6212L. Oferecia múltiplas portas USB Tipo-A na parte externa e, possivelmente, portas internas. Foi muito popular para atualizar PCs mais antigos que só tinham portas USB 1.1 (mais lentas) ou para adicionar mais portas USB, estendendo a vida útil dos sistemas.',
    technicalSpecs: [
      'Interface: PCI (Peripheral Component Interconnect)',
      'Padrão: USB 2.0 (480 Mbps)',
      'Chipset: VIA VT6212L (Controlador Host USB 2.0)',
      'Portas: Múltiplas portas USB Tipo-A'
    ],
    imageUrl: '/assets/hardware/PLACA_DE_EXPANSÃO_USB_2.0_PCI.png',
    documentationUrl: '',
    historicalSignificance: 'Crucial para a popularização do padrão USB 2.0. Permitiu que milhões de PCs fossem atualizados para suportar periféricos USB 2.0 mais rápidos, consolidando o USB como a interface universal de conectividade.'
  },
  {
    id: '14',
    name: 'MÓDULO M.2 mSATA SSD',
    category: 'armazenamento',
    year: '2010-2018',
    manufacturer: 'Não especificado',
    description: 'Dispositivo de armazenamento de estado sólido (SSD) miniaturizado, que utiliza o formato M.2 ou mSATA, com invólucro metálico, conhecido por sua alta velocidade e resistência.',
    detailedDescription: 'SSDs armazenam dados em memória flash (NAND flash), eliminando o gargalo mecânico dos HDDs e oferecendo tempos de boot e carregamento de aplicativos dramaticamente reduzidos. O formato compacto é ideal para notebooks finos (ultrabooks), mini PCs e tablets, refletindo a tendência de miniaturização do hardware.',
    technicalSpecs: [
      'Tipo: SSD (Solid State Drive) - Armazenamento não volátil',
      'Tecnologia: NAND Flash (Memória Flash)',
      'Fator de Forma: M.2 ou mSATA (inferido)',
      'Interface: SATA ou PCIe (dependendo do conector)',
      'Uso: Notebooks, Ultrabooks, Mini PCs'
    ],
    imageUrl: '/assets/hardware/MÓDULO_M.2_mSATA_SSD.png',
    documentationUrl: '',
    historicalSignificance: 'Revolucionou o desempenho dos computadores e permitiu o desenvolvimento de dispositivos mais finos e leves, como os ultrabooks. É um símbolo da transição do armazenamento mecânico para o de estado sólido.'
  },
  {
    id: '15',
    name: 'PLACA DE VÍDEO ISA TRIDENT TVGA9000i',
    category: 'placa-video',
    year: '1991-1995',
    manufacturer: 'Trident Microsystems',
    description: 'Placa de vídeo ISA baseada no chipset Trident TVGA9000i, um dos primeiros chipsets gráficos a suportar o padrão Super VGA (SVGA).',
    detailedDescription: 'Projetada para ser instalada em um slot ISA. Era uma solução gráfica de baixo custo e alta compatibilidade para PCs da era 386 e 486. Oferecia resoluções mais altas (800x600 ou 1024x768) e mais cores do que o VGA padrão. O chip TVGA9000i frequentemente integrava o RAMDAC.',
    technicalSpecs: [
      'Interface: ISA (Industry Standard Architecture)',
      'Chipset: Trident TVGA9000i',
      'Padrão Gráfico: Super VGA (SVGA)',
      'Memória: Típica 256KB - 512KB VRAM',
      'Saída de Vídeo: VGA (DB-15)'
    ],
    imageUrl: '/assets/hardware/PLACA_DE_VÍDEO_ISA_TRIDENT_TVGA9000i.png',
    documentationUrl: '',
    historicalSignificance: 'Fundamental para a popularização do Super VGA e a adoção em massa de interfaces gráficas de usuário (GUIs) como o Windows 3.1 e Windows 95, tornando a computação mais visual.'
  },
  {
    id: '16',
    name: 'PLACA DE VÍDEO XFX RADEON HD 7850',
    category: 'placa-video',
    year: '2012-2014',
    manufacturer: 'XFX (AMD)',
    description: 'Placa de vídeo de alto desempenho XFX Radeon HD 7850, baseada na arquitetura Graphics Core Next (GCN) da AMD, focada em jogos Full HD (1080p).',
    detailedDescription: 'Conecta-se a um slot PCI Express (PCIe). O modelo usava a tecnologia de resfriamento proprietária "GHOST THERMAL TECHNOLOGY". Foi uma placa de excelente custo-benefício para a época, oferecendo alto desempenho para jogos e multimídia e suportando plenamente a API DirectX 11. Representou a primeira geração da arquitetura GCN da AMD.',
    technicalSpecs: [
      'Interface: PCI Express (PCIe)',
      'GPU: AMD Radeon HD 7850',
      'Arquitetura: Graphics Core Next (GCN) 1ª Geração',
      'API Suportada: DirectX 11',
      'Resfriamento: XFX Ghost Thermal Technology (Ventoinha única/dupla)',
      'Uso Principal: Gaming em 1080p'
    ],
    imageUrl: '/assets/hardware/PLACA_DE_VÍDEO_XFX_RADEON_HD_7850.png',
    documentationUrl: '',
    historicalSignificance: 'Marcou o início da moderna arquitetura de GPUs da AMD (GCN) e foi uma placa essencial na consolidação do Full HD (1080p) como o padrão de jogos de consumo.'
  },
  {
    id: '17',
    name: 'MICROFONE DE MESA OU DE CONFERÊNCIA',
    category: 'periferico',
    year: '1990-2010',
    manufacturer: 'Não especificado',
    description: 'Microfone de mesa com haste flexível ("gooseneck") e base com botão de liga/desliga, otimizado para a captação clara da voz em ambientes de conferência.',
    detailedDescription: 'O design "gooseneck" oferece ajuste ergonômico, permitindo que o orador mantenha as mãos livres. É geralmente um microfone direcional (cardioide) para isolar a voz e reduzir ruídos de fundo. Foi e ainda é comum em salas de reunião, pódios e sistemas de anúncio.',
    technicalSpecs: [
      'Design: Gooseneck (Haste flexível)',
      'Tipo: Condensador (provavelmente), direcional',
      'Controles: Botão de liga/desliga ou "mute" na base (vermelho)',
      'Uso Principal: Conferências, pódios, comunicações de voz'
    ],
    imageUrl: '/assets/hardware/MICROFONE_DE_MESA_OU_DE_CONFERÊNCIA.png',
    documentationUrl: '',
    historicalSignificance: 'Ferramenta essencial para a comunicação profissional em ambientes corporativos e públicos, facilitando a clareza da fala e a operação de sistemas de áudio com as mãos livres.'
  },
  {
    id: '18',
    name: 'MODEM ADSL DE BANDA LARGA (DSLink e UOL)',
    category: 'rede',
    year: '2000-2010',
    manufacturer: 'DSLink / UOL',
    description: 'Dispositivos essenciais que modulam e desmodulam sinais para fornecer conexão de internet de banda larga (ADSL) através de linhas telefônicas de cobre.',
    detailedDescription: 'O ADSL (Asymmetric Digital Subscriber Line) permitiu velocidades significativamente maiores que o dial-up e manteve a linha telefônica livre para chamadas. O modelo DSLink (mais antigo) e o UOL Banda Larga (fornecido por ISP) possuem LEDs de status (Power, DSL, Internet, Ethernet), indicando a evolução e popularização dos serviços de banda larga.',
    technicalSpecs: [
      'Tecnologia: ADSL (Asymmetric Digital Subscriber Line)',
      'Interface de Linha: RJ-11 (Telefone)',
      'Interface de Rede: Ethernet e/ou USB',
      'Indicadores: LEDs de Power, DSL, Internet, LAN/Ethernet'
    ],
    imageUrl: '/assets/hardware/MODEM ADSL DE BANDA LARGA.png',
    documentationUrl: '',
    historicalSignificance: 'Crucial para a revolução da internet banda larga, marcando a transição da conexão discada para a "sempre ativa", e possibilitando o consumo de multimídia e o uso intensivo da web.'
  },
  {
    id: '19',
    name: 'WALKIE-TALKIES MOTOROLA TALKABOUT',
    category: 'comunicacao',
    year: '2005-2012',
    manufacturer: 'Motorola',
    description: 'Rádios comunicadores portáteis de duas vias da linha Talkabout, usados para comunicação instantânea por voz a curtas e médias distâncias em frequências não licenciadas (FRS/GMRS).',
    detailedDescription: 'Projetados para uso pessoal e recreativo, ou profissional leve, são robustos e não dependem de rede celular. Possuem design em amarelo e preto, tela LCD e são vendidos com uma base carregadora dupla. São ideais para acampamentos, eventos e locais sem cobertura de celular.',
    technicalSpecs: [
      'Tipo: Rádio Comunicador Portátil (Walkie-Talkie)',
      'Frequência: FRS/GMRS (Family Radio Service/General Mobile Radio Service - dependendo da região)',
      'Características: Canais múltiplos, Códigos de privacidade (CTCSS/DCS), Baterias recarregáveis',
      'Uso Principal: Comunicação ao ar livre, eventos e segurança'
    ],
    imageUrl: '/assets/hardware/WALKIE-TALKIES MOTOROLA TALKABOUT.png',
    documentationUrl: '',
    historicalSignificance: 'Oferecem comunicação instantânea, gratuita e confiável, sendo essenciais em situações onde a infraestrutura de celular não está disponível. Representam a portabilidade e robustez em comunicações.'
  },
  {
    id: '20',
    name: 'MÁQUINA DE SULCAR LENTES ÓPTICAS',
    category: 'outros',
    year: '1980-2000',
    manufacturer: 'Não especificado',
    description: 'Equipamento especializado para criar um sulco (canal) na borda de lentes de óculos, essencial para a montagem em armações do tipo "fio de nylon".',
    detailedDescription: 'Utiliza um mecanismo de fixação de lente e um disco de corte para fazer o sulco com precisão. É uma ferramenta de trabalho em óticas e laboratórios. O design manual sugere um modelo anterior à automação digital avançada, sendo valorizado por sua precisão no acabamento da lente.',
    technicalSpecs: [
      'Uso: Óticas e Laboratórios de Oftalmologia',
      'Função: Criação de sulco para armações "fio de nylon"',
      'Mecanismo: Manual, disco de corte/fresa',
      'Material: Corpo robusto (plástico/metal)'
    ],
    imageUrl: '/assets/hardware/MÁQUINA DE SULCAR LENTES ÓPTICAS.png',
    documentationUrl: '',
    historicalSignificance: 'Crucial para a popularização de armações leves e minimalistas ("fio de nylon"). Garante a precisão do acabamento da lente, fundamental para a correta centralização óptica.'
  },
  {
    id: '21',
    name: 'NOTEBOOK TOSHIBA SATÉLITE 1999',
    category: 'computador',
    year: '1999-2003',
    manufacturer: 'Toshiba',
    description: 'Computador portátil (laptop) da linha Toshiba Satellite, representando os modelos de transição do final dos anos 90 e início dos 2000.',
    detailedDescription: 'Caracterizado por ser robusto e mais espesso, com tela LCD (provavelmente 4:3), teclado completo e touchpad. A presença simultânea de unidades de disquete (FDD) e CD-ROM/DVD-ROM era comum na época. Contribuiu para tornar a computação móvel poderosa o suficiente para substituir desktops para muitos usuários.',
    technicalSpecs: [
      'Tipo: Notebook / Laptop',
      'Tela: LCD (provavelmente 4:3)',
      'Dispositivos de Mídia: Unidade de Disquete (FDD), Unidade de CD-ROM/DVD-ROM',
      'Periféricos: Teclado físico, Touchpad',
      'Portas de Expansão: PCMCIA/CardBus, USB 1.1/2.0 (iniciais)'
    ],
    imageUrl: '/assets/hardware/NOTEBOOK TOSHIBA SATÉLITE 1999.png',
    documentationUrl: '',
    historicalSignificance: 'Fundamental na transição para a computação móvel, integrando todas as mídias (disquete e CD/DVD) e estabelecendo a base para a conectividade portátil universal.'
  },
  {
    id: '22',
    name: 'IMPRESSORA MATRICIAL EPSON LX-300-II',
    category: 'periferico',
    year: '2000-2010',
    manufacturer: 'Epson',
    description: 'Impressora matricial (de impacto) da série LX-300+II, que usa pequenos pinos para impactar uma fita de tinta contra o papel, formando caracteres por pontos.',
    detailedDescription: 'Projetada para impressão contínua em papel formulário e múltiplas vias (formulários carbonados). É conhecida por sua robustez e baixo custo por página, sendo ideal para ambientes industriais, logísticos e balcões de atendimento, onde a durabilidade e a capacidade de cópias são essenciais.',
    technicalSpecs: [
      'Tecnologia: Matricial (de Impacto)',
      'Modelo: LX-300+II (Epson)',
      'Tipo de Papel: Papel formulário (contínuo) e folhas soltas',
      'Uso Principal: Impressão de múltiplas vias (carbonados), faturas, recibos'
    ],
    imageUrl: '/assets/hardware/IMPRESSORA MATRICIAL EPSON LX-300-II.png',
    documentationUrl: '',
    historicalSignificance: 'Apesar de ser uma tecnologia mais antiga, sua capacidade de imprimir em múltiplas vias a tornou indispensável em nichos de mercado (logística, contabilidade), onde a impressão a laser/jato de tinta não consegue competir.'
  },
  {
    id: '23',
    name: 'LENSÔMETRO MANUAL',
    category: 'outros',
    year: '1970-1990',
    manufacturer: 'Não especificado',
    description: 'Instrumento óptico essencial para medir com precisão o poder dióptrico (prescrição), eixo e prisma de lentes de óculos ou de contato.',
    detailedDescription: 'Requer que o operador olhe através de uma ocular e ajuste os controles para obter a leitura. É um dispositivo mecânico e óptico robusto, usado em consultórios de oftalmologia e óticas para verificação de prescrições e marcação do centro óptico da lente antes da montagem.',
    technicalSpecs: [
      'Tipo: Instrumento Óptico de Medição',
      'Função: Medir dioptria, eixo e prisma de lentes',
      'Mecanismo: Manual (Requer leitura e ajuste do operador)',
      'Uso: Oftalmologia, Optometria e Ótica'
    ],
    imageUrl: '/assets/hardware/LENSÔMETRO MANUAL.png',
    documentationUrl: '',
    historicalSignificance: 'Pilar da saúde visual, garantindo que os pacientes recebam a correção visual correta. Estabeleceu o padrão de precisão na medição de lentes, servindo de base para os auto-lensômetros digitais modernos.'
  },
  {
    id: '24',
    name: 'FERRO DE PASSAR (USAVA O CARVÃO OU BRASAS)',
    category: 'outros',
    year: '1880-1950',
    manufacturer: 'Não especificado',
    description: 'Ferro de passar roupa antigo, sem eletricidade, que aquecia a base de ferro fundido com brasas de carvão ou pedaços de carvão quente colocados em seu corpo oco.',
    detailedDescription: 'Possui uma alça de madeira para isolamento e orifícios laterais para circulação de ar e manutenção das brasas. Foi uma ferramenta doméstica essencial do final do século XIX até meados do século XX, especialmente em locais sem acesso à rede elétrica.',
    technicalSpecs: [
      'Tecnologia: Aquecimento por Combustão (Carvão/Brasas)',
      'Material: Ferro fundido (corpo), Madeira (alça)',
      'Uso: Doméstico e Lavanderias, antes da eletrificação'
    ],
    imageUrl: '/assets/hardware/FERRO DE PASSAR (USAVA O CARVÃO OU BRASAS).png',
    documentationUrl: '',
    historicalSignificance: 'Solução de aquecimento portátil e eficiente para passar roupas em uma era pré-elétrica. Representa um avanço significativo em conveniência térmica em relação a ferros aquecidos diretamente em fogão.'
  },
  {
    id: '25',
    name: 'FERRO DE PASSAR (USAVA ELETRICIDADE)',
    category: 'outros',
    year: '1920-1950',
    manufacturer: 'Não especificado',
    description: 'Um dos primeiros modelos de ferro de passar elétrico, que utiliza uma resistência interna aquecida por eletricidade para aquecer a base de metal.',
    detailedDescription: 'Ainda com um design robusto de metal e alça de madeira (para isolamento), ele possuía pinos na parte traseira para a conexão de um cabo de energia removível. Foi o sucessor do ferro a carvão, proporcionando calor contínuo, limpo e consistente.',
    technicalSpecs: [
      'Tecnologia: Resistência Elétrica',
      'Material: Metal (corpo), Madeira (alça)',
      'Conexão: Pinos expostos para cabo de energia removível',
      'Uso: Residências conectadas à rede elétrica'
    ],
    imageUrl: '/assets/hardware/FERRO DE PASSAR (USAVA ELETRICIDADE).png',
    documentationUrl: '',
    historicalSignificance: 'Marco da eletrificação do lar. Transformou a tarefa doméstica de passar roupa, eliminando a sujeira e o perigo do fogo e fornecendo uma fonte de calor mais consistente e segura.'
  },
  {
    id: '26',
    name: 'TOCA-DISCOS (TURNTABLE) POLY VOX TD 500',
    category: 'multimidia',
    year: '1970-1980',
    manufacturer: 'Polyvox',
    description: 'Toca-discos da Polyvox, modelo TD 500, projetado para reproduzir discos de vinil em sistemas de áudio estéreo domésticos.',
    detailedDescription: 'Componente central em sistemas de som de alta fidelidade (Hi-Fi) de sua época. Inclui prato para o disco, braço (tonearm) com agulha e base com controles de velocidade (33 1/3 e 45 RPM). A Polyvox era uma marca importante no mercado brasileiro de eletrônicos.',
    technicalSpecs: [
      'Mídia: Disco de Vinil (LP/Single)',
      'Componentes: Prato, Braço (Tonearm), Agulha',
      'Velocidades: 33 1/3 e 45 RPM (Revoluções por Minuto)',
      'Uso Principal: Reprodução de música analógica'
    ],
    imageUrl: '/assets/hardware/TOCA-DISCOS (TURNTABLE) POLY VOX TD 500.png',
    documentationUrl: '',
    historicalSignificance: 'Pilar do consumo de música na era pré-digital, representando o auge da tecnologia de áudio analógico e a busca pela alta fidelidade (Hi-Fi).'
  },
  {
    id: '27',
    name: 'FITA CASSETE VHS',
    category: 'multimidia',
    year: '1980-2000',
    manufacturer: 'Não especificado',
    description: 'Mídia de fita magnética no formato VHS (Video Home System), o padrão dominante para gravação e reprodução de vídeo em ambientes domésticos.',
    detailedDescription: 'O cassete contém uma fita magnética que, ao ser inserida em um videocassete (VCR), é usada para ler ou gravar sinais de áudio e vídeo analógicos. Foi popularizado a partir do início dos anos 80, dominando o mercado de vídeo até ser substituído pelo DVD.',
    technicalSpecs: [
      'Mídia: Fita Magnética de Vídeo',
      'Formato: VHS (Video Home System)',
      'Dispositivo de Reprodução: Videocassete (VCR)',
      'Uso Principal: Entretenimento doméstico, gravação de TV'
    ],
    imageUrl: '/assets/hardware/FITA CASSETE VHS.png',
    documentationUrl: '',
    historicalSignificance: 'Fundamental para a revolução do entretenimento doméstico, permitindo que o cinema entrasse nas casas das pessoas. Venceu a "Guerra dos Formatos" contra o Betamax, estabelecendo o padrão global de vídeo doméstico.'
  },
  {
    id: '28',
    name: 'DISQUETES (3.5 polegadas)',
    category: 'armazenamento',
    year: '1985-2005',
    manufacturer: 'EMTEC / NIPPONIC / PENGO',
    description: 'Mídias de armazenamento magnético removíveis de 3.5 polegadas, com invólucro de plástico rígido, sendo o padrão para armazenamento portátil na década de 90.',
    detailedDescription: 'O modelo mais comum era o High Density (HD) ou MF2-HD, com capacidade de 1.44 MB. Eram essenciais para o armazenamento e transferência de documentos, distribuição de software e sistemas de boot. O invólucro rígido e o obturador metálico os tornaram mais duráveis do que os formatos anteriores (8 e 5.25 polegadas).',
    technicalSpecs: [
      'Mídia: Armazenamento Magnético Removível',
      'Fator de Forma: 3.5 polegadas',
      'Capacidade (HD): 1.44 Megabytes (MB)',
      'Uso: Transferência de dados, Distribuição de software, Backup'
    ],
    imageUrl: '/assets/hardware/DISQUETES.png',
    documentationUrl: '',
    historicalSignificance: 'O primeiro meio de armazenamento removível universalmente acessível e portátil na era do PC. Foi crucial para a instalação de software e o compartilhamento de arquivos antes da era dos CDs e drives USB.'
  },
  {
    id: '29',
    name: 'SMARTPHONE PALMONE TREO',
    category: 'comunicacao',
    year: '2003-2006',
    manufacturer: 'palmOne',
    description: 'Smartphone pioneiro (híbrido PDA e telefone celular) da linha Treo, que combinava um telefone, teclado QWERTY completo e funcionalidades de assistente digital.',
    detailedDescription: 'Rodava o sistema operacional Palm OS ou Windows Mobile, oferecendo e-mail, agenda, contatos e navegação básica na web. O teclado QWERTY físico e a antena externa eram característicos. Foi o predecessor dos smartphones modernos, demonstrando o potencial de um dispositivo "tudo em um".',
    technicalSpecs: [
      'Tipo: Smartphone / PDA Phone',
      'Sistema Operacional: Palm OS ou Windows Mobile (dependendo do modelo)',
      'Teclado: QWERTY físico completo',
      'Conectividade: Telefone celular (GPRS/EDGE), E-mail, Navegação Web'
    ],
    imageUrl: '/assets/hardware/SMARTPHONE PALMONE TREO.png',
    documentationUrl: '',
    historicalSignificance: 'Marco na convergência de funcionalidades, sendo um dos primeiros a integrar com sucesso as capacidades de telefone e PDA, pavimentando o caminho para o conceito de smartphone moderno.'
  },
  {
    id: '30',
    name: 'SMARTPHONE SAMSUNG GALAXY DUOS',
    category: 'comunicacao',
    year: '2012-2015',
    manufacturer: 'Samsung',
    description: 'Smartphone da série Galaxy, com funcionalidade "Duos" (Dual SIM), que permite operar com dois chips de operadoras diferentes simultaneamente.',
    detailedDescription: 'Possuía tela sensível ao toque, câmera e rodava o sistema operacional Android. O design com um botão Home físico central e botões capacitivos era o padrão da Samsung na época. Foi muito popular em mercados emergentes, oferecendo acesso ao ecossistema Android a um custo mais competitivo.',
    technicalSpecs: [
      'Tipo: Smartphone Android',
      'Funcionalidade: Dual SIM (Duos)',
      'Interface: Tela sensível ao toque, Botão Home físico',
      'Uso Principal: Comunicação, Aplicativos, Internet móvel'
    ],
    imageUrl: '/assets/hardware/SMARTPHONE SAMSUNG GALAXY DUOS.png',
    documentationUrl: '',
    historicalSignificance: 'Crucial para popularizar a funcionalidade Dual SIM e democratizar o acesso ao ecossistema Android em mercados de massa. Contribuiu para a consolidação dos smartphones de tela sensível ao toque.'
  },
  {
    id: '31',
    name: 'CELULAR NOKIA 2220 SLIDE',
    category: 'comunicacao',
    year: '2009',
    manufacturer: 'Nokia',
    description: 'Telefone celular ("feature phone") com design deslizante ("slider"), que revela um teclado numérico físico ao deslizar a tela para cima.',
    detailedDescription: 'Rodava a plataforma Series 40 da Nokia, focado em chamadas, mensagens de texto (SMS) e multimídia básica (câmera VGA, rádio FM). O design deslizante em cores vibrantes era um ponto de estilo. Era valorizado por sua confiabilidade, longa duração da bateria e baixo custo-benefício em mercados de massa.',
    technicalSpecs: [
      'Tipo: Feature Phone (Celular Básico)',
      'Design: Slider (Deslizante)',
      'Sistema Operacional: Nokia Series 40',
      'Recursos: Câmera VGA, Rádio FM, Reprodutor de MP3 (básico)'
    ],
    imageUrl: '/assets/hardware/CELULAR NOKIA 2220 SLIDE.png',
    documentationUrl: 'https://www.maiscelular.com.br/fichas-tecnicas/nokia/2220-slide/',
    historicalSignificance: 'Exemplo do auge dos feature phones com design inovador, oferecendo estilo e funcionalidades multimídia básicas, preparando os usuários para a transição para smartphones.'
  },
  {
    id: '32',
    name: 'CELULAR MOTOROLA DPC650',
    category: 'comunicacao',
    year: '1994-1998',
    manufacturer: 'Motorola',
    description: 'Telefone celular flip ("clamshell") analógico, que se dobrava para proteger a tela e o teclado, sendo um dos primeiros modelos mais portáteis.',
    detailedDescription: 'Operava em redes analógicas da época (como AMPS) e era projetado principalmente para chamadas de voz. O design flip permitia um aparelho mais compacto para transporte e uma melhor ergonomia para chamadas. Possuía um pequeno display monocromático e teclado numérico físico.',
    technicalSpecs: [
      'Tipo: Celular Analógico (AMPS)',
      'Design: Flip (Clamshell)',
      'Interface: Teclado numérico físico, Display monocromático',
      'Uso Principal: Chamadas de voz'
    ],
    imageUrl: '/assets/hardware/CELULAR MOTOROLA DPC650.png',
    documentationUrl: '',
    historicalSignificance: 'Marco na revolução da portabilidade celular, afastando-se dos "tijolões" e popularizando o design flip. Foi um símbolo de status e modernidade na metade dos anos 90.'
  },
  {
    id: '33',
    name: 'REPRODUTOR DE MÍDIA MP4',
    category: 'multimidia',
    year: '2005-2010',
    manufacturer: 'Não especificado',
    description: 'Dispositivo eletrônico portátil multifuncional, sucessor dos MP3 players, projetado para reproduzir áudio, fotos e, crucialmente, vídeo (MP4) em uma tela colorida.',
    detailedDescription: 'Possui uma tela maior (visível no design similar a um iPod Nano da 2ª geração, embora seja um MP4 Player genérico/outra marca) e controles físicos. Popular na época em que a portabilidade do vídeo digital se tornou acessível, preenchendo a lacuna antes da dominação dos smartphones.',
    technicalSpecs: [
      'Tipo: Reprodutor de Mídia Portátil (PMP)',
      'Mídia Suportada: MP4, MP3, Vídeo, Fotos, Texto',
      'Interface: Tela colorida LCD/OLED, Controles físicos (roda de clique ou botões)',
      'Armazenamento: Memória Flash (2GB a 32GB), Expansão (microSD)'
    ],
    imageUrl: '/assets/hardware/REPRODUTOR DE MÍDIA MP4.png',
    documentationUrl: '',
    historicalSignificance: 'Representou um avanço crucial na convergência de mídias, tornando a visualização de vídeos acessível para as massas em um formato de bolso. Foi um precursor direto dos smartphones modernos como dispositivo "tudo em um" para entretenimento.'
  },
  {
    id: '34',
    name: 'CELULAR LG BX7000',
    category: 'comunicacao',
    year: '2002-2004',
    manufacturer: 'LG',
    description: 'Telefone celular flip ("clamshell") da LG, focado em comunicação de voz e mensagens de texto (SMS).',
    detailedDescription: 'Operava em redes CDMA. O formato flip (dobrável) oferecia proteção à tela e ao teclado, sendo valorizado por sua portabilidade e durabilidade. Possuía um teclado numérico físico e uma tela interna (monocromática ou com cores limitadas).',
    technicalSpecs: [
      'Tipo: Celular (Feature Phone)',
      'Design: Flip (Clamshell)',
      'Rede: CDMA',
      'Uso Principal: Chamadas de voz e SMS',
      'Interface: Teclado numérico físico'
    ],
    imageUrl: '/assets/hardware/CELULAR LG BX7000.png',
    documentationUrl: 'https://tfcantigos.mercadoshops.com.br/MLB-4032453179-telefone-celular-antigo-lg-bx7000-anos-2000-prateado-_JM',
    historicalSignificance: 'Ajudou a popularizar o design flip, que se tornou um padrão de mercado. Contribuiu para a consolidação da LG no crescente mercado de telefonia móvel no início dos anos 2000.'
  },
  {
    id: '35',
    name: 'CELULAR LG MX200',
    category: 'comunicacao',
    year: '2005',
    manufacturer: 'LG',
    description: 'Telefone celular flip ("clamshell") da LG, operando em redes CDMA, popular durante o auge dos "feature phones".',
    detailedDescription: 'Semelhante a outros modelos flip da época, o MX200 oferecia proteção e compacidade. Era um dispositivo confiável para chamadas e mensagens, com uma tela interna (provavelmente colorida, mas pequena). O formato flip era apreciado por proteger o teclado e melhorar a ergonomia de chamada.',
    technicalSpecs: [
      'Tipo: Celular (Feature Phone)',
      'Design: Flip (Clamshell)',
      'Rede: CDMA',
      'Interface: Teclado numérico físico',
      'Uso Principal: Comunicação de voz e SMS'
    ],
    imageUrl: '/assets/hardware/celular lg mx200.jpg',
    documentationUrl: '',
    historicalSignificance: 'Exemplo do sucesso dos celulares flip. Sua simplicidade e confiabilidade eram cruciais para a comunicação móvel de massa, pavimentando o caminho para dispositivos mais avançados.'
  },
  {
    id: '36',
    name: 'CELULAR MOTOROLA MOTOKEY MINI EX108',
    category: 'comunicacao',
    year: '2010-2012',
    manufacturer: 'Motorola',
    description: 'Telefone celular ("feature phone") no formato "candy bar" com um teclado QWERTY completo fixo, otimizado para a digitação rápida de mensagens de texto e e-mails.',
    detailedDescription: 'Lançado em um período de transição, o EX108 se destacava pela facilidade de digitação, sendo popular entre jovens e usuários intensivos de mensagens. Oferecia acesso básico a redes sociais e e-mail. Representava uma opção acessível para obter um teclado QWERTY completo sem ser um smartphone caro.',
    technicalSpecs: [
      'Tipo: Feature Phone (Celular Básico)',
      'Design: Candy Bar (Barra)',
      'Teclado: QWERTY físico completo e fixo',
      'Uso Principal: Mensagens de texto (SMS), E-mail, Chamadas'
    ],
    imageUrl: '/assets/hardware/CELULAR MOTOROLA MOTOKEY MINI EX108.png',
    documentationUrl: 'https://www.shopping1.com.br/produtos/motorola-motokey-mini-ex108-desbloqueado-semi-novo/',
    historicalSignificance: 'Inovação focada na otimização para mensagens. Foi crucial para o segmento de usuários que priorizavam a comunicação por texto antes da dominação completa dos teclados virtuais touchscreen.'
  },
  {
    id: '37',
    name: 'PDA PALM M100',
    category: 'comunicacao',
    year: '2000',
    manufacturer: 'Palm',
    description: 'Personal Digital Assistant (PDA) da série m100, um computador de mão compacto para organização pessoal e produtividade.',
    detailedDescription: 'Possuía tela monocromática (ou tons de cinza) e utilizava caneta stylus para entrada de dados (com o sistema de reconhecimento de escrita Graffiti). Era muito popular para gerenciar agendas, contatos, notas e tarefas. O Palm OS era conhecido por sua simplicidade e eficiência. Foi um modelo mais acessível da Palm, ajudando a democratizar os PDAs.',
    technicalSpecs: [
      'Tipo: PDA (Personal Digital Assistant)',
      'Sistema Operacional: Palm OS',
      'Interface: Tela sensível ao toque (Stylus), Botões físicos de acesso rápido',
      'Tela: Monocromática / Tons de Cinza',
      'Uso Principal: Agenda, Contatos, Notas, Lembretes'
    ],
    imageUrl: '/assets/hardware/pda palm m100.jpeg',
    documentationUrl: '',
    historicalSignificance: 'Pioneiro na computação de bolso e organização digital. Foi um precursor direto dos smartphones, demonstrando a utilidade de um dispositivo pessoal multifuncional e compacto.'
  },
  {
    id: '38',
    name: 'CELULAR NOKIA E61',
    category: 'comunicacao',
    year: '2005-2006',
    manufacturer: 'Nokia',
    description: 'Smartphone da série E-series (focado em empresas), com tela paisagem e teclado QWERTY completo, projetado para e-mail e produtividade móvel.',
    detailedDescription: 'Rodava o sistema operacional Symbian (Series 60). Era um dos principais competidores dos BlackBerrys na época. O design era otimizado para digitação eficiente e visualização de documentos. Incluía conectividade Wi-Fi e suporte a redes de dados avançadas (EDGE/3G).',
    technicalSpecs: [
      'Tipo: Smartphone (E-series)',
      'Sistema Operacional: Symbian OS (Series 60)',
      'Teclado: QWERTY físico completo',
      'Tela: Paisagem (horizontal), não sensível ao toque',
      'Conectividade: Wi-Fi, EDGE/3G, Bluetooth'
    ],
    imageUrl: '/assets/hardware/CELULAR NOKIA E61.png',
    documentationUrl: 'https://www.shopping1.com.br/produtos/celular-nokia-e61-seminovo/',
    historicalSignificance: 'Marcou o foco da Nokia na produtividade empresarial. Sua combinação de teclado QWERTY e tela paisagem definiu o padrão para os smartphones orientados a texto da época, sendo um passo crucial para os dispositivos móveis multifuncionais.'
  },
  {
    id: '39',
    name: 'CELULAR NOKIA 2626',
    category: 'comunicacao',
    year: '2007',
    manufacturer: 'Nokia',
    description: 'Telefone celular ("feature phone") com design em barra (slider), onde a tela se move para cima para revelar o teclado numérico, focado em estilo e comunicação básica.',
    detailedDescription: 'O aparelho tinha uma tela colorida e funcionalidades básicas como rádio FM e acesso WAP. O mecanismo deslizante era uma tendência de design popular, oferecendo um equilíbrio entre proteção e compacidade. Era um modelo de entrada da Nokia, valorizado por seu design e confiabilidade.',
    technicalSpecs: [
      'Tipo: Feature Phone (Celular Básico)',
      'Design: Slider (Deslizante)',
      'Recursos: Rádio FM, Acesso WAP (internet básica)',
      'Uso Principal: Chamadas de voz e SMS'
    ],
    imageUrl: '/assets/hardware/CELULAR NOKIA 2626.png',
    documentationUrl: 'https://www.gsmarena.com/nokia_2626-1801.php',
    historicalSignificance: 'Exemplo da diversificação de design da Nokia para o mercado de massa, tornando a telefonia móvel acessível e elegante antes da era dos smartphones de tela cheia.'
  },
  {
    id: '40',
    name: 'PDA HTC QTEK A9100',
    category: 'comunicacao',
    year: '2006-2007',
    manufacturer: 'HTC / Qtek',
    description: 'Smartphone PDA (ou Pocket PC Phone) com design deslizante lateral ("side-slider") que revela um teclado QWERTY completo, rodando Windows Mobile, focado em produtividade avançada.',
    detailedDescription: 'O design híbrido permitia navegação por toque e digitação eficiente. O sistema Windows Mobile oferecia compatibilidade com o ecossistema Microsoft (Office Mobile). Incluía conectividade avançada (Wi-Fi, 3G HSDPA, Bluetooth) para o ambiente corporativo, sendo um dos dispositivos mais completos de sua época.',
    technicalSpecs: [
      'Tipo: Smartphone PDA (Pocket PC Phone)',
      'Design: Side-Slider (Deslizante lateral)',
      'Sistema Operacional: Windows Mobile',
      'Teclado: QWERTY físico completo',
      'Conectividade: Wi-Fi, 3G (HSDPA), Bluetooth'
    ],
    imageUrl: '/assets/hardware/PDA HTC QTEK  A9100.png',
    documentationUrl: '',
    historicalSignificance: 'Um dos pontos altos da fusão entre PDAs e telefones celulares. Seu design e funcionalidades avançadas foram essenciais para definir o conceito de smartphone moderno, especialmente no nicho corporativo.'
  },
  {
    id: '41',
    name: 'SHARP YO-180 MEMO MASTER ELECTRONIC ORGANIZER COM PC LINK',
    category: 'outros',
    year: '1998-2002',
    manufacturer: 'Sharp',
    description: 'Organizador eletrônico compacto e dobrável, com tela LCD monocromática e teclado QWERTY completo, projetado para gerenciamento de informações pessoais (agenda, contatos, notas).',
    detailedDescription: 'O modelo "Memo Master" se dobra como um estojo. Possui funções básicas como agenda, calendário, lista telefônica, calculadora e a característica "PC Link" para sincronização de dados com um computador. Oferecia organização digital acessível antes dos PDAs mais avançados.',
    technicalSpecs: [
      'Tipo: Organizador Eletrônico (Agenda Digital)',
      'Design: Dobrável (Clamshell)',
      'Tela: LCD Monocromática',
      'Teclado: QWERTY físico completo',
      'Recursos: Agenda, Calendário, Notas, PC Link'
    ],
    imageUrl: '/assets/hardware/SHARP YO-180 MEMO MASTER ELECTRONIC ORGANIZER COM PC LINK.jpg',
    documentationUrl: '',
    historicalSignificance: 'Precursor de dispositivos móveis de produtividade. Foi fundamental para familiarizar o público com a ideia de gerenciar informações pessoais e de trabalho digitalmente em um formato de bolso.'
  },
  {
    id: '42',
    name: 'ORGANIZADOR ELETRÔNICO CASIO DIGITAL DIARY SF-4900ER',
    category: 'outros',
    year: '1997-2000',
    manufacturer: 'Casio',
    description: 'Agenda eletrônica portátil ("digital diary") da Casio, com tela LCD com luz de fundo (backlight) e teclado QWERTY completo, focada em organização pessoal e profissional.',
    detailedDescription: 'Possui 128KB de memória para armazenar contatos, compromissos e notas. O design dobrável protegia a tela e o teclado. Representava uma solução digital acessível e funcional, preenchendo a lacuna entre as agendas de papel e os PDAs mais caros.',
    technicalSpecs: [
      'Tipo: Organizador Eletrônico (Digital Diary)',
      'Design: Dobrável (Clamshell)',
      'Tela: LCD Monocromática com Backlight',
      'Teclado: QWERTY físico completo',
      'Memória: 128KB'
    ],
    imageUrl: '/assets/hardware/ORGANIZADOR ELETRÔNICO CASIO DIGITAL DIARY SF-4900ER.png',
    documentationUrl: '',
    historicalSignificance: 'Contribuiu para a digitalização da produtividade pessoal. Foi um antecessor dos PDAs e smartphones, demonstrando a demanda por ferramentas de gerenciamento de informações portáteis.'
  },
  {
    id: '43',
    name: 'DISCO RÍGIDO SAMSUNG SP0802N (80GB)',
    category: 'armazenamento',
    year: '2004',
    manufacturer: 'Samsung',
    description: 'Disco Rígido (HD) de 3.5 polegadas, modelo SpinPoint SP0802N, com capacidade de 80GB e interface PATA (Parallel ATA) / IDE.',
    detailedDescription: 'Dispositivo de armazenamento de dados não volátil, essencial para guardar o sistema operacional e arquivos. Sua capacidade de 80GB era considerável para a época (2004). O uso da interface IDE/PATA reflete o padrão de mercado antes da popularização do SATA.',
    technicalSpecs: [
      'Tipo: Disco Rígido (HDD) - Armazenamento Magnético',
      'Capacidade: 80 Gigabytes (GB)',
      'Interface: PATA (Parallel ATA) / IDE',
      'Fator de Forma: 3.5 polegadas (Desktop)',
      'Data de Fabricação (Etiqueta): 2004.01'
    ],
    imageUrl: '/assets/hardware/DISCO RÍGIDO SAMSUNG.jpg',
    documentationUrl: 'https://hddonor.com.br/produto/samsung-sp0802n-80gb-3/',
    historicalSignificance: 'Componente central para o armazenamento persistente de dados. Representa o auge do armazenamento mecânico com interface IDE, sendo fundamental para a expansão do armazenamento em PCs de mesa.'
  },
  {
    id: '44',
    name: 'FILMADORA DIGITAL HITACHI',
    category: 'multimidia',
    year: '2003-2007',
    manufacturer: 'Hitachi',
    description: 'Filmadora digital com design ergonômico e zoom óptico, projetada para gravar vídeo e áudio em formato digital (em mídias como MiniDV, DVDs de 8cm ou cartões SD).',
    detailedDescription: 'Possuía visor lateral articulado e formato de fácil manuseio. Foi popular entre consumidores domésticos para gravar eventos familiares e viagens. Representou a transição da gravação analógica em fita para a gravação digital, oferecendo melhor qualidade de imagem e facilidade de edição em computadores.',
    technicalSpecs: [
      'Tipo: Filmadora Digital',
      'Recursos: Zoom óptico, Visor lateral articulado',
      'Mídia de Gravação: Digital (MiniDV, DVD 8cm ou SD, dependendo do modelo)',
      'Uso Principal: Gravação de eventos familiares e pessoais'
    ],
    imageUrl: '/assets/hardware/FILMADORA DIGITAL HITACHI.png',
    documentationUrl: 'https://www.enjoei.com.br/p/filmadora-camera-digital-1997-hitachi-japao-mp-eg1-funciona-94511858',
    historicalSignificance: 'Crucial para a democratização da produção de vídeo digital. Sua portabilidade e qualidade de vídeo eram superiores às dos primeiros celulares com câmera, sendo um item essencial para documentar memórias pessoais.'
  },
  {
    id: '45',
    name: 'MÁQUINA DE CALCULAR DE MESA OLIVETTI COM IMPRESSÃO',
    category: 'outros',
    year: '1970-1980',
    manufacturer: 'Olivetti',
    description: 'Calculadora de mesa profissional com impressora integrada, que imprime um registro em papel de todas as operações aritméticas efetuadas.',
    detailedDescription: 'Equipamento robusto com teclado numérico e de funções dedicado, utilizado em contabilidade, finanças e comércio. A fita de impressão era a principal vantagem, fornecendo um registro permanente e verificável dos cálculos, fundamental para auditorias e redução de erros humanos.',
    technicalSpecs: [
      'Tipo: Calculadora Eletromecânica / Eletrônica de Mesa',
      'Recursos: Impressora Integrada (Fita de papel)',
      'Uso Principal: Contabilidade, Escritórios, Comércio',
      'Funções: Adição, Subtração, Multiplicação, Divisão'
    ],
    imageUrl: '/assets/hardware/MÁQUINA DE CALCULAR DE MESA OLIVETTI COM IMPRESSÃO.jpg',
    documentationUrl: '',
    historicalSignificance: 'Símbolo da automação de escritórios, acelerando tarefas administrativas e contábeis. A fita de impressão é um precursor do log de operações em softwares modernos de contabilidade.'
  },
  {
    id: '46',
    name: 'COMPUTADOR 386',
    category: 'computador',
    year: '1988-1993',
    manufacturer: 'Não especificado (Compatível com Intel)',
    description: 'Sistema de computador desktop completo da era do processador Intel 80386, composto por monitor CRT, gabinete horizontal e teclado mecânico.',
    detailedDescription: 'O processador 386 foi o primeiro da arquitetura x86 com capacidade total de 32 bits, permitindo maior acesso à memória e a execução de softwares mais complexos (como Windows 3.1). O sistema na imagem inclui unidades de disquete e CD-ROM, sendo uma ferramenta essencial em escritórios para MS-DOS e Windows iniciais.',
    technicalSpecs: [
      'Processador (Inferido): Intel 80386 (386DX ou 386SX)',
      'Arquitetura: 32 bits, Modo Protegido (Multitarefa, Memória Virtual)',
      'Periféricos: Monitor CRT, Teclado Mecânico (AT/PS2)',
      'Dispositivos: Unidade de Disquete, Unidade de CD-ROM (novidade para a época)',
      'Sistema Operacional: MS-DOS, Windows 3.x'
    ],
    imageUrl: '/assets/hardware/COMPUTADOR 386.jpg',
    documentationUrl: 'https://pt.wikipedia.org/wiki/Compaq_Deskpro_386',
    historicalSignificance: 'Revolucionário, pois introduziu a computação de 32 bits, multitarefa e memória virtual ao PC, estabelecendo as bases para todos os processadores x86 subsequentes e para a evolução do Windows.'
  },
  {
    id: '47',
    name: 'SISTEMA DE SOM ESTEREO SUPERTECH PP-228CD',
    category: 'multimidia',
    year: '1992-1998',
    manufacturer: 'SUPERTECH',
    description: 'Sistema de som estéreo portátil ("boombox") que integra toca-discos de CD, rádio AM/FM e toca-fitas cassete, com caixas de som integradas.',
    detailedDescription: 'O modelo PP-228CD é um exemplo da convergência de mídias analógicas (fita, rádio) e digitais (CD) em um único aparelho. Foi muito popular, permitindo aos consumidores desfrutar da qualidade de áudio do CD em um formato portátil, sendo um item de entretenimento em festas e ambientes sociais.',
    technicalSpecs: [
      'Tipo: Radiomagnetofone (Boombox)',
      'Mídias: CD Player, Toca-Fitas Cassete, Rádio AM/FM',
      'Áudio: Estéreo, Caixas de som integradas',
      'Uso Principal: Consumo de música portátil'
    ],
    imageUrl: '/assets/hardware/SISTEMA DE SOM ESTEREO SUPERTECH PP-228CD.png',
    documentationUrl: '',
    historicalSignificance: 'Crucial na transição da música analógica (cassete) para a digital (CD), popularizando o formato Compact Disc e levando o áudio digital portátil para o mercado de massa.'
  },
  {
    id: '48',
    name: 'TV DE TUBO (CRT) BROKSONIC',
    category: 'outros',
    year: '1995-2005',
    manufacturer: 'Broksonic',
    description: 'Televisor de tubo de raios catódicos (CRT) compacto, que era o padrão de tecnologia para televisores antes das telas planas (LCD/Plasma/LED).',
    detailedDescription: 'Possuía um design de caixa com botões de controle na parte frontal. TVs CRT eram conhecidas por sua excelente qualidade de imagem para a época (bom contraste, pretos profundos) e baixíssimo "input lag", o que as tornava ideais para assistir TV e jogar videogames (como PlayStation 2 e Nintendo 64).',
    technicalSpecs: [
      'Tecnologia: CRT (Tubo de Raios Catódicos)',
      'Tamanho (Inferido): 14 a 20 polegadas',
      'Uso Principal: Entretenimento doméstico (TV, Filmes, Videogames)'
    ],
    imageUrl: '/assets/hardware/TV DE TUBO (CRT) BROKSONIC.png',
    documentationUrl: '',
    historicalSignificance: 'Espinha dorsal do entretenimento visual doméstico por mais de meio século. A tecnologia CRT foi o padrão que permitiu a evolução dos videogames e do consumo de filmes em casa.'
  },
  {
    id: '49',
    name: 'FILMADORA SONY HDV',
    category: 'multimidia',
    year: '2004-2009',
    manufacturer: 'Sony',
    description: 'Filmadora digital de alta definição (HDV) projetada para produção de vídeo semiprofissional e independente, gravando em HD (720p ou 1080i) em fitas MiniDV/HDV.',
    detailedDescription: 'Possui design robusto, alça superior, visor eletrônico (EVF), tela LCD articulada e múltiplos controles manuais (foco, zoom, áudio), característicos de equipamentos profissionais. A tecnologia HDV foi uma ponte entre a gravação em definição padrão e o HD, tornando a alta definição mais acessível.',
    technicalSpecs: [
      'Tipo: Filmadora Digital Semiprofissional',
      'Padrão de Vídeo: HDV (High-Definition Video) - 720p ou 1080i',
      'Mídia de Gravação: Fita MiniDV/HDV',
      'Recursos: Zoom óptico, Controles manuais, EVF, Tela LCD articulada'
    ],
    imageUrl: '/assets/hardware/FILMADORA SONY HDV.png',
    documentationUrl: 'https://pro.sony/bp_BR/products/handheld-camcorders/hvr-z5n',
    historicalSignificance: 'Revolucionou a produção de vídeo, pois tornou a gravação em Alta Definição acessível a cineastas independentes, produtoras menores e entusiastas, sendo crucial para a transição para o vídeo HD.'
  },
  {
    id: '50',
    name: 'CANDEEIRO MILITAR COLEMAN 252',
    category: 'outros',
    year: '1944',
    manufacturer: 'Coleman',
    description: 'Candeeiro a querosene ou gasolina, modelo Milspec 252 (Especificação Militar), fabricado pela Coleman para uso em operações militares.',
    detailedDescription: 'Projetado para ser extremamente robusto e confiável em condições de campo. Opera sob pressão, utilizando um manto incandescente para produzir luz brilhante. Como um modelo de 1944, foi uma ferramenta vital para as forças armadas durante a Segunda Guerra Mundial, fornecendo iluminação essencial em acampamentos e hospitais de campanha.',
    technicalSpecs: [
      'Tipo: Candeeiro a Pressão (Lantern)',
      'Combustível: Querosene ou Gasolina',
      'Modelo: 252 Milspec (Especificação Militar)',
      'Uso Principal: Iluminação de acampamentos militares e operações de campo'
    ],
    imageUrl: '/assets/hardware/CANDEEIRO MILITAR.png',
    documentationUrl: 'https://www.ebay.com/itm/166135534334',
    historicalSignificance: 'Item com grande significado histórico, sendo uma prova da tecnologia de iluminação robusta desenvolvida para o esforço de guerra. Símbolo de confiabilidade em condições adversas.'
  },
  {
    id: '51',
    name: 'SENSOR DE PRESENÇA INFRAVERMELHO PASSIVO (PIR) RF SAW',
    category: 'outros',
    year: '1998-2008',
    manufacturer: 'ECP (Visory)',
    description: 'Sensor de movimento sem fio utilizado em sistemas de alarme e segurança eletrônica, que detecta mudanças na radiação infravermelha (calor) causadas pelo movimento.',
    detailedDescription: 'Opera com tecnologia de Infravermelho Passivo (PIR). A comunicação sem fio utiliza a especificação RF SAW (Radio Frequency Surface Acoustic Wave) para maior estabilidade e resistência a interferências. Sua natureza sem fio simplificou a instalação de sistemas de alarme em residências e pequenos comércios.',
    technicalSpecs: [
      'Tecnologia: PIR (Passive Infrared - Infravermelho Passivo)',
      'Comunicação: RF SAW (Radio Frequency Surface Acoustic Wave) - Sem fio',
      'Uso: Sistemas de Alarme e Segurança Eletrônica (Detecção de intrusos)'
    ],
    imageUrl: '/assets/hardware/SENSOR DE PRESENÇA INFRAVERMELHO PASSIVO (PIR).jpg',
    documentationUrl: '',
    historicalSignificance: 'Marco na evolução da segurança eletrônica. A tecnologia sem fio eliminou a necessidade de passar fios, tornando os sistemas de alarme mais acessíveis, flexíveis e fáceis de instalar.'
  },
  {
    id: '52',
    name: 'WEBCAM LOGITECH C600',
    category: 'periferico',
    year: '2009-2013',
    manufacturer: 'Logitech',
    description: 'Webcam externa projetada para captura de vídeo em tempo real, conectada a um computador via USB, usada para videochamadas e criação de conteúdo.',
    detailedDescription: 'O modelo C600 era popular por oferecer qualidade de vídeo HD (geralmente 720p) a um preço acessível e possuía microfone embutido. Seu design esférico com base ajustável permitia fácil fixação. Foi uma das webcams líderes de mercado durante o aumento da popularidade das videochamadas (Skype, MSN).',
    technicalSpecs: [
      'Tipo: Webcam Digital',
      'Modelo: C600',
      'Resolução (Inferida): HD (720p)',
      'Conectividade: USB',
      'Recursos: Microfone embutido, Base ajustável'
    ],
    imageUrl: '/assets/hardware/WEBCAM LOGITECH C600.jpg',
    documentationUrl: '',
    historicalSignificance: 'Crucial para a popularização da comunicação visual digital, tornando as videochamadas acessíveis a milhões de usuários. Ajudou a pavimentar o caminho para a proliferação do conteúdo gerado por usuários (vlogs, streaming).'
  },
  {
    id: '53',
    name: 'MODEM ADSL ZTE ZXDSL 831 SERIES',
    category: 'rede',
    year: '2003-2008',
    manufacturer: 'ZTE',
    description: 'Modem ADSL (Asymmetric Digital Subscriber Line) da série ZXDSL 831, usado para conectar-se à internet de banda larga através de linhas telefônicas de cobre.',
    detailedDescription: 'Essencial para a transição do dial-up para o acesso "sempre ativo" à internet. Possuía indicadores de status (Power, DSL, Internet, Ethernet) para diagnóstico. A ZTE é uma grande fornecedora de infraestrutura de telecomunicações, e este modem foi amplamente distribuído por ISPs para residências e pequenos escritórios.',
    technicalSpecs: [
      'Tecnologia: ADSL (Asymmetric Digital Subscriber Line)',
      'Modelo: ZXDSL 831 Series',
      'Conexão de Linha: RJ-11',
      'Conexão de Rede: Ethernet',
      'Uso Principal: Acesso à internet banda larga'
    ],
    imageUrl: '/assets/hardware/MODEM ADSL ZTE ZXDSL  831 SERIES.jpg',
    documentationUrl: '',
    historicalSignificance: 'Item fundamental na revolução da banda larga doméstica, utilizando a infraestrutura telefônica existente para levar velocidades maiores de internet para o consumidor.'
  },
  {
    id: '54',
    name: 'ROUTER DE BANDA LARGA WIRELESS-G COMPACTOR',
    category: 'rede',
    year: '2003-2008',
    manufacturer: 'Linksys',
    description: 'Roteador de rede sem fio (wireless) Linksys, operando no padrão Wireless-G (802.11g) a 54 Mbps, usado para compartilhar uma conexão de internet com múltiplos dispositivos.',
    detailedDescription: 'Possuía portas Ethernet com fio e capacidade Wi-Fi. O padrão 802.11g era a tecnologia sem fio dominante, oferecendo velocidades suficientes para navegação e streaming da época. A Linksys foi líder de mercado nesse período. Seu design compacto facilitava o uso doméstico.',
    technicalSpecs: [
      'Tipo: Roteador Wireless de Banda Larga',
      'Padrão Wi-Fi: Wireless-G (802.11g)',
      'Velocidade: Até 54 Mbps',
      'Portas: Porta WAN (Internet), Portas LAN (Ethernet)',
      'Uso Principal: Compartilhamento de internet e criação de rede local sem fio'
    ],
    imageUrl: '/assets/hardware/ROUTER DE BANDA LARGA WIRELESS-G COMPACTOR.jpg',
    documentationUrl: '',
    historicalSignificance: 'Catalisador da revolução da conectividade sem fio, tornando o Wi-Fi doméstico acessível e popular. Proporcionou liberdade de movimento e permitiu o compartilhamento de internet entre múltiplos dispositivos.'
  },
  {
    id: '55',
    name: 'CELULAR BLU STUDIO 5.0',
    category: 'comunicacao',
    year: '2013-2015',
    manufacturer: 'BLU Products',
    description: 'Smartphone Android com tela de 5.0 polegadas, focado no segmento de entrada e intermediário, conhecido por seu custo-benefício e funcionalidade Dual SIM.',
    detailedDescription: 'Oferecia a experiência completa de um smartphone (acesso a aplicativos, internet móvel) a um preço acessível. O design com tela sensível ao toque e a ausência de teclado físico refletiam a tendência de mercado. Era muito popular em mercados emergentes (como o Brasil) pela sua acessibilidade.',
    technicalSpecs: [
      'Tipo: Smartphone Android',
      'Tela: 5.0 polegadas (sensível ao toque)',
      'Interface: Touchscreen, Botões virtuais/capacitivos',
      'Uso Principal: Aplicativos, Redes Sociais, Comunicação, Internet móvel'
    ],
    imageUrl: '/assets/hardware/CELULAR BLU STUDIO 5.0.jpg',
    documentationUrl: 'https://www.tudocelular.com/Blu/precos/n2902/Blu-Studio-5-0.html',
    historicalSignificance: 'Foi um dos aparelhos-chave na democratização dos smartphones Android, levando a tecnologia de tela sensível ao toque e o acesso a aplicativos para uma fatia maior da população.'
  },
  {
    id: '56',
    name: 'CELULAR SAMSUNG GALAXY ACE 4 DUOS',
    category: 'comunicacao',
    year: '2014-2016',
    manufacturer: 'Samsung',
    description: 'Smartphone Android de entrada da linha Galaxy Ace, com a notável funcionalidade "Duos" (Dual SIM), permitindo o uso de dois chips de operadoras diferentes.',
    detailedDescription: 'Oferecia uma experiência Android completa e confiável, com design característico da Samsung da época (bordas arredondadas e botão Home físico). Foi muito bem-sucedido em mercados emergentes, onde o Dual SIM era um diferencial competitivo importante para a otimização de custos e conveniência.',
    technicalSpecs: [
      'Tipo: Smartphone Android',
      'Linha: Galaxy Ace',
      'Funcionalidade: Dual SIM (Duos)',
      'Interface: Tela sensível ao toque, Botão Home físico'
    ],
    imageUrl: '/assets/hardware/CELULAR SAMSUNG GALAXY ACE 4 DUOS.jpg',
    documentationUrl: 'https://www.tudocelular.com/Samsung/precos/n2914/Samsung-Galaxy-Ace-4-Duos.html',
    historicalSignificance: 'Contribuiu significativamente para a expansão do Android em mercados de massa. Sua popularidade demonstrou a demanda por smartphones Dual SIM acessíveis de marcas consolidadas.'
  },
  {
    id: '57',
    name: 'CELULAR MOTOROLA MOTO G2',
    category: 'comunicacao',
    year: '2014-2016',
    manufacturer: 'Motorola',
    description: 'Smartphone Android da 2ª Geração da linha Moto G, que redefiniu o segmento intermediário com software otimizado (Android "puro"), bom hardware e alto-falantes estéreo frontais.',
    detailedDescription: 'Conhecido por seu excelente custo-benefício e por receber atualizações de software mais rápidas. O design com alto-falantes estéreo frontais aprimorava a experiência multimídia. Foi um fenômeno de vendas, especialmente no Brasil, estabelecendo um novo padrão de qualidade para smartphones acessíveis.',
    technicalSpecs: [
      'Tipo: Smartphone Android',
      'Modelo: Moto G (2ª Geração)',
      'Software: Android "Puro" (poucas modificações)',
      'Recursos de Áudio: Alto-falantes estéreo frontais'
    ],
    imageUrl: '/assets/hardware/CELULAR MOTOROLA MOTO G2.jpg',
    documentationUrl: 'https://www.youtube.com/watch?v=ZJew7btyS-c',
    historicalSignificance: 'Revolucionou o segmento intermediário de smartphones, provando que é possível oferecer qualidade e atualizações consistentes a um preço acessível. Revitalizou a marca Motorola no mercado global.'
  },
  {
    id: '58',
    name: 'IMPRESSORA HP DESKJET 930C',
    category: 'periferico',
    year: '1999-2003',
    manufacturer: 'HP (Hewlett-Packard)',
    description: 'Impressora jato de tinta colorida para uso doméstico e em pequenos escritórios, oferecendo impressão de alta resolução em cores a um preço acessível.',
    detailedDescription: 'Conectava-se via porta paralela ou USB e utilizava cartuchos de tinta separados. Foi um modelo crucial na popularização das impressoras jato de tinta coloridas em detrimento das matriciais, tornando a impressão de fotos e gráficos coloridos acessível ao público geral.',
    technicalSpecs: [
      'Tecnologia: Jato de Tinta Colorida',
      'Modelo: DeskJet 930C',
      'Conexão: Paralela ou USB (dependendo da versão)',
      'Uso Principal: Documentos escolares, fotos domésticas, gráficos'
    ],
    imageUrl: '/assets/hardware/IMPRESSORA HP DESKJET 930C.jpg',
    documentationUrl: '',
    historicalSignificance: 'Fundamental para a popularização da impressão colorida de alta qualidade em casa e em pequenos escritórios, consolidando a HP como líder no mercado de impressoras de consumo.'
  },
  {
    id: '59',
    name: 'RELÓGIO FLIP VINTAGE ESKA',
    category: 'outros',
    year: '1970-1985',
    manufacturer: 'Eska',
    description: 'Relógio de mesa ou de cabeceira que indica as horas e minutos através de abas ou palhetas que viram mecanicamente ("flip clock"), com som e movimento visual característicos.',
    detailedDescription: 'Representava uma tecnologia de transição entre os relógios analógicos e os digitais. O design "flip" é um ícone do design *mid-century modern* e retro-futurista. O mecanismo de abas virando (o "flip") cria um charme sonoro único.',
    technicalSpecs: [
      'Tipo: Relógio Eletromecânico (Flip Clock)',
      'Mecanismo: Abas/Palhetas que viram mecanicamente',
      'Uso Principal: Cronometragem doméstica e de escritório'
    ],
    imageUrl: '/assets/hardware/RELÓGIO FLIP VINTAGE ESKA.jpg',
    documentationUrl: '',
    historicalSignificance: 'Reflete uma fase intermediária na evolução da cronometragem, sendo um símbolo de design icônico e funcionalidade mecânica na era pré-digital.'
  },
  {
    id: '60',
    name: 'AMPLIFICADOR ESTÉREO PIONEER A-P510',
    category: 'multimidia',
    year: '1989-1994',
    manufacturer: 'Pioneer',
    description: 'Amplificador estéreo que faz parte de um sistema de áudio modular (separados), responsável por aumentar a potência do sinal de áudio para os alto-falantes.',
    detailedDescription: 'Projetado para ser empilhado com outros componentes Pioneer (CD player, sintonizador, deck cassete). Oferecia qualidade de áudio superior à dos mini systems compactos, com flexibilidade de componentes separados. A Pioneer era uma marca líder em áudio de alta fidelidade.',
    technicalSpecs: [
      'Tipo: Amplificador Estéreo (Componente Separado)',
      'Modelo: A-P510',
      'Uso: Sistemas de Áudio Modulares (Mini Systems)',
      'Função: Amplificação de potência para alto-falantes'
    ],
    imageUrl: '/assets/hardware/AMPLIFICADOR ESTÉREO PIONEER A-P510.jpg',
    documentationUrl: 'https://www.mercadolivre.com.br/som-integrado-pioneer-ap510-pioneer-japan/up/MLBU1465933231',
    historicalSignificance: 'Representa a era do áudio estéreo de alta fidelidade e a tendência de sistemas modulares. Sua qualidade de áudio superior era o padrão para o consumo de música doméstica antes do boom dos formatos digitais portáteis.'
  },
  {
    id: '61',
    name: 'PROCESSADORES (Diversas Gerações)',
    category: 'processador',
    year: '1995-2015',
    manufacturer: 'Intel / AMD',
    description: 'Diversos processadores (CPU - Central Processing Unit) de diferentes gerações e fabricantes, o coração de qualquer computador, responsável por executar instruções e processar dados.',
    detailedDescription: 'Inclui modelos mais antigos (PGA, como Pentium, Athlon) e mais recentes (como AMD APU, com logo Vision, em embalagem LGA/PGA). A variedade ilustra o rápido avanço na miniaturização e no aumento da capacidade de processamento (Lei de Moore). Sua existência em módulos separados permitia a montagem e atualização de PCs.',
    technicalSpecs: [
      'Tipo: CPU (Central Processing Unit)',
      'Arquiteturas: x86, x64 (Diversas gerações)',
      'Fatores de Forma: PGA (Pin Grid Array) e LGA (Land Grid Array - inferido)',
      'Uso: Computadores Desktop e Notebooks'
    ],
    imageUrl: '/assets/hardware/PROCESSADORES.jpg',
    documentationUrl: '',
    historicalSignificance: 'Testemunha o crescimento exponencial do poder de processamento. A competição entre Intel e AMD, visível pela variedade, impulsionou a inovação e o barateamento da tecnologia de processamento.'
  },
  {
    id: '62',
    name: 'PLACA PCI WIRELESS-G 54MBPS ENCORE ENLWI-G2',
    category: 'rede',
    year: '2004-2007',
    manufacturer: 'Encore',
    description: 'Placa de rede sem fio (wireless) interna para slot PCI, operando no padrão Wireless-G (802.11g) a 54 Mbps, permitindo que desktops se conectassem a redes Wi-Fi.',
    detailedDescription: 'Possuía uma antena externa para captação de sinal. O padrão 802.11g oferecia velocidades significativas para a época, sendo um avanço em relação ao 802.11b. Foi uma solução modular para adicionar conectividade sem fio a PCs mais antigos ou que não vinham com Wi-Fi integrado.',
    technicalSpecs: [
      'Interface: PCI (Peripheral Component Interconnect)',
      'Padrão Wi-Fi: Wireless-G (802.11g)',
      'Velocidade: 54 Mbps',
      'Conexão: Antena externa',
      'Uso Principal: Adicionar Wi-Fi a PCs Desktop'
    ],
    imageUrl: '/assets/hardware/PLACA PCI WIRELESS-G 54MBPS ENCORE ENLWI-G2.jpg',
    documentationUrl: '',
    historicalSignificance: 'Tornou o acesso Wi-Fi acessível e prático para usuários de computadores desktop, contribuindo para a transição de redes totalmente cabeadas para redes sem fio em residências e escritórios.'
  },
  {
    id: '63',
    name: 'MEMÓRIA RAM (Diversas Gerações)',
    category: 'memoria',
    year: '1998-2008',
    manufacturer: 'Hynix (Inferido) / EltronTech',
    description: 'Módulos de memória RAM (Random Access Memory) de diferentes capacidades e gerações, usados como memória volátil para a execução de tarefas do computador.',
    detailedDescription: 'Inclui um módulo de 1GB DDR2 (SODIMM, para notebooks, da Hynix - HMP112S64CP6-S6) e um módulo de 128MB (provavelmente SDRAM ou DDR1, para desktops). A diferença de 128MB para 1GB em poucos anos ilustra o crescimento exponencial da capacidade de memória, essencial para acompanhar a demanda de software.',
    technicalSpecs: [
      'Tipo: DDR2 SDRAM (Módulo de 1GB), SDRAM/DDR1 (Módulo de 128MB)',
      'Capacidades: 1GB e 128MB',
      'Formatos: SODIMM (Notebook) e DIMM (Desktop - Inferido)',
      'Uso: Memória de trabalho temporária do sistema'
    ],
    imageUrl: '/assets/hardware/MEMÓRIA RAM.jpg',
    documentationUrl: '',
    historicalSignificance: 'Componente crítico que ilustra a rápida evolução da capacidade e velocidade da memória (DDR2 é mais rápido que DDR1), sendo fundamental para o aumento da multitarefa e o desempenho geral dos PCs.'
  }
];

export const categories: { id: HardwareCategory; name: string; icon: string }[] = [
  { id: 'placa-mae', name: 'Placas-Mãe', icon: '💻' },
  { id: 'processador', name: 'Processadores', icon: '🧠' },
  { id: 'placa-video', name: 'Placas de Vídeo', icon: '📺' },
  { id: 'periferico', name: 'Periféricos', icon: '⌨️' },
  { id: 'armazenamento', name: 'Armazenamento', icon: '💽' },
  { id: 'memoria', name: 'Memórias', icon: '💡' },
  { id: 'rede', name: 'Rede e Conectividade', icon: '📶' },
  { id: 'comunicacao', name: 'Comunicação Móvel', icon: '📱' },
  { id: 'multimidia', name: 'Áudio e Vídeo', icon: '🔊' },
  { id: 'computador', name: 'Sistemas Completos', icon: '🖥️' },
  { id: 'outros', name: 'Outros Itens Históricos', icon: '🕰️' }
];