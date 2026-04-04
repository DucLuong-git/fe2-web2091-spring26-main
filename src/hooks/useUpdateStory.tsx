import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useUpdateStory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: any) => {
      const { id, ...rest } = data;
      const res = await axios.put(
        `http://localhost:3000/stories/${id}`,
        rest
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });
};