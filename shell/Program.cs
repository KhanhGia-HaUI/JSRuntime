namespace Runtime
{
     internal class Program
    {
        public static void Main(string[] args)
        {
            try
            {
                Runtime.Modules.JavaScript.Engine.Evaluate($"{Runtime.Modules.Standards.Platform.CurrentDirectoryContainsShell}/Script", args);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            finally
            {
                Console.ReadKey();
            }
        }
    }
}