namespace Runtime
{
     internal class Program
    {
        public static int Main(string[] args)
        {
            var SystemConsole = new Runtime.Modules.Standards.SystemImplement();
            var Script_Directory = $"{Runtime.Modules.Standards.Platform.CurrentDirectoryContainsShell}/Script";
            try
            {
                Runtime.Modules.JavaScript.Engine.Evaluate(ref Script_Directory, args);
            }
            catch (Exception ex)
            {
                SystemConsole.Print(null,ex.ToString());
            }
            finally
            {
                SystemConsole.TerminateProgram();
            }
            return 0;
        }
    }
}