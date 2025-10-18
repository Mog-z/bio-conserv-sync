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
          National Institute of Science, Technology, and Innovation dedicated to biotechnology and conservation.
        </p>
      </div>
      
      {/* General Objective */}
      <div className="mb-16 max-w-5xl mx-auto animate-fade-in">
        <h3 className="text-3xl font-bold mb-6 text-center">General Objective</h3>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            Explore the biotechnological potential of species of microorganisms and parasites of clinical and environmental origin that make up Brazilian biodiversity, as well as those from collections of other countries through international institutions associated with this proposal. INCT-CERBC aims to explore the potential of autochthonous isolates, type and reference strains, plasmid collections, mammalian cell cultures, and biological data banks, including DNA and RNA, to expand the databases and provide information on the biodiversity of the collections.
          </p>
          <p>
            The institute plans to bring together expertise to ensure the organization, structuring, and curation of networked collections, aiding in the preservation of biological material and the identification of agents of clinical interest with integrated data bases to elucidate epidemiological aspects, identify markers of virulence and resistance, and establish surveillance and monitoring strategies for the resistance profile of clinical and environmental isolates.
          </p>
        </div>
      </div>

      {/* Thematic Areas */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold mb-8 text-center">Thematic Areas</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-in">
            <div className="text-primary mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Microbiological Collections</h3>
            <p className="text-muted-foreground mb-4">
              Conservation of Biological Resources through organized, structured, and curated networked collections.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="text-primary mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Biodiversity & Eco-epidemiology</h3>
            <p className="text-muted-foreground mb-4">
              Based on omics sciences to elucidate epidemiological aspects and identify markers of virulence and resistance.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="text-primary mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Biotechnology</h3>
            <p className="text-muted-foreground mb-4">
              Product Development and Technological Innovation exploring the potential of biological resources.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="text-primary mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Bioinformatics & AI</h3>
            <p className="text-muted-foreground mb-4">
              Artificial Intelligence approach to expand databases and make biodiversity information available.
            </p>
          </div>
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
