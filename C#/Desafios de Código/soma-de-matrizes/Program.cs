using System;

namespace SomaDeMatrizes
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] matriz1 = {
                {1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}
            };

            int[,] matriz2 = {
                {9, 8, 7},
                {6, 5, 4},
                {3, 2, 1}
            };

            int[,] resultado = SomaMatrizes(matriz1, matriz2);

            Console.WriteLine("Matriz resultante da soma:");
            ImprimeMatriz(resultado);
        }

        static int[,] SomaMatrizes(int[,] matriz1, int[,] matriz2)
        {
            int linhas = matriz1.GetLength(0);
            int colunas = matriz1.GetLength(1);

            int[,] resultado = new int[linhas, colunas];

            for (int i = 0; i < linhas; i++)
            {
                for (int j = 0; j < colunas; j++)
                {
                    resultado[i, j] = matriz1[i, j] + matriz2[i, j];
                }
            }

            return resultado;
        }

        static void ImprimeMatriz(int[,] matriz)
        {
            int linhas = matriz.GetLength(0);
            int colunas = matriz.GetLength(1);

            for (int i = 0; i < linhas; i++)
            {
                for (int j = 0; j < colunas; j++)
                {
                    Console.Write(matriz[i, j] + " ");
                }
                Console.WriteLine();
            }
        }
    }
}
