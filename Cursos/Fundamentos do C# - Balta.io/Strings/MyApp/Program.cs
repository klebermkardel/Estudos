using System;

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            // Guids
            Console.WriteLine("Guids:");
            Console.WriteLine("");

            var id = Guid.NewGuid();
            id.ToString();
            id = new Guid("4bc7ba33-31f1-4dc7-89ef-a67d5e95bec4");
            Console.WriteLine(id.ToString().Substring(0, 8));
            
            Console.WriteLine("------------------");

            // Interpolação de Strings
            Console.WriteLine("Interpolação de Strings:");
            Console.WriteLine("");

            // 1ª forma
            Console.WriteLine("Primeira forma:");
            var price = 10.2;
            var texto = "O preço do produto é " + price + " apenas na promoção";

            Console.WriteLine(texto);

            Console.WriteLine("");

            // 2ª forma
            Console.WriteLine("Segunda forma:");
            var texto2 = string.Format("O preço do produto é {0} apenas na promoção", price);

            Console.WriteLine(texto2);

            Console.WriteLine("");

            // 3ª forma
            Console.WriteLine("Segunda forma:");
            var texto3 = $@"O preço
            do produto é {price} apenas na promoção";

            Console.WriteLine(texto3);

        }
    }
}