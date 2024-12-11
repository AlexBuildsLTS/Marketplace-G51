// src/components/dashboard/CreateAd.tsx
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useAutoSave } from "@/hooks/useAutoSave";
import { useDragAndDrop } from "@/hooks/useDragAndDrop";
// Mocking createAdService for now

interface CreateAdFormInputs {
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
}

export const CreateAd = () => {
  const { register, handleSubmit, watch, setValue } =
    useForm<CreateAdFormInputs>();
  const [images, setImages] = useState<string[]>([]);

  useAutoSave(
    watch,
    (data) => {
      // Implement auto-save logic, e.g., save to localStorage or send to API
      console.log("Auto-saving data:", data);
    },
    2000
  );

  const { isDragging, handleDragOver, handleDragLeave, handleDrop } =
    useDragAndDrop({
      maxFiles: 5,
      maxSize: 5,
      onFileAccepted: (file) => {
        setImages((prev) => [...prev, file]);
        setValue("images", [...images, file]);
      },
    });

  return (
    <div className="mb-6">
      <h3 className="mb-4 text-xl font-semibold">Create New Ad</h3>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="space-y-4">
        <Input
          placeholder="Ad Title"
          {...register("title", { required: "Title is required" })}
        />
        <textarea
          placeholder="Ad Description"
          className="w-full p-2 border rounded-md border-border/40 focus:border-brand-green focus:ring-1 focus:ring-brand-green"
          {...register("description", { required: "Description is required" })}
        />
        <Input
          type="number"
          placeholder="Price"
          {...register("price", {
            required: "Price is required",
            valueAsNumber: true,
          })}
        />
        <Input
          placeholder="Category"
          {...register("category", { required: "Category is required" })}
        />

        {/* Image Upload */}
        <div
          className={`border-dashed border-2 p-4 text-center ${isDragging ? "border-brand-green bg-green-100" : "border-border/40"}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}>
          <p>Drag and drop images here, or click to select files</p>
          <input
            type="file"
            accept="image/*"
            multiple
            className="mt-2"
            onChange={(e) => {
              if (e.target.files) {
                Array.from(e.target.files).forEach((file) => {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    if (reader.result) {
                      setImages((prev) => [...prev, reader.result as string]);
                      setValue("images", [...images, reader.result as string]);
                    }
                  };
                  reader.readAsDataURL(file);
                });
              }
            }}
          />
        </div>

        {/* Display Uploaded Images */}
        {images.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Upload ${idx}`}
                className="object-cover w-24 h-24 rounded-md"
              />
            ))}
          </div>
        )}

        <Button type="submit">Create Ad</Button>
      </form>
    </div>
  );
};
