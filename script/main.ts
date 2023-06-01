namespace Runtime.Script {
    /**
     * @package Script loaded to the Runtime
     */
    export const ScriptModules: Array<string> = [
        ...new Set([
            Path.Resolve(`${MainScriptDirectory}/modules/constraints/compression.js`),
            Path.Resolve(`${MainScriptDirectory}/modules/constraints/crypto.js`),
            Path.Resolve(`${MainScriptDirectory}/modules/constraints/filesystem.js`),
            Path.Resolve(`${MainScriptDirectory}/modules/system/default/timer.js`),
            Path.Resolve(`${MainScriptDirectory}/modules/system/implement/json.js`),
            Path.Resolve(`${MainScriptDirectory}/modules/system/implement/javascript.js`),
            Path.Resolve(`${MainScriptDirectory}/modules/third/maxrects-packer/maxrects-packer.js`),
            Path.Resolve(`${MainScriptDirectory}/modules/third/cross-path-sort/index.js`),
            Path.Resolve(`${MainScriptDirectory}/modules/constraints/platform.js`),
            // Path.Resolve(`${MainScriptDirectory}/modules/system/implement/exception.js`),
        ]),
    ];

    /**
     *
     * @param scripts - Pass scripts here
     * @returns
     */

    export function LoadModules(scripts: Array<string>): void {
        for (const script of scripts) {
            JavaScriptEngine.Execute(
                Fs.ReadText(script, 0 as Runtime.Script.Modules.FileSystem.Constraints.EncodingType.UTF8),
            );
        }
        return;
    }

    /**
     *
     * @param argument - Pass arguments from .NET here
     */

    export async function Main(argument: string[]): Promise<void> {
        const time_start: number = Date.now();
        Runtime.Script.LoadModules(Runtime.Script.ScriptModules);
        const time_end: number = Date.now();
        Console.Print(Runtime.Script.Modules.Platform.Constraints.ConsoleColor.Green, `Modules has been loaded`);
        Console.Print(
            Runtime.Script.Modules.Platform.Constraints.ConsoleColor.Green,
            `Time spent: ${Runtime.Script.Modules.System.Default.Timer.CalculateTime(time_start, time_end, 3)}s`,
        );
    }
}

Runtime.Script.Main(args);
