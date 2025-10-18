const institutions = [
  // Federal Universities
  { name: "Universidade Federal do Paraná", shortName: "UFPR", url: "https://ufpr.br/", logo: "https://static.wixstatic.com/media/9b2aef_e95836d997fe4b35b880030ade291166~mv2.png" },
  { name: "Universidade Tecnológica Federal do Paraná", shortName: "UTFPR", url: "https://www.utfpr.edu.br/", logo: "https://static.wixstatic.com/media/9b2aef_c4ec5806b5c94906a2d1c767cfb4b539~mv2.png" },
  { name: "Universidade Federal de São Paulo", shortName: "UNIFESP", url: "https://portal.unifesp.br/", logo: "https://static.wixstatic.com/media/9b2aef_e8a9af537aec4f128d4b842d5ab3bd66~mv2.png" },
  { name: "Universidade Federal da Integração Latino-Americana", shortName: "UNILA", url: "https://portal.unila.edu.br/", logo: "https://static.wixstatic.com/media/9b2aef_805bedad0bd24df1b9b695dfa486acf3~mv2.png" },
  { name: "Universidade Federal da Grande Dourados", shortName: "UFGD", url: "https://portal.ufgd.edu.br/", logo: "https://static.wixstatic.com/media/9b2aef_7cc731a02d1b4ab190f774939630ffe9~mv2.png" },
  { name: "Universidade Federal de Mato Grosso do Sul", shortName: "UFMS", url: "https://www.ufms.br/", logo: "https://static.wixstatic.com/media/9b2aef_294bdbedc41849bcba434cfe02ad1baa~mv2.jpg" },
  { name: "Universidade Federal de Pernambuco", shortName: "UFPE", url: "https://www.ufpe.br/", logo: "https://static.wixstatic.com/media/9b2aef_daeed5bfe66d44259a9737119f89ffa5~mv2.png" },
  { name: "Universidade Federal de Santa Catarina", shortName: "UFSC", url: "https://ufsc.br/", logo: "https://static.wixstatic.com/media/9b2aef_85c5f02f01364547a722af57e6092be8~mv2.png" },
  { name: "Universidade Federal do Piauí", shortName: "UFPI", url: "https://www.ufpi.br/", logo: "https://static.wixstatic.com/media/9b2aef_bb54f384b8024e7896f4ca397538a671~mv2.png" },
  { name: "Universidade Federal do Maranhão", shortName: "UFMA", url: "https://portalpadrao.ufma.br/", logo: "https://static.wixstatic.com/media/9b2aef_16e3e7ec13c44d9da30ec1547ec7df9e~mv2.png" },
  
  // State Universities
  { name: "Universidade Estadual Paulista - Faculdade de Ciências Agronômicas", shortName: "FCA-UNESP", url: "https://www.fca.unesp.br/", logo: "https://static.wixstatic.com/media/9b2aef_c8ccfe67faaf47169e73ad1943a4583d~mv2.png" },
  { name: "Universidade Estadual de Maringá", shortName: "UEM", url: "https://www.uem.br/", logo: "https://static.wixstatic.com/media/9b2aef_aa867fa30ce84e77a86e083ee0591882~mv2.png" },
  { name: "Universidade Estadual de Londrina", shortName: "UEL", url: "https://portal.uel.br/", logo: "https://static.wixstatic.com/media/9b2aef_e1e735bc7cf341d797614c67cc03fb59~mv2.png" },
  
  // National Partners
  { name: "Embrapa Florestas", shortName: "EMBRAPA", url: "https://www.embrapa.br/florestas", logo: "https://static.wixstatic.com/media/9b2aef_03ea14c49f3844f680761bcbd74ca131~mv2.png" },
  { name: "Fundação Oswaldo Cruz", shortName: "FIOCRUZ", url: "https://fiocruz.br/", logo: "https://static.wixstatic.com/media/9b2aef_58d9972457fb4a9b8232e829e2c9f9c4~mv2.png" },
  { name: "Hospital Pequeno Príncipe", shortName: "PEQUENO PRÍNCIPE", url: "https://pequenoprincipe.org.br/", logo: "https://static.wixstatic.com/media/9b2aef_12326304a12044a78aac774a700f7c0f~mv2.png" },
  { name: "Fundação de Medicina Tropical Dr. Heitor Vieira Dourado", shortName: "FMT-HVD", url: "https://www.fmt.am.gov.br/", logo: "https://static.wixstatic.com/media/9b2aef_87e8dd9182284a66ad5755f0aa76b30b~mv2.png" },
  
  // International Partners
  { name: "Università degli Studi della Tuscia", shortName: "UNITUS", url: "https://www.unitus.it/en/", logo: "https://static.wixstatic.com/media/9b2aef_90594363aa514b3d8f8f1d659da91a3f~mv2.png" },
  { name: "Westerdijk Fungal Biodiversity Institute", shortName: "WESTERDIJK", url: "https://wi.knaw.nl/", logo: "https://static.wixstatic.com/media/9b2aef_ccfa02539a3443dfac4169b5ec4cbb3e~mv2.png" },
  { name: "Red Iberoamericana de Investigadores en Micología", shortName: "RIMICO", url: "https://riimico.org/pt/rede-ibero-americana-de-pesquisadores-em-micologia/", logo: "https://static.wixstatic.com/media/9b2aef_d04b99324b5941ec895495af323601c9~mv2.png" },
  { name: "University of Minnesota Twin Cities", shortName: "MINNESOTA", url: "https://twin-cities.umn.edu/", logo: "https://static.wixstatic.com/media/9b2aef_c9f60c39d40741e6af31e0d45c4a403e~mv2.png" },
  { name: "University of Ljubljana", shortName: "LJUBLJANA", url: "https://www.uni-lj.si/en/university", logo: "https://static.wixstatic.com/media/9b2aef_e8aa3bf840b24f9eb1021f1d1756792b~mv2.png" },
  { name: "Third Military Medical University", shortName: "TMMU", url: "https://www.at0086.com/tsmmu/", logo: "https://static.wixstatic.com/media/9b2aef_b8f61c7365a7420282df9c46413c10a5~mv2.png" },
  { name: "Universidade do Minho", shortName: "UMINHO", url: "https://www.uminho.pt/PT", logo: "https://static.wixstatic.com/media/9b2aef_201f4ad5a4e348e98c89bbb71cf99692~mv2.png" },
  { name: "Universidad Americana", shortName: "AMERICANA", url: "https://www.americana.edu.py/", logo: "https://static.wixstatic.com/media/9b2aef_28d16eaea45344c88d1123a11a709322~mv2.png" },
  { name: "Universidad de La Frontera", shortName: "UFRO", url: "https://www.ufro.cl/", logo: "https://static.wixstatic.com/media/9b2aef_f17fd038e26347c798523cd275d29efb~mv2.png" },
];

const InstitutionsSection = () => {
  return (
    <section id="institutions" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Partner Institutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collaborating with {institutions.length} leading Brazilian and international universities and research institutions to advance
            biotechnology and conservation science.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {institutions.map((institution, index) => (
            <a
              key={institution.name}
              href={institution.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col items-center justify-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 30}ms` }}
              aria-label={`Visit ${institution.name} website`}
            >
              {institution.logo ? (
                <img 
                  src={institution.logo} 
                  alt={`${institution.shortName} logo`}
                  className="w-24 h-24 object-contain mb-3 group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              ) : (
                <div className="text-3xl lg:text-4xl font-bold text-primary/20 group-hover:text-primary/60 transition-colors mb-2 group-hover:scale-110 transform duration-300">
                  {institution.shortName}
                </div>
              )}
              <p className="text-xs lg:text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
                {institution.name}
              </p>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Click on any institution to visit their official website
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstitutionsSection;
