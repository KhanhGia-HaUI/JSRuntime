namespace Runtime.Modules.JavaScript
{
    public class Engine
    {
        public static void Evaluate(string Script_Directory, string[] args)
        {
            var fs = new Runtime.Modules.Standards.IOModule.FileSystem();
            var main_js = $"{Script_Directory}/main.js";
            var system_engine_console = new Runtime.Modules.Standards.System();
            var system_engine_type_checker = new Runtime.Modules.Standards.TypeChecker();
            var engine = new Jint.Engine();

            #pragma warning disable CA1825

            var Scripts =  new string[] { };

            engine.SetValue("fs", fs);
            engine.SetValue("args", args);
            engine.SetValue("Console", system_engine_console);
            engine.SetValue("TypeChecker", system_engine_type_checker);
            engine.SetValue("JavaScriptEngine", engine);
            engine.SetValue("Path", new Runtime.Modules.Standards.IOModule.Implement_Path());
            engine.SetValue("Platform", new Runtime.Modules.Standards.Platform());

            foreach (var Script in Scripts)
            {
                try
                {
                    var k_module = fs.ReadText(Script, Standards.IOModule.EncodingType.UTF8);
                    engine.Execute(k_module);
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error executing script {Script}: {ex}");
                }
            }

            try
            {
                engine.Execute(fs.ReadText(main_js, Standards.IOModule.EncodingType.UTF8));
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error executing main script: {ex}");
            }
            return;
        }

    }
}
