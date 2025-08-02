import { Play, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAlbum from "@/assets/hero-album.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                Feel the{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Music
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover millions of songs, create playlists, and enjoy high-quality 
                streaming from your favorite artists around the world.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
                Start Listening
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/50">
                <Plus className="w-5 h-5 mr-2" />
                Create Playlist
              </Button>
            </div>
          </div>

          {/* Featured Album */}
          <div className="relative animate-scale-in">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative bg-card rounded-2xl p-8 shadow-elegant">
                <img 
                  src={heroAlbum}
                  alt="Featured Album"
                  className="w-full rounded-xl mb-6 shadow-lg"
                />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Now Playing</h3>
                  <p className="text-muted-foreground">Electronic Dreams</p>
                  <p className="text-sm text-muted-foreground">by Synthwave Collective</p>
                </div>
                <Button 
                  size="lg" 
                  className="w-full mt-6 bg-gradient-primary hover:opacity-90"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Play Album
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;