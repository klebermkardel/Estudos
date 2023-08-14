using System;

namespace InversaoString
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Digite uma string:");
            string input = Console.ReadLine();

            string reversed = InverteString(input);

            Console.WriteLine("String invertida: " + reversed);
        }

        static string InverteString(string str)
        {
            char[] charArray = str.ToCharArray();
            Array.Reverse(charArray);
            return new string(charArray);
        }
    }
}
