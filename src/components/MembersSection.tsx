import { ExternalLink } from "lucide-react";
import memberPlaceholder from "@/assets/member-placeholder.jpg";
import { Button } from "@/components/ui/button";

const memberGroups = [
  {
    category: "Coordinators & Headquarter",
    members: [
      {
        name: "Vania Aparecida Vicente",
        position: "Coordinator",
        institution: "Microbiological Collections of Paraná Network - Taxonline & Federal University of Paraná",
        lattes: "http://lattes.cnpq.br/0790054254083889",
      },
      {
        name: "Walter Antonio Boeger",
        position: "Deputy Coordinator",
        institution: "Federal University of Paraná",
        lattes: "http://lattes.cnpq.br/0836102710733302",
      },
    ],
  },
  {
    category: "Scientific Officer",
    members: [
      {
        name: "Germana Davila dos Santos",
        position: "Scientific Officer",
        institution: "Federal University of Paraná",
        lattes: "http://lattes.cnpq.br/4167081362896236",
      },
    ],
  },
  {
    category: "Focal Team",
    members: [
      {
        name: "Ani Beatriz Jackisch Matsuura",
        position: "Focal Team Coordinator",
        institution: "Fiocruz Amazônia – Leonidas and Maria Deane Research Center",
        lattes: "http://lattes.cnpq.br/3938024920881674",
      },
      {
        name: "Colombo",
        position: "Focal Team Coordinator",
        institution: "Federal University of Paraná",
        lattes: "http://lattes.cnpq.br/2132609720093419",
      },
      {
        name: "Conceição de Maria P. e Silva de Azevedo",
        position: "Focal Team Coordinator",
        institution: "Federal University of Maranhão",
        lattes: "http://lattes.cnpq.br/0781878501103357",
      },
      {
        name: "Cristina Maria de Souza Motta",
        position: "Focal Team Coordinator",
        institution: "Federal University of Pernambuco",
        lattes: "http://lattes.cnpq.br/9229613533462311",
      },
      {
        name: "James Venturini",
        position: "Focal Team Coordinator",
        institution: "Federal University of Mato Grosso do Sul",
        lattes: "http://lattes.cnpq.br/7844714766949972",
      },
    ],
  },
  {
    category: "Researchers & Associates",
    members: [
      {
        name: "Camila Marcon",
        position: "Researcher",
        institution: "Federal University of Paraná",
        lattes: "http://lattes.cnpq.br/2439951126870898",
      },
      {
        name: "Chirlei Glienke",
        position: "Researcher",
        institution: "Federal University of Paraná",
        lattes: "http://lattes.cnpq.br/6592581685493038",
      },
      {
        name: "Flávio de Queiroz-Telles",
        position: "Researcher",
        institution: "Hospital de Clínicas / Federal University of Paraná",
        lattes: "http://lattes.cnpq.br/0111936868262951",
      },
      {
        name: "Juliana Vitória Messias Bittencourt",
        position: "Researcher",
        institution: "Microbiological Collections of Paraná Network - Taxonline & Federal University of Technology - Paraná",
        lattes: "http://lattes.cnpq.br/5844979052853050",
      },
      {
        name: "Keite da Silva Nogueira",
        position: "Researcher",
        institution: "Hospital de Clínicas / Federal University of Paraná",
        lattes: "http://lattes.cnpq.br/7658983324414428",
      },
      {
        name: "Louise Larissa May De Mio",
        position: "Researcher",
        institution: "Federal University of Paraná",
        lattes: "http://lattes.cnpq.br/5306520242222948",
      },
    ],
  },
];

const MembersSection = () => {
  return (
    <section id="members" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">INCT-CERBC Members</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated researchers and scientists driving innovation in biotechnology and
            conservation at INCT CERBC.
          </p>
          <p className="text-lg font-semibold text-primary mt-4">Total: 101 Members</p>
        </div>

        {memberGroups.map((group, groupIndex) => (
          <div
            key={group.category}
            className="mb-16 animate-fade-in"
            style={{ animationDelay: `${groupIndex * 100}ms` }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-primary">
              INCT-CERBC – {group.category}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {group.members.map((member, index) => (
                <div
                  key={member.name + index}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-lg animate-scale-in"
                  style={{ animationDelay: `${(groupIndex * 100) + (index * 50)}ms` }}
                >
                  <div className="p-6">
                    <h4 className="text-lg font-bold mb-2 text-foreground">{member.name}</h4>
                    <p className="text-primary font-semibold mb-2 text-sm">{member.position}</p>
                    <p className="text-xs text-muted-foreground mb-4 line-clamp-3">
                      {member.institution}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <a href={member.lattes} target="_blank" rel="noopener noreferrer">
                        <span>View Lattes</span>
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MembersSection;
