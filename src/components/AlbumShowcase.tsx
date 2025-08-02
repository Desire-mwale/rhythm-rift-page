import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";

const albums = [
  {
    id: 1,
    title: "Electronic Dreams",
    artist: "Synthwave Collective",
    image: album1,
    year: "2024"
  },
  {
    id: 2,
    title: "Indie Vibes",
    artist: "The Midnight Band",
    image: album2,
    year: "2024"
  },
  {
    id: 3,
    title: "Jazz Fusion",
    artist: "Modern Quartet",
    image: album3,
    year: "2023"
  }
];

const AlbumShowcase = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Albums</h2>
          <p className="text-muted-foreground text-lg">
            Handpicked collections from talented artists
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {albums.map((album) => (
            <Card 
              key={album.id}
              className="group hover:shadow-glow transition-all duration-500 bg-card/60 backdrop-blur-sm border-border/50 overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={album.image}
                  alt={album.title}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300"
                  >
                    <Play className="w-6 h-6 mr-2" />
                    Play Album
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{album.title}</h3>
                <p className="text-muted-foreground mb-1">{album.artist}</p>
                <p className="text-sm text-muted-foreground">{album.year}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlbumShowcase;