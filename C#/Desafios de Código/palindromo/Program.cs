using System;

namespace VerificacaoPalindromo
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Digite uma palavra:");
            string palavra = Console.ReadLine();

            bool ePalindromo = VerificaPalindromo(palavra);

            if (ePalindromo)
            {
                Console.WriteLine("A palavra é um palíndromo.");
            }
            else
            {
                Console.WriteLine("A palavra não é um palíndromo.");
            }
        }

        static bool VerificaPalindromo(string palavra)
        {
            int tamanho = palavra.Length;
            for (int i = 0; i < tamanho / 2; i++)
            {
                if (palavra[i] != palavra[tamanho - i - 1])
                {
                    return false;
                }
            }
            return true;
        }
    }
}
