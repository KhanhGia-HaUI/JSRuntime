namespace Runtime
{
     internal class Program
    {
        public static void Main(string[] args)
        {
            var SystemConsole = new Runtime.Modules.Standards.SystemImplement();
            try
            {
                Runtime.Modules.JavaScript.Engine.Evaluate($"{Runtime.Modules.Standards.Platform.CurrentDirectoryContainsShell}/Script", args);
            }
            catch (Exception ex)
            {
                SystemConsole.Print(ex.ToString());
            }
            finally
            {
                SystemConsole.TerminateProgram();
            }
        }
    }
}