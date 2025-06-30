import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export function useCreate(url, generateData, onSuccess) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleCreate = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(generateData()),
      });
      if (!response.ok) throw new Error("Failed to create build");
      toast({ title: "Success", description: "Build created successfully" });
      onSuccess();
    } catch (error) {
      toast({ title: "Error", description: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(generateData()),
      });
      if (!response.ok) throw new Error("Failed to update build");
      toast({ title: "Success", description: "Build updated successfully" });
      onSuccess();
    } catch (error) {
      toast({ title: "Error", description: error.message });
    } finally {
      setLoading(false);
    }
  };

  return { handleCreate, handleUpdate, loading };
}
