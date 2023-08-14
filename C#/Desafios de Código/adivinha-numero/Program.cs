using System;

namespace AdivinheNumero
{
    class Program
    {
        static void Main(string[] args)
        {
            Random rand = new Random();
            int numeroAlvo = rand.Next(1, 101); // Gera um número aleatório entre 1 e 100
            int tentativas = 0;
            int palpite;

            Console.WriteLine("Bem-vindo ao jogo Adivinhe o Número!");
            Console.WriteLine("Tente adivinhar o número entre 1 e 100.");

            do
            {
                Console.Write("Digite seu palpite: ");
                palpite = int.Parse(Console.ReadLine());
                tentativas++;

                if (palpite < numeroAlvo)
                {
                    Console.WriteLine("Tente um número mais alto.");
                }
                else if (palpite > numeroAlvo)
                {
                    Console.WriteLine("Tente um número mais baixo.");
                }
                else
                {
                    Console.WriteLine("Parabéns! Você adivinhou o número em " + tentativas + " tentativas.");
                }
            } while (palpite != numeroAlvo);
        }
    }
}
