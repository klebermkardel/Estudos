using System;

namespace DotnetLists
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Clear();

            // Arrays
            Console.WriteLine("Arrays:");
            Console.WriteLine("");

            var meuArray = new int[5]{1, 2, 3, 4, 5};

            Console.WriteLine($"{meuArray[0]} - Posição 0: Retorna 1"); // Posição 0: Retorna 1
            Console.WriteLine($"{meuArray[1]} - Posição 1: Retorna 2"); // Posição 1: Retorna 2
            Console.WriteLine($"{meuArray[2]} - Posição 2: Retorna 3"); // Posição 2: Retorna 3
            Console.WriteLine($"{meuArray[3]} - Posição 3: Retorna 4"); // Posição 3: Retorna 4
            Console.WriteLine($"{meuArray[4]} - Posição 4: Retorna 5"); // Posição 4: Retorna 5

            Console.WriteLine("------------------------------");
            Console.WriteLine("");

            // Percorrendo arrays
            Console.WriteLine("Percorrendo arrays (laço for):");
            Console.WriteLine("");

            for(int i = 0; i < meuArray.Length; i++)
                Console.WriteLine(meuArray[i]); 

            Console.WriteLine("------------------------------");
            Console.WriteLine("");

            // ForEach
            Console.WriteLine("ForEach:");
            Console.WriteLine("");

            foreach(var item in meuArray)
            {
                Console.WriteLine(item); 
            }  

            Console.WriteLine("");

            var funcionarios = new Funcionario[5];
            funcionarios[0] = new Funcionario() {Id = 0001, Nome="André"};
            funcionarios[1] = new Funcionario() {Id = 0002, Nome="Cláudio"};
            funcionarios[2] = new Funcionario() {Id = 0003, Nome="Márcia"};
            funcionarios[3] = new Funcionario() {Id = 0004, Nome="Maria"};
            funcionarios[4] = new Funcionario() {Id = 0005, Nome="José"};

            foreach(var funcionario in funcionarios)
                Console.WriteLine($"{funcionario.Id} - {funcionario.Nome}");

            Console.WriteLine("------------------------------");
            Console.WriteLine("");

            // Adicionado valores
            Console.WriteLine("Adicionado valores:");            
            Console.WriteLine("");

            var primeiro = new int[4];
            var segundo = new int[4];

            segundo[0] = primeiro[0];

            primeiro[0] = 23;
            Console.WriteLine(segundo[0]);
        }
    }

    public struct Funcionario
    {
        public int Id { get; set; }

        public string Nome { get; set; }
    }
}