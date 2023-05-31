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
            var engine = new Jint.Engine();

            var Scripts = new string[] {
                path.Resolve($"{Script_Directory}/modules/constraints/compression.js"),
                path.Resolve($"{Script_Directory}/modules/constraints/crypto.js"),
                path.Resolve($"{Script_Directory}/modules/constraints/filesystem.js"),
                path.Resolve($"{Script_Directory}/modules/system/default/timer.js"),
                path.Resolve($"{Script_Directory}/modules/system/default/timer.js"),
                path.Resolve($"{Script_Directory}/modules/system/implement/json.js"),
                path.Resolve($"{Script_Directory}/modules/system/implement/filesystem.js"),
                path.Resolve($"{Script_Directory}/modules/system/implement/javascript.js"),
                path.Resolve($"{Script_Directory}/modules/third/maxrects-packer/maxrects-packer.js"),
                path.Resolve($"{Script_Directory}/modules/third/cross-path-sort/index.js"),

            };

            engine.SetValue("Fs", fs);
            engine.SetValue("args", args);
            engine.SetValue("MainScriptDirectory", (Script_Directory));
            engine.SetValue("Console", SystemConsole);
            engine.SetValue("TypeChecker", new Runtime.Modules.Standards.TypeChecker());
            engine.SetValue("JavaScriptEngine", engine);
            engine.SetValue("Path", path);
            engine.SetValue("Platform", new Runtime.Modules.Standards.Platform());
            engine.SetValue("DotNetBitmap", new Runtime.Modules.Standards.Bitmap.Bitmap_Implement());
            engine.SetValue("DotNetCrypto", new Runtime.Modules.Standards.ImplementCrypto());
            engine.SetValue("DotNetCompress", new Runtime.Modules.Standards.Compress());
            engine.SetValue("JsonLibrary", new Runtime.Modules.Standards.JsonImplement());
            engine.SetValue("ScriptModules", Scripts);

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
