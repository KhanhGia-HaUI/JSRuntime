namespace Runtime.Script {
    export async function Main(argument: string[]): Promise<void> {
        try {
            const max_rects_bin = new Runtime.Script.Modules.Third.JavaScript.MaxRectsPacker.MaxRectsPacker();
        } catch (error: any) {
            Console.Print(error);
        }
    }
}

Runtime.Script.Main(args);
