const institutions = [
  { name: "Universidade de São Paulo", shortName: "USP", url: "https://www5.usp.br/" },
  { name: "Universidade Federal do Rio de Janeiro", shortName: "UFRJ", url: "https://ufrj.br/" },
  { name: "Universidade Estadual de Campinas", shortName: "UNICAMP", url: "https://www.unicamp.br/" },
  { name: "Fundação Oswaldo Cruz", shortName: "FIOCRUZ", url: "https://portal.fiocruz.br/" },
  { name: "Universidade Federal de Minas Gerais", shortName: "UFMG", url: "https://ufmg.br/" },
  { name: "Universidade Federal do Paraná", shortName: "UFPR", url: "https://www.ufpr.br/" },
  { name: "Universidade Federal do Rio Grande do Sul", shortName: "UFRGS", url: "https://www.ufrgs.br/" },
  { name: "Universidade Federal de Santa Catarina", shortName: "UFSC", url: "https://ufsc.br/" },
  { name: "Universidade de Brasília", shortName: "UnB", url: "https://www.unb.br/" },
  { name: "Universidade Federal da Bahia", shortName: "UFBA", url: "https://www.ufba.br/" },
  { name: "Universidade Federal de Pernambuco", shortName: "UFPE", url: "https://www.ufpe.br/" },
  { name: "Universidade Federal do Ceará", shortName: "UFC", url: "https://www.ufc.br/" },
  { name: "Universidade Federal do Amazonas", shortName: "UFAM", url: "https://ufam.edu.br/" },
  { name: "Universidade Federal do Pará", shortName: "UFPA", url: "https://portal.ufpa.br/" },
  { name: "Universidade Federal de Goiás", shortName: "UFG", url: "https://www.ufg.br/" },
  { name: "Universidade Federal do Espírito Santo", shortName: "UFES", url: "https://www.ufes.br/" },
  { name: "Universidade Federal de São Paulo", shortName: "UNIFESP", url: "https://www.unifesp.br/" },
  { name: "Universidade Federal de Viçosa", shortName: "UFV", url: "https://www.ufv.br/" },
  { name: "Universidade Estadual Paulista", shortName: "UNESP", url: "https://www.unesp.br/" },
  { name: "Pontifícia Universidade Católica", shortName: "PUC", url: "https://www.puc-rio.br/" },
  { name: "Instituto Butantan", shortName: "BUTANTAN", url: "https://butantan.gov.br/" },
  { name: "Embrapa", shortName: "EMBRAPA", url: "https://www.embrapa.br/" },
  { name: "Instituto Nacional de Pesquisas da Amazônia", shortName: "INPA", url: "https://www.gov.br/inpa/" },
  { name: "Centro Nacional de Pesquisa e Conservação da Biodiversidade", shortName: "ICMBio", url: "https://www.gov.br/icmbio/" },
  { name: "Instituto Evandro Chagas", shortName: "IEC", url: "https://www.gov.br/iec/" },
  { name: "Fundação de Amparo à Pesquisa do Estado de São Paulo", shortName: "FAPESP", url: "https://fapesp.br/" },
  { name: "Conselho Nacional de Desenvolvimento Científico", shortName: "CNPq", url: "https://www.gov.br/cnpq/" },
];

const InstitutionsSection = () => {
  return (
    <section id="institutions" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Partner Institutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collaborating with 27 leading Brazilian universities and research institutions to advance
            biotechnology and conservation science across the nation.
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
              <div className="text-3xl lg:text-4xl font-bold text-primary/20 group-hover:text-primary/60 transition-colors mb-2 group-hover:scale-110 transform duration-300">
                {institution.shortName}
              </div>
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
