import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

const useUpdate = (url, generateJsonData , onSuccess) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(generateJsonData()),
      });
      const data = await response.json();

      if (response.ok) {
        toast({ title: data.message });
        if (onSuccess) onSuccess(); // Call the success callback
      } else {
        toast({ title: data.message, variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "An error occurred while updating the build.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return { handleUpdate, loading };
};

export default useUpdate;
