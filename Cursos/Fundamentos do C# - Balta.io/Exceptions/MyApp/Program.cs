using System;

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            // Execeptions - Tratamento de erros

            var arr = new int[3]{1, 2, 3};

            for(var i = 0; i < 10; i++)
            {
                // System.IndexOutOfRangeException
                Console.WriteLine(arr[i]);
            }
        }
    }
}