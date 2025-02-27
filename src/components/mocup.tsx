import { useMutation } from "@tanstack/react-query";
import z from "zod";

// Схема валидации
const dataSchema = z.number();

// Тип для данных, возвращаемых useQuery
export type DataResponse = z.infer<typeof dataSchema>;

// Хук useGetData
export const useGetData = () => {
  const mutation = useMutation({
    mutationKey: ["data"],
    mutationFn: async () => {
      // Имитация асинхронного запроса
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(42);
        }, 10000);
      });

      // Валидация данных
      const validatedData = dataSchema.parse(data);
      console.log(data);
      return validatedData;
    },
  });

  return { mutation };
};
