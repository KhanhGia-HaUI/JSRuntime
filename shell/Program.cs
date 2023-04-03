using JSRuntime.Console;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace JSRuntime
{
    public class Program
    {
        static void Main(string[] args)
        {
            System.Console.OutputEncoding= Encoding.UTF8;
            JSRuntime.JS.Scope.Evaluate(System.IO.File.ReadAllText("./script/main.js"), args);
        }
    }
}