using System;

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            // DateTime - Struct Tipo Primitivo
            var data = new DateTime(); // Composição dd/mm/aaaa hh:mm:ss
            Console.WriteLine("DateTime:");
            Console.WriteLine("");
            Console.WriteLine($"{data} - valor padrão do DateTime"); // Retorna 01/01/0001 00:00:00

            Console.WriteLine("-----------------------");

            Console.WriteLine("");

            // Data Atual
            Console.WriteLine("Data Atual:");

            Console.WriteLine("");

            var data2 = DateTime.Now;
            Console.WriteLine($"{data2} - Retorna data e horário atual"); // Retorna data e horário atual"


        }
    }
}