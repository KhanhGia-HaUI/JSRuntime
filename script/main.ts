namespace Runtime.Script {
    export async function Main(argument: string[]) {
        const text: string = fs.ReadText("./src/main.ts", Modules.FileSystem.Constraints.EncodingType.UTF8);
        Console.Print(text);
    }
}

Runtime.Script.Main(args);
