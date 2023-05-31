namespace Runtime.Modules.JavaScript
{
    public class Engine
    {
        public static void Evaluate(ref string Script_Directory, string[] args)
        {

            var path = new Runtime.Modules.Standards.IOModule.Implement_Path();
            Script_Directory = path.Resolve(Script_Directory);
            var fs = new Runtime.Modules.Standards.IOModule.FileSystem();
            var main_js = $"{Script_Directory}/main.js";
            var SystemConsole = new Runtime.Modules.Standards.SystemImplement();
            var system_engine_type_checker = new Runtime.Modules.Standards.TypeChecker();
            var engine = new Jint.Engine();

            var Scripts = new string[] {
                $"{Script_Directory}/modules/constraints/compression.js",
                $"{Script_Directory}/modules/constraints/crypto.js",
                $"{Script_Directory}/modules/constraints/filesystem.js",

            };

            engine.SetValue("Fs", fs);
            engine.SetValue("args", args);
            engine.SetValue("MainScriptDirectory", (Script_Directory));
            engine.SetValue("Console", SystemConsole);
            engine.SetValue("TypeChecker", system_engine_type_checker);
            engine.SetValue("JavaScriptEngine", engine);
            engine.SetValue("Path", path);
            engine.SetValue("Platform", new Runtime.Modules.Standards.Platform());
            engine.SetValue("DotNetBitmap", new Runtime.Modules.Standards.Bitmap.Bitmap_Implement());
            engine.SetValue("DotNetCrypto", new Runtime.Modules.Standards.ImplementCrypto());
            engine.SetValue("DotNetCompress", new Runtime.Modules.Standards.Compress());
            engine.SetValue("JsonLibrary", new Runtime.Modules.Standards.JsonImplement());

            foreach (var Script in Scripts)
            {
                try
                {
                    var k_module = fs.ReadText(Script, Standards.IOModule.EncodingType.UTF8);
                    engine.Execute(k_module);
                }
                catch (Exception ex)
                {
                    SystemConsole.Print($"Error executing script {Script}: {ex}");
                }
            }

            try
            {
                engine.Execute(fs.ReadText(main_js, Standards.IOModule.EncodingType.UTF8));
            }
            catch (Exception ex)
            {
                SystemConsole.Print($"Error executing main script: {ex}");
            }
            return;
        }

    }
}
