import { Play, Heart, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const tracks = [
  { id: 1, title: "Midnight Drive", artist: "Neon Nights", duration: "3:42", plays: "2.1M" },
  { id: 2, title: "Electric Dreams", artist: "Synthwave Collective", duration: "4:15", plays: "1.8M" },
  { id: 3, title: "City Lights", artist: "Urban Echo", duration: "3:28", plays: "1.5M" },
  { id: 4, title: "Digital Love", artist: "Cyber Romance", duration: "3:56", plays: "1.2M" },
  { id: 5, title: "Retro Future", artist: "Time Machine", duration: "4:03", plays: "980K" },
];

const PopularTracks = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Popular This Week</h2>
          <p className="text-muted-foreground text-lg">
            The most played tracks across the platform
          </p>
        </div>

        <Card className="bg-card/60 backdrop-blur-sm border-border/50">
          <div className="p-6">
            <div className="space-y-4">
              {tracks.map((track, index) => (
                <div 
                  key={track.id}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  {/* Track Number */}
                  <div className="w-8 text-center">
                    <span className="text-muted-foreground group-hover:hidden">
                      {index + 1}
                    </span>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="hidden group-hover:flex w-8 h-8"
                    >
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Track Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{track.title}</h3>
                    <p className="text-sm text-muted-foreground truncate">{track.artist}</p>
                  </div>

                  {/* Plays */}
                  <div className="hidden md:block text-sm text-muted-foreground">
                    {track.plays} plays
                  </div>

                  {/* Duration */}
                  <div className="text-sm text-muted-foreground w-16 text-right">
                    {track.duration}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-2">
                    <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PopularTracks;