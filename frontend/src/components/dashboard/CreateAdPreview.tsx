import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import { categories } from "@/data/categories";

interface CreateAdPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
    category: string;
    price: string;
    description: string;
    images: string[];
  };
}

export function CreateAdPreview({ isOpen, onClose, data }: CreateAdPreviewProps) {
  const category = categories.find(c => c.id === data.category);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl h-[80vh]">
        <DialogHeader>
          <DialogTitle>Preview Advertisement</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-full pr-4">
          <div className="space-y-6">
            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {data.images.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg aspect-square"
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold">{data.title}</h2>
                <div className="flex items-center gap-2 mt-2">
                  <Badge>{category?.name}</Badge>
                  <span className="text-xl font-bold text-brand-green">
                    {formatCurrency(parseFloat(data.price))}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">Description</h3>
                <p className="whitespace-pre-wrap text-muted-foreground">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}