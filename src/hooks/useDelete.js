import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export function useDelete(url) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete build");
      toast({ title: "Success", description: "Build deleted successfully" });
      router.push("/my-builds");
    } catch (error) {
      toast({ title: "Error", description: error.message });
    } finally {
      setLoading(false);
    }
  };

  return { handleDelete, loading };
}