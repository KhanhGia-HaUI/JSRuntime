using JSRuntime.Console;
using System.IO.Compression;

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

            public void CreateZip(string zipPath, params string[] filePaths)
            {
                using (ZipArchive archive = ZipFile.Open(zipPath, ZipArchiveMode.Create))
                {
                    foreach (string filePath in filePaths)
                    {
                        if (File.Exists(filePath))
                        {
                            string fileName = Path.GetFileName(filePath);
                            archive.CreateEntryFromFile(filePath, fileName);
                        }
                        else
                        {
                            System.Console.WriteLine(
                                JSRuntime.Console.ConsoleADB.TextAreaGenerator("red", $"File not found: {filePath}")
                                );
                        }
                    }
                }
            }

            public void UncompressZip(string zipPath, string outputFolder)
            {
                if (File.Exists(zipPath))
                {
                    ZipFile.ExtractToDirectory(zipPath, outputFolder);
                }
                else
                {
                    System.Console.WriteLine(JSRuntime.Console.ConsoleADB.TextAreaGenerator("red", $"Zip file not found: {zipPath}"));
                }
            }

            public string CheckSlash(string createNewInputFilePath)
            {
                if (createNewInputFilePath.StartsWith("\"") && createNewInputFilePath.EndsWith("\""))
                {
                    createNewInputFilePath = createNewInputFilePath.Substring(1, createNewInputFilePath.Length - 2);
                }
                return createNewInputFilePath;
            }
        }
        public static void Evaluate(string script, string[] arguments, string placeholder)
        {
            {
                FileSystem fileSystem = new JSRuntime.JS.Scope.FileSystem();
                var engine = new Jint.Engine();
                engine.SetValue("FileStream", fileSystem);
                engine.SetValue("Console", typeof(System.Console));
                engine.SetValue("ConsoleADB", typeof(JSRuntime.Console.ConsoleADB));
                engine.SetValue("args", arguments);
                engine.SetValue("ShellDirectory", placeholder);
                string[] moduleFiles = new[] 
                { 
                    $"{placeholder}/script/Default/input.js",
                    $"{placeholder}/script/Default/timer.js",
                    $"{placeholder}/script/Default/executor.js",
                };
                foreach (string moduleFile in moduleFiles)
                {
                    string moduleContent = fileSystem.ReadFile(moduleFile);
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
