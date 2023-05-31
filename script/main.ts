namespace Runtime.Script {
    export async function Main(argument: string[]): Promise<void> {
        try {
            const dimension = DotNetBitmap.GetDimension<int>("./src/R.png");
            Console.Print(dimension.file_path);
        } catch (error) {
            Console.Print(error);
        }
        Console.Input();
    }
}

Runtime.Script.Main(args);
