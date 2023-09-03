using System;
using System.Globalization;

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Clear();

            // Tipo para moedas (decimal - tem mais precisão)
            Console.WriteLine("Melhor tipo (decimal):");
            Console.WriteLine("");

            decimal valor = 10536.25m;
            Console.WriteLine($"{valor} - Retorna valor definido na variável"); // Retorna valor definido na variável

            Console.WriteLine("----------------------------");
            Console.WriteLine("");

            // Formatando moedas
            Console.WriteLine("Formatando moedas:");
            Console.WriteLine("");

            Console.WriteLine($"{valor.ToString("C", CultureInfo.CreateSpecificCulture("pt-BR"))} - Retorna valor definido formatado com o CultureInfo definido"); // etorna valor definido formatado com o CultureInfo definido

            Console.WriteLine("----------------------------");
            Console.WriteLine("");

            // Math
            Console.WriteLine("Math:");
            Console.WriteLine("");

            Console.WriteLine($"{Math.Round(valor)} - Round: Retorna valor arredondado pra baixo entre .01 e .50 e pra cima entre .51 e .99"); // Retorna valor arredondado pra baixo entre .01 e .50 e pra cima entre .51 e .99

            Console.WriteLine($"{Math.Ceiling(valor)} -  Ceiling: Retorna valor arredondado para cima"); // Retorna valor arredondado para cima

            Console.WriteLine($"{Math.Floor(valor)} - Floor: Retorna valor arredondado para baixo"); // Retorna valor arredondado para baixo
        }
    }
}