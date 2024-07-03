import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Animal Gallery</h1>
      <p className="mb-6">Explore a variety of animals and learn more about them.</p>
      <Button asChild>
        <Link to="/gallery">Visit the Gallery</Link>
      </Button>
    </div>
  );
};

export default Index;
