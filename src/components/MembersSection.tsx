import { useState } from "react";
import { ExternalLink } from "lucide-react";
import memberPlaceholder from "@/assets/member-placeholder.jpg";
import { Button } from "@/components/ui/button";

// Sample members - in production, this would come from a database
const allMembers = [
  {
    name: "Dr. Maria Silva",
    role: "Principal Investigator",
    institution: "USP",
    expertise: "Molecular Biology & Conservation Genetics",
    image: memberPlaceholder,
  },
  {
    name: "Dr. João Santos",
    role: "Senior Researcher",
    institution: "UFRJ",
    expertise: "Environmental Microbiology & Bioremediation",
    image: memberPlaceholder,
  },
  {
    name: "Dr. Ana Costa",
    role: "Research Coordinator",
    institution: "UNICAMP",
    expertise: "Genomics & Biodiversity Analysis",
    image: memberPlaceholder,
  },
  {
    name: "Dr. Carlos Oliveira",
    role: "Associate Researcher",
    institution: "FIOCRUZ",
    expertise: "Ecosystem Biotechnology & Sustainability",
    image: memberPlaceholder,
  },
  // Additional sample members to demonstrate pagination
  ...Array.from({ length: 100 }, (_, i) => ({
    name: `Dr. Researcher ${i + 5}`,
    role: i % 3 === 0 ? "Senior Researcher" : i % 3 === 1 ? "Research Associate" : "Postdoctoral Fellow",
    institution: ["USP", "UFRJ", "UNICAMP", "FIOCRUZ", "UFMG"][i % 5],
    expertise: [
      "Molecular Biology",
      "Conservation Genetics",
      "Microbiology",
      "Biodiversity",
      "Biotechnology",
      "Bioinformatics"
    ][i % 6],
    image: memberPlaceholder,
  }))
];

const MembersSection = () => {
  const [displayCount, setDisplayCount] = useState(8);
  const hasMore = displayCount < allMembers.length;

  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + 8, allMembers.length));
  };

  return (
    <section id="members" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Meet the 104 dedicated researchers and scientists driving innovation in biotechnology and
            conservation at INCT CERBC.
          </p>
          <p className="text-sm text-muted-foreground">
            Showing {displayCount} of {allMembers.length} members
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allMembers.slice(0, displayCount).map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 animate-scale-in"
              style={{ animationDelay: `${(index % 8) * 50}ms` }}
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1 line-clamp-1">{member.name}</h3>
                <p className="text-primary font-semibold text-sm mb-1">{member.role}</p>
                <p className="text-xs text-muted-foreground mb-2">{member.institution}</p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{member.expertise}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
                >
                  <span>View Profile</span>
                  <ExternalLink className="h-3 w-3 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-12 animate-fade-in">
            <Button
              onClick={loadMore}
              size="lg"
              variant="outline"
              className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              Load More Members ({allMembers.length - displayCount} remaining)
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MembersSection;
