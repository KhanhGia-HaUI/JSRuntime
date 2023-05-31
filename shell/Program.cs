namespace Runtime
{
     internal class Program
    {
        public static void Main(string[] args)
        {
            var SystemConsole = new Runtime.Modules.Standards.SystemImplement();
            var Script_Directory = $"{Modules.Standards.Platform.CurrentDirectoryContainsShell}/Script";
            try
            {
                Runtime.Modules.JavaScript.Engine.Evaluate(ref Script_Directory, args);
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