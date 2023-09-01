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

            Console.WriteLine("-----------------------");
            Console.WriteLine("");

            // Obtendo valores da data
            Console.WriteLine("Obtendo valores das datas:");
            Console.WriteLine("");

            var data3 = new DateTime(2023, 09, 01, 13, 14, 43);
            Console.WriteLine($"{data3} - Retorna data pré definida (definir ano, mês, dia, hora, minutos, segundos)"); // Retorna data pré definida (definir ano, mês, dia, hora, minutos, segundos)
            Console.WriteLine($"{data3.Year} - Retorna ano definido"); // Retorna ano definido
            Console.WriteLine($"{data3.Month} - Retorna mês definido"); // Retorna mês definido
            Console.WriteLine($"{data3.Day} - Retorna dia definido"); // Retorna dia definido
            Console.WriteLine($"{data3.Hour} - Retorna hora definida"); // Retorna hora definida
            Console.WriteLine($"{data3.Minute} - Retorna minutos definido"); // Retorna minutos definido
            Console.WriteLine($"{data3.Second} - Retorna segundos definido"); // Retorna segundos definido
            Console.WriteLine($"{data3.DayOfWeek} - Retorna dia da semana da data que foi defininida em inglês"); // Retorna dia da semana da data que foi defininida em inglês

            Console.WriteLine("-----------------------");
            Console.WriteLine("");

            // Formatando datas
            Console.WriteLine("Formatando datas:");
            Console.WriteLine("");

            var data4 = DateTime.Now;

            var dataFormatada = string.Format("{0:dd/MM/yyyy}", data4);
            Console.WriteLine($"{dataFormatada} - Retorna a data formatada da forma como você definir"); // Retorna a data formatada da forma como você definir"

            Console.WriteLine("-----------------------");
            Console.WriteLine("");
        }
    }
}