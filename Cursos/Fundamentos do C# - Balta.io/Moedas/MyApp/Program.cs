using System;

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Clear();

            // Tipo para moedas (decimal - tem mais precisão)

            decimal valor = 10.25m;
            Console.WriteLine($"{valor} - Retorna valor definido na variável '10.25'"); // Retorna valor definido na variável '10.25'
        }
    }
}