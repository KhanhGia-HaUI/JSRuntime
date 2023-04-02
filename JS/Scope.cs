using Jint;

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
                return System.IO.Path.GetFullPath(filepath);
            }

            public string File_Extension(string filepath)
            {
                return System.IO.Path.GetExtension(filepath);
            }

            public string File_Basename(string filepath)
            {
                return System.IO.Path.GetFileName(filepath);
            }

            public bool IsFile(string filepath)
            {
                 if (!System.IO.File.Exists(filepath))
                 {
                    return false;
                 }
                return true;
            }

            public bool IsDirectory(string filepath)
            {
                if (!System.IO.Directory.Exists(filepath))
                {
                    return false;
                }
                return true;
            }

            public string DirectoryName(string filepath)
            {
                return Path.GetDirectoryName(filepath);
            }

            public void CreateDirectory(string path)
            {
                if (string.IsNullOrEmpty(path))
                {
                    return;
                }

                string parentFolder = this.DirectoryName(path);

                if (!this.IsDirectory(parentFolder))
                {
                    this.CreateDirectory(parentFolder);
                }

                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }
            }

            public void DeleteEverythingInFolder(string folderPath)
            {
                if (!Directory.Exists(folderPath))
                {
                    return;
                }

                DirectoryInfo directoryInfo = new DirectoryInfo(folderPath);
                foreach (FileInfo file in directoryInfo.GetFiles())
                {
                    file.Delete();
                }
                foreach (DirectoryInfo subfolder in directoryInfo.GetDirectories())
                {
                    subfolder.Delete(true);
                }
            }

        }
        public static void Evaluate(string script, string[] arguments)
        {
            {
                FileSystem fileSystem = new FileSystem();
                var engine = new Engine();
                engine.SetValue("fs", fileSystem);
                engine.SetValue("Console", typeof(System.Console));
                engine.SetValue("ConsoleADB", typeof(JSRuntime.Console.ConsoleADB));
                engine.SetValue("args", arguments);
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
