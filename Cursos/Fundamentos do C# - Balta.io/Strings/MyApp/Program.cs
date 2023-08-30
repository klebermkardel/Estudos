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

            Console.WriteLine("");

            Console.WriteLine("------------------");

            Console.WriteLine("");

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

            Console.WriteLine("");

            Console.WriteLine("------------------");

            Console.WriteLine("");

            // Comparação de Strings
            Console.WriteLine("Comparação de Strings:");
            Console.WriteLine("");

            // 1º método - Retorna inteiro
            Console.WriteLine("Primeiro método (retorna um inteiro):");
            var texto4 = "Testando";
            Console.WriteLine(texto4.CompareTo("Testando"));
            Console.WriteLine(texto4.CompareTo("testando"));

            Console.WriteLine("");

            // 2º método - Retorna booleano
            Console.WriteLine("Segundo método (retorna um booleano):");
            var texto5 = "Esse texto é um teste";
            Console.WriteLine(texto5.Contains("teste"));
            Console.WriteLine(texto5.Contains("Teste"));
            Console.WriteLine(texto5.Contains("Teste",StringComparison.OrdinalIgnoreCase));

            Console.WriteLine("");

            Console.WriteLine("------------------");

            Console.WriteLine("");

            // StartsWith / EndsWith / Retorna booleano
            Console.WriteLine("StartsWith / EndsWith (Retorna um booleano):");
            Console.WriteLine("");

            var texto6 = "Este texto é um teste";

            Console.WriteLine("StartsWith:");
            Console.WriteLine("");

            Console.WriteLine(texto6.StartsWith("Este"));
            Console.WriteLine(texto6.StartsWith("este"));
            Console.WriteLine(texto6.StartsWith("texto"));

            Console.WriteLine("");

            Console.WriteLine("EndsWith:");
            Console.WriteLine("");

            Console.WriteLine(texto6.EndsWith("teste"));
            Console.WriteLine(texto6.EndsWith("Teste"));
            Console.WriteLine(texto6.EndsWith("xpto"));

            Console.WriteLine("");

            Console.WriteLine("------------------");

            Console.WriteLine("");

            // Equal - Retorna booleano
            Console.WriteLine("Equals (retorna um booleano):");
            Console.WriteLine("");

            var texto7 = "Este texto é um teste";
            Console.WriteLine(texto7.Equals("Este texto é um teste"));
            Console.WriteLine(texto7.Equals("este texto é um teste"));
            Console.WriteLine(texto7.Equals("Este texto é um teste", StringComparison.OrdinalIgnoreCase));

            Console.WriteLine("");

            Console.WriteLine("------------------");

            Console.WriteLine("");

            // Índices
            Console.WriteLine("índices:");
            Console.WriteLine("");

            var texto8 = "Este texto é um teste";

            // IndexOf
            Console.WriteLine("IndexOf:");
            Console.WriteLine("");

            Console.WriteLine(texto8.IndexOf("é")); // Posição 11

            Console.WriteLine("");
            
            // LastIndexOf
            Console.WriteLine("LastIndexOf:");
            Console.WriteLine("");
            Console.WriteLine(texto8.LastIndexOf("s")); // Posição 18 - Último index encontrado, caso haja mais de um

            Console.WriteLine("");

            Console.WriteLine("------------------");

            Console.WriteLine("");
        }
    }
}