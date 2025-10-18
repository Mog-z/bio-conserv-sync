import { Target, Eye, Award } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To advance biotechnology research and innovation focused on environmental conservation, developing sustainable solutions for biodiversity preservation and ecosystem restoration through interdisciplinary collaboration and cutting-edge scientific methodologies.",
    },
    {
      icon: Eye,
      title: "Vision",
      description:
        "To be a globally recognized leader in biotechnology and conservation research, pioneering transformative solutions that harmonize scientific progress with environmental sustainability, inspiring the next generation of researchers and practitioners.",
    },
    {
      icon: Award,
      title: "Values",
      description:
        "Excellence in research, ethical responsibility, collaborative innovation, environmental stewardship, and commitment to scientific integrity. We champion open science, interdisciplinary approaches, and the translation of research into practical conservation outcomes.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About INCT CERBC</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The National Institute of Science and Technology - Center of Excellence in Research on
            Biotechnology and Conservation (INCT CERBC) represents a pioneering initiative at the
            intersection of biotechnology, microbiology, and environmental conservation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Our multidisciplinary center brings together leading researchers, innovative
            technologies, and collaborative partnerships to address critical challenges in
            biodiversity conservation and environmental sustainability. Through advanced molecular
            techniques, genomic analysis, and ecological research, we develop practical solutions
            for preserving Earth's biological heritage.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            By integrating fundamental research with applied conservation strategies, INCT CERBC
            serves as a hub for scientific excellence, fostering innovation that bridges laboratory
            discoveries with real-world environmental impact.
          </p>
          
          <div className="bg-background p-8 rounded-xl border border-border mt-8">
            <h3 className="text-2xl font-bold mb-4">Research Areas</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-2 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Microbiology & Parasitology</h4>
                  <p className="text-sm text-muted-foreground">Study of microorganisms and parasites of clinical and environmental importance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-2 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Biodiversity Conservation</h4>
                  <p className="text-sm text-muted-foreground">Preservation of Brazilian ecosystems and endemic species</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-2 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Biotechnology Applications</h4>
                  <p className="text-sm text-muted-foreground">Development of biotechnological solutions for environmental challenges</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-2 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Bioinformatics & Genomics</h4>
                  <p className="text-sm text-muted-foreground">Advanced computational analysis of biological data</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-xl border border-primary/20 mt-8">
            <h3 className="text-2xl font-bold mb-4">International Partnerships</h3>
            <p className="text-muted-foreground leading-relaxed">
              INCT CERBC maintains active collaborations with research institutions across the globe, 
              fostering knowledge exchange and joint research initiatives. Our international network 
              enables us to address global conservation challenges while contributing to Brazil's 
              scientific leadership in biotechnology and environmental research.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="bg-background p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
