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

            decimal valor = 10.25m;
            Console.WriteLine($"{valor} - Retorna valor definido na variável '10.25'"); // Retorna valor definido na variável '10.25'

            Console.WriteLine("----------------------------");
            Console.WriteLine("");

            // Formatando moedas
            Console.WriteLine("Formatando moedas:");
            Console.WriteLine("");

            Console.WriteLine($"{valor.ToString("C", CultureInfo.CreateSpecificCulture("pt-BR"))} - Retorna valor definido formatado com o CultureInfo definido"); // etorna valor definido formatado com o CultureInfo definido

            
        }
    }
}