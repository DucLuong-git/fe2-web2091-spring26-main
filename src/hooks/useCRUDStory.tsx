import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useCRUDStory = () => {
  const queryClient = useQueryClient();
  const { data: list, ...restQuery } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });
  const addMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await axios.post("http://localhost:3000/stories", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`http://localhost:3000/stories/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });
  const updateMutation = useMutation({
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
  return {
    list,
    ...restQuery,

    add: addMutation.mutate,
    remove: deleteMutation.mutate,
    update: updateMutation.mutate,
  };
};