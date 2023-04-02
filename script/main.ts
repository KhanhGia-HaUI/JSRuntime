/**
 * @param - Default JS Runtime Namespace
 */

/// <reference path="./Declare/FileStystem.d.ts" />
/// <reference path="./Declare/Console.d.ts" />
/// <reference path="./JSRuntime.d.ts" />

namespace JSRuntime {
    /**
     * @param js_version - Default version of script
     */

    export const js_version: number = 0;

    /**
     * @param - Evaluate function
     */


    export function evaluate(args: Array<string>): void {

        Console.WriteLine("Argument size: " + args.length);

        for (let i = 0; i < args.length; i++) {

            Console.WriteLine(args[i]);

        }

        const time_start: number = Timer.StartTimer();

        Console.WriteLine(ConsoleADB.TextGenerator("green", "◉ JSRuntime ~ Script " + js_version + " ~ Console " + ConsoleADB.console_version));

        Console.WriteLine(ConsoleADB.TextGenerator("cyan", "◉ Input an empty string to continue..."));

        Input.Number.int_input(1, 3);

        const time_end: number = Timer.EndTimer();

        const full_time: number = Timer.TimeSpent(time_start, time_end);

        ConsoleADB.WriteLine(ConsoleADB.TextGenerator("green", "◉ Time spent: " + full_time + "s"));


        ConsoleADB.ExecutionFinish(ConsoleADB.TextGenerator("green", "Press any key to continue..."));


        ConsoleADB.EndProcess();


    }


}


JSRuntime.evaluate((args));
