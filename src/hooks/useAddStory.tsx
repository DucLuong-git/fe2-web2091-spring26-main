import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useAddStory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: any) => {
      const res = await axios.post("http://localhost:3000/stories", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });
};