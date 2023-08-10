using System;

namespace CalculoFatorial
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Digite um número inteiro:");
            int numero = int.Parse(Console.ReadLine());

            long fatorial = CalculaFatorial(numero);

            Console.WriteLine("O fatorial de " + numero + " é: " + fatorial);
        }

        static long CalculaFatorial(int numero)
        {
            if (numero == 0 || numero == 1)
            {
                return 1;
            }

            long fatorial = 1;
            for (int i = 2; i <= numero; i++)
            {
                fatorial *= i;
            }

            return fatorial;
        }
    }
}
