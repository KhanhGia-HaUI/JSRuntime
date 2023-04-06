using System.Text;

namespace JSRuntime
{
    public class Program
    {
        static async Task Main(string[] args)
        {
            System.Console.OutputEncoding = Encoding.UTF8; 
            JSRuntime.JS.Scope.FileSystem fs = new JS.Scope.FileSystem();
            JSRuntime.JS.Scope.Evaluate(
                fs.ReadFile($"{System.AppDomain.CurrentDomain.BaseDirectory}/script/main.js"),
                args as string[], 
                System.AppDomain.CurrentDomain.BaseDirectory
                );
        }
    }
}