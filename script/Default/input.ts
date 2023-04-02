/**
 * @param - JS Input implement C#
 */

/// <reference path="../Declare/FileStystem.d.ts" />
/// <reference path="../Declare/Console.d.ts" />
/// <reference path="../Declare/ConsoleADB.d.ts" />
/// <reference path="../JSRuntime.d.ts" />

module JSRuntime {

    /**
     * 
     * @returns - C# ReadLine normal
     */
    export namespace Argument {
        export function input(): string {
            Console.Write(ConsoleADB.TextAreaGenerator("cyan", "◉ "));
            return Console.ReadLine();
        }


        /**
         * 
         * @param min_val - Pass the smaller value here
         * @param max_val - Pass the biggest value here
         * @returns - Suitable number
         */


        export function int_input
            (
                min_val: number,
                max_val: number,
            ): number {
            let input_data = parseInt(input());
            while (true) {
                if (typeof (input_data) === "number" && input_data >= min_val && input_data <= max_val) {
                    break;
                }
                ConsoleADB.ExecutionError("The input should be in range [" + min_val + "," + max_val + "]");
                input_data = parseInt(input());
            }
            return input_data;
        }

    }


}
