using System;
using System.Globalization;

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            // DateTime - Struct Tipo Primitivo
            var data = new DateTime(); // Composição dd/mm/aaaa hh:mm:ss
            Console.WriteLine("DateTime:");
            Console.WriteLine("");
            Console.WriteLine($"{data} - valor padrão do DateTime"); // Retorna 01/01/0001 00:00:00

            Console.WriteLine("-----------------------");
            Console.WriteLine("");

            // Data Atual
            Console.WriteLine("Data Atual:");

            Console.WriteLine("");

            var data2 = DateTime.Now;
            Console.WriteLine($"{data2} - Retorna data e horário atual"); // Retorna data e horário atual"

            Console.WriteLine("-----------------------");
            Console.WriteLine("");

            // Obtendo valores da data
            Console.WriteLine("Obtendo valores das datas:");
            Console.WriteLine("");

            var data3 = new DateTime(2023, 09, 01, 13, 14, 43);
            Console.WriteLine($"{data3} - Retorna data pré definida (definir ano, mês, dia, hora, minutos, segundos)"); // Retorna data pré definida (definir ano, mês, dia, hora, minutos, segundos)
            Console.WriteLine($"{data3.Year} - Retorna ano definido"); // Retorna ano definido
            Console.WriteLine($"{data3.Month} - Retorna mês definido"); // Retorna mês definido
            Console.WriteLine($"{data3.Day} - Retorna dia definido"); // Retorna dia definido
            Console.WriteLine($"{data3.Hour} - Retorna hora definida"); // Retorna hora definida
            Console.WriteLine($"{data3.Minute} - Retorna minutos definido"); // Retorna minutos definido
            Console.WriteLine($"{data3.Second} - Retorna segundos definido"); // Retorna segundos definido
            Console.WriteLine($"{data3.DayOfWeek} - Retorna dia da semana da data que foi defininida em inglês"); // Retorna dia da semana da data que foi defininida em inglês

            Console.WriteLine("-----------------------");
            Console.WriteLine("");

            // Formatando datas
            Console.WriteLine("Formatando datas:");
            Console.WriteLine("");

            var data4 = DateTime.Now;

            var dataFormatada = string.Format("{0:dd/MM/yyyy}", data4);
            Console.WriteLine($"{dataFormatada} - Retorna a data formatada da forma como você definir"); // Retorna a data formatada da forma como você definir"

            Console.WriteLine("-----------------------");
            Console.WriteLine("");

            // Padrões de Formatação
            Console.WriteLine("Padrões de formatação:");
            Console.WriteLine("");

            var data5 = DateTime.Now;

            var horarioCurto = string.Format("{0:t}", data5);
            Console.WriteLine($"{horarioCurto} - Retorna a hora atual em hora:minutos"); // Retorna a hora atual em hora:minutos

            Console.WriteLine("");

            var dataCurta = string.Format("{0:d}", data5);
            Console.WriteLine($"{dataCurta} - Retorna apenas a data em formato curto, sem o horário"); // Retorna apenas a data em formato curto, sem o horário

            Console.WriteLine("");

            var horarioLongo = string.Format("{0:T}", data5);
            Console.WriteLine($"{horarioLongo} - Retorna a hora atual em hora:minutos:segundos"); // Retorna a hora atual em hora:minutos:segundos

            Console.WriteLine("");

            var dataLonga = string.Format("{0:D}", data5);
            Console.WriteLine($"{dataLonga} - Retorna apenas a data por extenso"); // Retorna apenas a data por extenso

            Console.WriteLine("");

            var dataLongaHoraCurta = string.Format("{0:f}", data5);
            Console.WriteLine($"{dataLongaHoraCurta} - Retorna data por extenso e horário em hora:minutos"); // Retorna data por extenso e horário em hora:minutos

            Console.WriteLine("");

            var dataLongaHoraLonga = string.Format("{0:F}", data5);
            Console.WriteLine($"{dataLongaHoraLonga} - Retorna data por extenso e horário em hora:minutos:segundos"); // Retorna data por extenso e horário em hora:minutos:segundos

            Console.WriteLine("");

            var dataCurtaHoraCurta = string.Format("{0:g}", data5);
            Console.WriteLine($"{dataCurtaHoraCurta} - Retorna data curta e horário em hora:minutos"); // Retorna data curta e horário em hora:minutos

            Console.WriteLine("");

            var dataPadraoSistemas = string.Format("{0:r}", data5);
            Console.WriteLine($"{dataPadraoSistemas} - Retorna data e horário por extenso no formato padrão da maioria dos sistemas"); // Retorna data e horário por extenso no formato padrão da maioria dos sistemas

            Console.WriteLine("-----------------------");
            Console.WriteLine("");

            // Adicionando Valores
            Console.WriteLine("Adicionando valores:");
            Console.WriteLine("");

            var data6 = DateTime.Now;
            Console.WriteLine($"{data6} - Retorna data atual"); // Retorna data atual
            Console.WriteLine($"{data6.AddDays(30)} - Retorna data atual + número de dias definido"); // Retorna data atual + número de dias definido
            Console.WriteLine($"{data6.AddMonths(2)} - Retorna data atual + número de meses definido"); // Retorna data atual + número de meses definido
            Console.WriteLine($"{data6.AddYears(1)} - Retorna data atual + número de anos definido"); // Retorna data atual + número de anos definido

            Console.WriteLine("-----------------------");
            Console.WriteLine("");

            // Comparando Datas
            Console.WriteLine("Comparando Datas:");
            Console.WriteLine("");

            var data7 = DateTime.Now;

            if (data7.Date == DateTime.Now.Date)
                Console.WriteLine("É igual");

            Console.WriteLine(data7);

            Console.WriteLine("-----------------------");
            Console.WriteLine("");

            // CultureInfo
            Console.WriteLine("CultureInfo:");
            Console.WriteLine("");
            
            var pt = new CultureInfo("pt-PT");
            var br = new CultureInfo("pt-BR");
            var enUs = new CultureInfo("en-US");
            var enUk = new CultureInfo("en-UK");
            var de = new CultureInfo("de-DE");
            var atual = CultureInfo.CurrentCulture;

            Console.WriteLine(DateTime.Now.ToString("D", atual));
        }
    }
}