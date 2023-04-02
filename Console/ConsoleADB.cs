using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace JSRuntime.Console
{
    public class ConsoleADB
    {
        public static void WriteLine(params string[] list_str)
        {
            foreach(string str in list_str)
            {
                System.Console.WriteLine(str);
            }
        }


        /// <summary>
        /// Trả về Text sau khi được gán hay generate màu
        /// </summary>
        /// <param name="color">"red", "blue", "green", "white", "yellow", "magenta", "cyan", "black"</param>
        /// <param name="list_str">Văn bản đi vào</param>
        /// 

        public static string TextGenerator(string color, params string[] list_str)
        {
            string new_empty_str = "";
            new_empty_str += color switch
            {
                "red" => "\u001b[31m",
                "blue" => "\x1b[34m",
                "green" => "\x1b[32m",
                "white" => "\x1b[37m",
                "yellow" => "\x1b[33m",
                "magenta" => "\x1b[35m",
                "cyan" => "\x1b[36m",
                "black" => "\x1b[30m",
                _ => "\u001b[0m",
            };
            foreach (string str in list_str)
            {
                new_empty_str += str;
            }
            return new_empty_str + "\x1b[0m";
        }


        /// <summary>
        /// Trả về Text sau khi được gán hay generate màu & toàn bộ phần sau ăn màu thằng trước
        /// </summary>
        /// <param name="color">"red", "blue", "green", "white", "yellow", "magenta", "cyan", "black"</param>
        /// <param name="list_str">Văn bản đi vào</param>
        /// 

        public static string TextAreaGenerator(string color, params string[] list_str)
        {
            string new_empty_str = "";
            new_empty_str += color switch
            {
                "red" => "\u001b[31m",
                "blue" => "\x1b[34m",
                "green" => "\x1b[32m",
                "white" => "\x1b[37m",
                "yellow" => "\x1b[33m",
                "magenta" => "\x1b[35m",
                "cyan" => "\x1b[36m",
                "black" => "\x1b[30m",
                _ => "\u001b[0m",
            };
            foreach (string str in list_str)
            {
                new_empty_str += str;
            }
            return new_empty_str;
        }


        /// <summary>
        /// Ném error ra ngoài màn hình
        /// </summary>
        /// <param name="list_str">Văn bản đi vào</param>
        /// 
        public static void ExecutionError(params string[] list_str)
        {
            string new_empty_str = "◉ Execution error: ";
            foreach (string str in list_str)
            {
                new_empty_str += (str);
            }
            JSRuntime.Console.ConsoleADB.WriteLine(JSRuntime.Console.ConsoleADB.TextGenerator("red", new_empty_str));
        }

        public readonly static int console_version = 0;



        /// <summary>
        /// Dừng chương trình đến khi nào ấn một phím bất kì
        /// </summary>
        /// 


        public static void EndProcess()
        {
            System.Console.ReadKey();
        }



        public static void ExecutionFinish(params string[] list_str)
        {
            string new_empty_str = "◉ Execution finish: ";
            foreach (string str in list_str)
            {
                new_empty_str += (str);
            }
            JSRuntime.Console.ConsoleADB.WriteLine(JSRuntime.Console.ConsoleADB.TextGenerator("green", new_empty_str));
        }


    }
}
