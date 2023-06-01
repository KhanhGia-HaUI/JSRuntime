namespace Runtime.Modules.Standards
{

    public abstract class SystemAbstract
    {
        public abstract void Print(Runtime.Modules.Standards.ConsoleColor? color, params string[] texts);

        public abstract void Printf(Runtime.Modules.Standards.ConsoleColor? color, params string[] texts);

        public abstract string? Input<T>();

        public abstract void TerminateProgram();

    }


    public class SystemImplement : SystemAbstract
    {
        public override void Print(Runtime.Modules.Standards.ConsoleColor? color, params string[] texts)
        {
            var platform = new Runtime.Modules.Standards.Platform();

            if (platform.RuntimeShell == ShellType.Console) {
                System.Console.ForegroundColor = color switch
                {
                    Runtime.Modules.Standards.ConsoleColor.Black => System.ConsoleColor.Black,
                    Runtime.Modules.Standards.ConsoleColor.Blue => System.ConsoleColor.Blue,
                    Runtime.Modules.Standards.ConsoleColor.Cyan => System.ConsoleColor.Cyan,
                    Runtime.Modules.Standards.ConsoleColor.DarkBlue => System.ConsoleColor.DarkBlue,
                    Runtime.Modules.Standards.ConsoleColor.DarkCyan => System.ConsoleColor.DarkCyan,
                    Runtime.Modules.Standards.ConsoleColor.DarkGray => System.ConsoleColor.DarkGray,
                    Runtime.Modules.Standards.ConsoleColor.DarkGreen => System.ConsoleColor.DarkGreen,
                    Runtime.Modules.Standards.ConsoleColor.DarkMagenta => System.ConsoleColor.DarkMagenta,
                    Runtime.Modules.Standards.ConsoleColor.DarkRed => System.ConsoleColor.DarkRed,
                    Runtime.Modules.Standards.ConsoleColor.DarkYellow => System.ConsoleColor.DarkYellow,
                    Runtime.Modules.Standards.ConsoleColor.Gray => System.ConsoleColor.Gray,
                    Runtime.Modules.Standards.ConsoleColor.Green => System.ConsoleColor.Green,
                    Runtime.Modules.Standards.ConsoleColor.Magenta => System.ConsoleColor.Magenta,
                    Runtime.Modules.Standards.ConsoleColor.Red => System.ConsoleColor.Red,
                    Runtime.Modules.Standards.ConsoleColor.White => System.ConsoleColor.White,
                    Runtime.Modules.Standards.ConsoleColor.Yellow => System.ConsoleColor.Yellow,
                    _ => System.ConsoleColor.White,
                };
            }

            var text = (platform.RuntimeShell == ShellType.Console) ? (platform.IsUTF8Support() ? "● " : "$ ") : color switch
            {
                Runtime.Modules.Standards.ConsoleColor.Black => "\x1b[30m",
                Runtime.Modules.Standards.ConsoleColor.Blue => "\x1b[34m",
                Runtime.Modules.Standards.ConsoleColor.Cyan => "\x1b[36m",
                Runtime.Modules.Standards.ConsoleColor.DarkBlue => "\x1b[34m",
                Runtime.Modules.Standards.ConsoleColor.DarkCyan => "\x1b[36m",
                Runtime.Modules.Standards.ConsoleColor.DarkGray => "\x1b[90m",
                Runtime.Modules.Standards.ConsoleColor.DarkGreen => "\x1b[32m",
                Runtime.Modules.Standards.ConsoleColor.DarkMagenta => "\x1b[35m",
                Runtime.Modules.Standards.ConsoleColor.DarkRed => "\x1b[31m",
                Runtime.Modules.Standards.ConsoleColor.DarkYellow => "\x1b[33m",
                Runtime.Modules.Standards.ConsoleColor.Gray => "\x1b[37m",
                Runtime.Modules.Standards.ConsoleColor.Green => "\x1b[32m",
                Runtime.Modules.Standards.ConsoleColor.Magenta => "\x1b[35m",
                Runtime.Modules.Standards.ConsoleColor.Red => "\x1b[31m",
                Runtime.Modules.Standards.ConsoleColor.White => "\x1b[37m",
                Runtime.Modules.Standards.ConsoleColor.Yellow => "\x1b[33m",
                _ => "\x1b[0m"
            } + (platform.IsUTF8Support() ? "● " : "$ ");

            foreach ( var t in texts)
            {
                text += t?.ToString();
            }
            if(platform.RuntimeShell == ShellType.GUI)
            {
                text += $"\x1b[0m";
            }
            Console.WriteLine(text);
            if(platform.RuntimeShell == ShellType.Console)
            {
                System.Console.ResetColor();
            }
        }

        public override void Printf(Runtime.Modules.Standards.ConsoleColor? color, params string[] texts)
        {
            var platform = new Runtime.Modules.Standards.Platform();

            if (platform.RuntimeShell == ShellType.Console)
            {
                System.Console.ForegroundColor = color switch
                {
                    Runtime.Modules.Standards.ConsoleColor.Black => System.ConsoleColor.Black,
                    Runtime.Modules.Standards.ConsoleColor.Blue => System.ConsoleColor.Blue,
                    Runtime.Modules.Standards.ConsoleColor.Cyan => System.ConsoleColor.Cyan,
                    Runtime.Modules.Standards.ConsoleColor.DarkBlue => System.ConsoleColor.DarkBlue,
                    Runtime.Modules.Standards.ConsoleColor.DarkCyan => System.ConsoleColor.DarkCyan,
                    Runtime.Modules.Standards.ConsoleColor.DarkGray => System.ConsoleColor.DarkGray,
                    Runtime.Modules.Standards.ConsoleColor.DarkGreen => System.ConsoleColor.DarkGreen,
                    Runtime.Modules.Standards.ConsoleColor.DarkMagenta => System.ConsoleColor.DarkMagenta,
                    Runtime.Modules.Standards.ConsoleColor.DarkRed => System.ConsoleColor.DarkRed,
                    Runtime.Modules.Standards.ConsoleColor.DarkYellow => System.ConsoleColor.DarkYellow,
                    Runtime.Modules.Standards.ConsoleColor.Gray => System.ConsoleColor.Gray,
                    Runtime.Modules.Standards.ConsoleColor.Green => System.ConsoleColor.Green,
                    Runtime.Modules.Standards.ConsoleColor.Magenta => System.ConsoleColor.Magenta,
                    Runtime.Modules.Standards.ConsoleColor.Red => System.ConsoleColor.Red,
                    Runtime.Modules.Standards.ConsoleColor.White => System.ConsoleColor.White,
                    Runtime.Modules.Standards.ConsoleColor.Yellow => System.ConsoleColor.Yellow,
                    _ => System.ConsoleColor.White,
                };
            }

            var text = (platform.RuntimeShell == ShellType.Console) ? "" : color switch
            {
                Runtime.Modules.Standards.ConsoleColor.Black => "\x1b[30m",
                Runtime.Modules.Standards.ConsoleColor.Blue => "\x1b[34m",
                Runtime.Modules.Standards.ConsoleColor.Cyan => "\x1b[36m",
                Runtime.Modules.Standards.ConsoleColor.DarkBlue => "\x1b[34m",
                Runtime.Modules.Standards.ConsoleColor.DarkCyan => "\x1b[36m",
                Runtime.Modules.Standards.ConsoleColor.DarkGray => "\x1b[90m",
                Runtime.Modules.Standards.ConsoleColor.DarkGreen => "\x1b[32m",
                Runtime.Modules.Standards.ConsoleColor.DarkMagenta => "\x1b[35m",
                Runtime.Modules.Standards.ConsoleColor.DarkRed => "\x1b[31m",
                Runtime.Modules.Standards.ConsoleColor.DarkYellow => "\x1b[33m",
                Runtime.Modules.Standards.ConsoleColor.Gray => "\x1b[37m",
                Runtime.Modules.Standards.ConsoleColor.Green => "\x1b[32m",
                Runtime.Modules.Standards.ConsoleColor.Magenta => "\x1b[35m",
                Runtime.Modules.Standards.ConsoleColor.Red => "\x1b[31m",
                Runtime.Modules.Standards.ConsoleColor.White => "\x1b[37m",
                Runtime.Modules.Standards.ConsoleColor.Yellow => "\x1b[33m",
                _ => "\x1b[0m"
            };

            foreach (var t in texts)
            {
                text += t?.ToString();
            }
            if (platform.RuntimeShell == ShellType.GUI)
            {
                text += $"\x1b[0m";
            }
            Console.WriteLine(text);
            if (platform.RuntimeShell == ShellType.Console)
            {
                System.Console.ResetColor();
            }
        }

        public override string? Input<T>()
        {
            #pragma warning disable CS8600
            string data = Console.ReadLine();
            return data;
        }

        public override void TerminateProgram()
        {
            Console.ReadKey();
            return;
        }
    }

    public abstract class TypeCheckerAbstract
    {
        public abstract string GetStrictType(object data);

        protected abstract Type GetDataType(object data);

        protected abstract string GetTypeName(Type type);
    }

    public class TypeChecker : TypeCheckerAbstract
    {
        public override string GetStrictType(object data)
        {
            return GetTypeName(GetDataType(data));
        }

        protected override Type GetDataType(object data)
        {
            return data.GetType();
        }

        protected override string GetTypeName(Type type)
        {
            if (type == typeof(bool))
            {
                return "bool";
            }
            else if (type == typeof(byte))
            {
                return "byte";
            }
            else if (type == typeof(sbyte))
            {
                return "sbyte";
            }
            else if (type == typeof(char))
            {
                return "char";
            }
            else if (type == typeof(decimal))
            {
                return "decimal";
            }
            else if (type == typeof(double))
            {
                return "double";
            }
            else if (type == typeof(float))
            {
                return "float";
            }
            else if (type == typeof(int))
            {
                return "int";
            }
            else if (type == typeof(uint))
            {
                return "uint";
            }
            else if (type == typeof(long))
            {
                return "long";
            }
            else if (type == typeof(ulong))
            {
                return "ulong";
            }
            else if (type == typeof(object))
            {
                return "object";
            }
            else if (type == typeof(short))
            {
                return "short";
            }
            else if (type == typeof(ushort))
            {
                return "ushort";
            }
            else if (type == typeof(string))
            {
                return "string";
            }
            else
            {
                return type.Name;
            }
        }
    }
}
