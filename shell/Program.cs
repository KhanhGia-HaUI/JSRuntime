namespace Runtime
{
     internal class Program
    {
        public static void Main(string[] args)
        {
            Runtime.Modules.JavaScript.Engine.Evaluate($"./Script", args);
            Console.ReadKey();
        }
    }
}