using System;

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            // Execeptions - Tratamento de erros
            // Toda vez que uma excessão ocorre, ela para a execução do nosso programa

            var arr = new int[3]{1, 2, 3};

            // Try/Catch

            try {
                for(var i = 0; i < 10; i++)
                {
                    // System.IndexOutOfRangeException
                    Console.WriteLine(arr[i]);
                }
            } catch(Exception ex) {
                Console.WriteLine(ex.InnerException);
                Console.WriteLine(ex.Message);
                Console.WriteLine("Ops, algo deu errado!");
            }

            

            
        }
    }
}