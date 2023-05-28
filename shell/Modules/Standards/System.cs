namespace Runtime.Modules.Standards
{
    public class System
    {
        #pragma warning disable CA1822
        public void Print(params string[] texts)
        {
            var text = "";
            foreach ( var t in texts )
            {
                text += t?.ToString();
            }
            Console.WriteLine(text);
        }

        public string? Input<T>()
        {
            #pragma warning disable CS8600
            string data = Console.ReadLine();
            return data;
        }
    }

    public class TypeChecker
    {
        public string GetStrictType(object data)
        {
            return GetTypeName(GetDataType(data));
        }

        private Type GetDataType(object data)
        {
            return data.GetType();
        }

        private string GetTypeName(Type type)
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
