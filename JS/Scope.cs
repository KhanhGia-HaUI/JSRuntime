using Jint;
using System;
using System.Text.Json;

namespace JSRuntime.JS
{
    public class Scope
    {

        public class FileSystem
        {
            public string ReadFile(string path)
            {
                return System.IO.File.ReadAllText(path);
            }

            public void WriteFile(string path, string content)
            {
                System.IO.File.WriteAllText(path, content);
            }


            public string FullPath(string filepath)
            {
                return Path.GetFullPath(filepath);
            }
        }
        public static void Evaluate(string script)
        {
            {
                FileSystem fileSystem = new FileSystem();
                var engine = new Engine();
                engine.SetValue("fs", fileSystem);
                engine.SetValue("Console", typeof(System.Console));
                engine.SetValue("ConsoleADB", typeof(JSRuntime.Console.ConsoleADB));
                string[] moduleFiles = new[] 
                { 
                    "./script/Default/input.js",
                    "./script/Default/timer.js",
                };
                foreach (string moduleFile in moduleFiles)
                {
                    string moduleContent = File.ReadAllText(moduleFile);
                    engine.Execute(moduleContent);
                }
                try
                {
                    engine.Execute(script);
                }
                catch (Exception ex)
                {
                    System.Console.WriteLine(ex.Message);
                }
            }
        }
    }
}
