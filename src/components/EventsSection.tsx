import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "International Symposium on Conservation Biotechnology",
    date: "June 15-17, 2025",
    location: "São Paulo, Brazil",
    description:
      "Join leading researchers and practitioners for three days of cutting-edge presentations on molecular conservation, genomic approaches to biodiversity preservation, and innovative biotechnology applications in environmental restoration.",
  },
  {
    title: "Workshop: Advanced Techniques in Microbial Analysis",
    date: "August 22-24, 2025",
    location: "Rio de Janeiro, Brazil",
    description:
      "Hands-on training in state-of-the-art microbial identification, metagenomics, and bioinformatics tools for environmental research. Limited seats available for graduate students and early-career researchers.",
  },
  {
    title: "Annual INCT CERBC Research Conference",
    date: "November 10-12, 2025",
    location: "Campinas, Brazil",
    description:
      "Our flagship annual event showcasing the latest research findings from INCT CERBC collaborators, featuring keynote addresses, poster sessions, and networking opportunities with international conservation scientists.",
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Current Events</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay connected with our latest conferences, workshops, and scientific gatherings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={event.title}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4 flex-grow">
                <h3 className="text-2xl font-bold leading-tight">{event.title}</h3>
                
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="h-5 w-5" />
                  <span className="font-semibold">{event.date}</span>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>{event.location}</span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">{event.description}</p>
              </div>
              
              <Button
                variant="outline"
                className="mt-6 w-full group hover:bg-primary hover:text-primary-foreground hover:border-primary"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
