/**
 * @param - Default JS Runtime Namespace
 */

/// <reference path="./Declare/FileSystem.d.ts" />
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


    export function Evaluate(args: Array<string>): void {


        // Console.WriteLine("Argument size: " + args.length);

        // for (let i = 0; i < args.length; i++) {

        //     Console.WriteLine(args[i]);

        // }
        Console.WriteLine(ConsoleADB.TextGenerator("green", "◉ JSRuntime ~ Script " + js_version + " ~ Console " + ConsoleADB.console_version));

        Executor.Evaluate(args);


        ConsoleADB.EndProcess();



    }


}


(JSRuntime.Evaluate((args)));
