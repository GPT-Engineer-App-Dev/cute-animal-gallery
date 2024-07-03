import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Image } from "lucide-react";

const animals = [
  { id: 1, title: "Lion", description: "The king of the jungle.", image: "/placeholder.svg" },
  { id: 2, title: "Elephant", description: "The largest land animal.", image: "/placeholder.svg" },
  { id: 3, title: "Giraffe", description: "The tallest animal.", image: "/placeholder.svg" },
  // Add more sample animals here
];

const Gallery = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {animals.map((animal) => (
        <Card key={animal.id} className="cursor-pointer" onClick={() => setSelectedAnimal(animal)}>
          <CardHeader>
            <Image src={animal.image} alt={animal.title} className="w-full h-32 object-cover" />
          </CardHeader>
          <CardContent>
            <CardTitle>{animal.title}</CardTitle>
            <CardDescription>{animal.description}</CardDescription>
          </CardContent>
        </Card>
      ))}

      {selectedAnimal && (
        <Dialog open={!!selectedAnimal} onOpenChange={() => setSelectedAnimal(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedAnimal.title}</DialogTitle>
              <DialogDescription>{selectedAnimal.description}</DialogDescription>
            </DialogHeader>
            <Image src={selectedAnimal.image} alt={selectedAnimal.title} className="w-full h-64 object-cover" />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Gallery;