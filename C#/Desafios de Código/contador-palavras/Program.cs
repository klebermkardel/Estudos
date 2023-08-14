using System;

namespace ContagemPalavrasComPrimeiraPalavra
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Digite uma frase:");
            string frase = Console.ReadLine();

            int numeroPalavras = ContaPalavras(frase);
            string primeiraPalavra = ObtemPrimeiraPalavra(frase);

            Console.WriteLine("Número de palavras na frase: " + numeroPalavras);
            Console.WriteLine("Primeira palavra: " + primeiraPalavra);
        }

        static int ContaPalavras(string frase)
        {
            string[] palavras = frase.Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
            return palavras.Length;
        }

        static string ObtemPrimeiraPalavra(string frase)
        {
            string[] palavras = frase.Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
            if (palavras.Length > 0)
            {
                return palavras[0];
            }
            return string.Empty;
        }
    }
}
