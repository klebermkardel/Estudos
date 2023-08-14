using System;

namespace Fibonacci
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Digite o número de termos da sequência de Fibonacci:");
            int n = int.Parse(Console.ReadLine());

            Console.WriteLine("Sequência de Fibonacci com " + n + " termos:");

            for (int i = 0; i < n; i++)
            {
                Console.Write(Fibonacci(i) + " ");
            }
        }

        static int Fibonacci(int n)
        {
            if (n <= 1)
            {
                return n;
            }

            int termoAnterior = 0;
            int termoAtual = 1;
            int resultado = 0;

            for (int i = 2; i <= n; i++)
            {
                resultado = termoAnterior + termoAtual;
                termoAnterior = termoAtual;
                termoAtual = resultado;
            }

            return resultado;
        }
    }
}
