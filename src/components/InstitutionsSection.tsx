const institutions = [
  { name: "University of São Paulo", shortName: "USP" },
  { name: "Federal University of Rio de Janeiro", shortName: "UFRJ" },
  { name: "State University of Campinas", shortName: "UNICAMP" },
  { name: "Brazilian Research Institute", shortName: "BRI" },
  { name: "National Council for Scientific Development", shortName: "CNPq" },
  { name: "São Paulo Research Foundation", shortName: "FAPESP" },
  { name: "Brazilian Biodiversity Institute", shortName: "BBI" },
  { name: "Amazon Research Center", shortName: "ARC" },
];

const InstitutionsSection = () => {
  return (
    <section id="institutions" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Partner Institutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collaborating with leading universities and research institutions to advance
            biotechnology and conservation science.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {institutions.map((institution, index) => (
            <a
              key={institution.name}
              href="#"
              className="group bg-background p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col items-center justify-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors mb-2">
                {institution.shortName}
              </div>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {institution.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitutionsSection;
