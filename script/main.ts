namespace Runtime.Script {
    export async function Main(argument: string[]) {
        const directory_test: Array<string> = Fs.ReadDirectory(
            "./Script",
            Runtime.Script.Modules.FileSystem.Constraints.ReadDirectory.AllNestedDirectory,
        );
        for (const directory of directory_test) {
            Console.Print(Path.Parse(directory).dir);
        }
    }
}

Runtime.Script.Main(args);
