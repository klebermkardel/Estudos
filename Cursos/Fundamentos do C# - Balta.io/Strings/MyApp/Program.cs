using System;

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            // Guids
            var id = Guid.NewGuid();
            id.ToString();
            id = new Guid("4bc7ba33-31f1-4dc7-89ef-a67d5e95bec4");
            Console.WriteLine(id.ToString().Substring(0, 8));
        }
    }
}