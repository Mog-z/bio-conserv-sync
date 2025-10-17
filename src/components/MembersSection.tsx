import { ExternalLink } from "lucide-react";
import memberPlaceholder from "@/assets/member-placeholder.jpg";
import { Button } from "@/components/ui/button";

const members = [
  {
    name: "Dr. Maria Silva",
    role: "Principal Investigator",
    expertise: "Molecular Biology & Conservation Genetics",
    image: memberPlaceholder,
  },
  {
    name: "Dr. João Santos",
    role: "Senior Researcher",
    expertise: "Environmental Microbiology & Bioremediation",
    image: memberPlaceholder,
  },
  {
    name: "Dr. Ana Costa",
    role: "Research Coordinator",
    expertise: "Genomics & Biodiversity Analysis",
    image: memberPlaceholder,
  },
  {
    name: "Dr. Carlos Oliveira",
    role: "Associate Researcher",
    expertise: "Ecosystem Biotechnology & Sustainability",
    image: memberPlaceholder,
  },
];

const MembersSection = () => {
  return (
    <section id="members" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated researchers and scientists driving innovation in biotechnology and
            conservation at INCT CERBC.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div
              key={member.name}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.expertise}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
                >
                  <span>View Profile</span>
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
