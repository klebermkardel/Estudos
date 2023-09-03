using System;

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            // Execeptions - Tratamento de erros
            // Toda vez que uma excessão ocorre, ela para a execução do nosso programa

            var arr = new int[3]{1, 2, 3};

            // Try/Catch (sempre tratar os erros do mais espefícico para o mais genérico)

            try {
                // for(var i = 0; i < 10; i++)
                // {
                //     // System.IndexOutOfRangeException
                //     Console.WriteLine(arr[i]);
                // }

                Salvar("");
            } catch(IndexOutOfRangeException ex) {
                Console.WriteLine(ex.InnerException);
                Console.WriteLine(ex.Message);
                Console.WriteLine("Não encontrei o próximo índice na lista"); // vai rodar esse
            }
            catch(ArgumentNullException ex) {
                Console.WriteLine(ex.InnerException);
                Console.WriteLine(ex.Message);
                Console.WriteLine("Falha ao cadastrar texto");
            }
            catch(MinhaException ex) {
                Console.WriteLine(ex.InnerException);
                Console.WriteLine(ex.Message);
                Console.WriteLine(ex.QuandoAconteceu);
                Console.WriteLine("Exceção customizada");
            }
            catch(Exception ex) {
                Console.WriteLine(ex.InnerException);
                Console.WriteLine(ex.Message);
                Console.WriteLine("Ops, algo deu errado!");
            }
        }

        static void Salvar(string texto)
        {
            if(string.IsNullOrEmpty(texto))
                throw new MinhaException(DateTime.Now);  
        }

        public class MinhaException : Exception
        {
            public MinhaException(DateTime date)
            {
                QuandoAconteceu = date;
            }
            public DateTime QuandoAconteceu { get; set; }
        }
    }
}