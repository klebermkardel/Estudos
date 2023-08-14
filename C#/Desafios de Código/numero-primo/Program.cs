using System;

namespace VerificacaoNumeroPrimo
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Digite um número inteiro:");
            int numero = int.Parse(Console.ReadLine());

            bool ehPrimo = VerificaPrimo(numero);

            if (ehPrimo)
            {
                Console.WriteLine(numero + " é um número primo.");
            }
            else
            {
                Console.WriteLine(numero + " não é um número primo.");
            }
        }

        static bool VerificaPrimo(int numero)
        {
            if (numero <= 1)
            {
                return false;
            }

            for (int i = 2; i * i <= numero; i++)
            {
                if (numero % i == 0)
                {
                    return false;
                }
            }

            return true;
        }
    }
}
