using System;

namespace DotnetLists
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Clear();

            // Arrays
            Console.WriteLine("Arrays:");
            Console.WriteLine("");

            var meuArray = new int[5]{1, 2, 3, 4, 5};

            Console.WriteLine($"{meuArray[0]} - Posição 0: Retorna 1"); // Posição 0: Retorna 1
            Console.WriteLine($"{meuArray[1]} - Posição 1: Retorna 2"); // Posição 1: Retorna 2
            Console.WriteLine($"{meuArray[2]} - Posição 2: Retorna 3"); // Posição 2: Retorna 3
            Console.WriteLine($"{meuArray[3]} - Posição 3: Retorna 4"); // Posição 3: Retorna 4
            Console.WriteLine($"{meuArray[4]} - Posição 4: Retorna 5"); // Posição 4: Retorna 5
        }
    }
}