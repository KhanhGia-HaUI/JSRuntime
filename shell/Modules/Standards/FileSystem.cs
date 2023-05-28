using System;
using System.Text;
using System.Text.Json;
using System.IO;

namespace Runtime.Modules.Standards.FileSystem
{

    public abstract class File_System_Abstract
    {
        public abstract string ReadText(string file_path, string encoding);
        public abstract void WriteText(string file_path, string data,string encoding);
        public abstract void CreateDirectory(string file_path);
        public abstract void DeleteDirectory(string file_path);

        public abstract Task<string> ReadText_Async(string file_path, string encoding);


    }

    public class FileSystem : File_System_Abstract
    {
        public FileSystem() { }


        public override void CreateDirectory(string path) {
            if (path == null)
            {
                throw new ArgumentNullException(path);
            }
            if(!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            return;
        }

        public override void DeleteDirectory(string file_path)
        {
            if(file_path == null)
            {
                throw new ArgumentNullException(file_path);
            }
            if (Directory.Exists(file_path))
            {
                /// Directory.Delete(string file_path & bool recursion)
                Directory.Delete(file_path, true);
            }
            return;
        }

        public override string ReadText(string file_path, string encoding = "UTF8")
        {
            return encoding switch
            {
                "utf8" => File.ReadAllText(file_path, encoding: Encoding.UTF8),
                "ascii" => File.ReadAllText(file_path, encoding: Encoding.ASCII),
                "latin1" => File.ReadAllText(file_path, encoding: Encoding.Latin1),
                "unicode" => File.ReadAllText(file_path, encoding: Encoding.Unicode),
                _ => File.ReadAllText(file_path, encoding: Encoding.Default),
            } ;
        }

        public override Task<string> ReadText_Async(string file_path, string encoding = "UTF8")
        {
            return encoding switch
            {
                "utf8" => File.ReadAllTextAsync(file_path, encoding: Encoding.UTF8),
                "ascii" => File.ReadAllTextAsync(file_path, encoding: Encoding.ASCII),
                "latin1" => File.ReadAllTextAsync(file_path, encoding: Encoding.Latin1),
                "unicode" => File.ReadAllTextAsync(file_path, encoding: Encoding.Unicode),
                _ => File.ReadAllTextAsync(file_path, encoding: Encoding.Default),
            };
        }

        public override void WriteText(string filepath, string data, string encoding = "UTF8")
        {
            switch(encoding)
            {
                case "utf8":
                    {
                        File.WriteAllText(filepath, data, encoding: Encoding.UTF8);
                        break;
                    }
                case "ascii":
                    {
                        File.WriteAllText(filepath, data, encoding: Encoding.ASCII);
                        break;
                    }
                case "latin1":
                    {
                        File.WriteAllText(filepath, data, encoding: Encoding.Latin1);
                        break;
                    }

                case "unicode":
                    {
                        File.WriteAllText(filepath, data, encoding: Encoding.Unicode);
                        break;
                    }

                default:
                    {
                        File.WriteAllText(filepath, data, encoding: Encoding.Default);
                        break;
                    }

            }
            return;
        }

        public class FormatRecords
        {
            private string _root;

            private string _dir;

            private string _basename;

            private string _extname;

            private string _name;

            #pragma warning disable IDE1006
            public string root
            {
                get { return this._root; }

                set { if (value != null)
                    {
                        this._root = value;
                    }
                }
            }

            public string dir
            {
                get { return this._dir; }
                set
                {
                    if(value != null)
                    {
                        this._dir = value;
                    }
                }
            }

            public string basename
            {
                get { return this._basename; }
                set
                {
                    if (value != null)
                    {
                        this._basename = value;
                    }
                }
            }

            public string extname
            {
                get { return this._extname; }
                set
                {
                    if (value != null)
                    {
                        this._extname = value;
                    }
                }
            }

            public string name
            {
                get { return this._name; }
                set
                {
                    if (value != null)
                    {
                        this._name = value;
                    }
                }
            }

            #pragma warning disable CS8618
            public FormatRecords()
            {
            }
            #pragma warning disable CS8618
            public FormatRecords(string root, string dir, string basename, string extname, string name)
            {
                if(root != null)
                {
                    this._root = root;
                }
                if(dir != null)
                {
                    this._dir = dir;
                }
                if(basename != null)
                {
                    this._basename = basename;
                }
                if(extname != null)
                {
                    this._extname = extname;
                }
                if(name != null)
                {
                    this._name = name;
                }
            }



            public override string ToString()
            {
                return JsonSerializer.Serialize<FormatRecords>(this);
            }

        }

        public class ParsedPath
        {

            #pragma warning disable IDE1006
            public string name { get; set; }
            public string dir { get; set; }
            public string ext { get; set; }
            public string baseName { get; set; }
        }

        public abstract class Path_Abstract
            // BASED ON https://nodejs.org/api/path.html with NodeJS 20.2.0 :: JS
        {
            /// <summary>
            ///  Example: "index.html" returns "index"
            /// </summary>
            /// <param name="path">File path of the file or directory in local machine</param>
            /// <param name="suffix">The replacer data</param>
            /// <returns>Returns basename of file or directory path</returns>
            public abstract string Basename(string path, params string[] suffix);

            /// <summary>
            /// Provides the platform-specific path delimiter:
            /// `;` for Windows
            /// `:` for POSIX
            /// </summary>
            /// <returns></returns>

            public abstract string Delimiter();

            /// <summary>
            /// Example: "/test/st/sf/main.js" returns "/test/st/sf"
            /// </summary>
            /// <param name="path">File path or directory path</param>
            /// <returns>Returns directory contains the file or directory</returns>
            public abstract string Dirname(string path);


            /// <summary>
            /// Example "main.js" returns ".js"
            /// </summary>
            /// <param name="path">File path or directory path</param>
            /// <returns>Returns file extension</returns>
            public abstract string Extname(string path);


            public abstract FormatRecords Format(string dir, string root, string basename, string name, string ext);



            public abstract bool IsAbsolute(string path);



            public abstract string Join(params string[] paths);



            public abstract string Normalize(string path);


            public abstract ParsedPath Parse(string filePath);



            public abstract string Relative(string from, string to);


            public abstract string Resolve(string path);


            public abstract string Sep();

            public abstract string GetFileName(string path);


        }


        public class Implement_Path : Path_Abstract
        {
            public override string Basename(string path, params string[] suffixs)
            {
                if(suffixs.Length == 0)
                {
                    return Path.GetFileName(path);
                }
                else
                {
                    var basename_without_extension = Path.GetFileName(path);
                    foreach(var suffix in suffixs)
                    {
                        basename_without_extension = basename_without_extension.Replace(suffix, $"");
                    }
                    return basename_without_extension;
                }
            }

            public override string Delimiter() => Runtime.Modules.Standards.Platform.CurrentPlatform() == $"windows" ? $";" : $":";

            #pragma warning disable CS8603

            public override string Dirname(string path) => Path.GetDirectoryName(path);

            public override string Extname(string path) => Path.GetExtension(path);


            #pragma warning disable IDE0090

            public override FormatRecords Format(string dir, string root, string basename, string name, string ext) =>
                new FormatRecords(root, dir, basename, ext, name);

            public override bool IsAbsolute(string path) => Path.IsPathRooted(path);

            public override string Join(params string[] paths) => Path.Join(paths);

            public override string Normalize(string path) => Path.GetFullPath(path);

            public override ParsedPath Parse(string filePath) =>  new ParsedPath
                {
                    name = this.GetFileName(filePath),
                    dir = this.Dirname(filePath),
                    ext = this.Extname(filePath),
                    baseName = this.Basename(filePath),
                };



            public override string Relative(string from, string to) => Path.GetFullPath(Path.Combine(from, to));

            public override string Resolve(string path) => Path.GetFullPath(path);

            public override string Sep() => Runtime.Modules.Standards.Platform.CurrentPlatform() == $"windows" ? @"\" : @"/";

            public override string GetFileName(string path) => Path.GetFileName(path);

        }

    }
}
