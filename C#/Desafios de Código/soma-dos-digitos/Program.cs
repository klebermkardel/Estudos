using System;

namespace SomaDosDigitos
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Digite um número inteiro:");
            int numero = int.Parse(Console.ReadLine());

            int soma = SomaDosDigitos(numero);

            Console.WriteLine("A soma dos dígitos do número é: " + soma);
        }

        static int SomaDosDigitos(int numero)
        {
            int soma = 0;

            // Transforma o número em positivo para garantir que todos os dígitos sejam considerados
            numero = Math.Abs(numero);

            while (numero > 0)
            {
                int digito = numero % 10; // Obtém o último dígito
                soma += digito; // Adiciona o dígito à soma
                numero /= 10; // Remove o último dígito do número
            }

            return soma;
        }
    }
}
