"use strict";
/**
 * @param - JS Input implement C#
 */
/// <reference path="../Declare/FileStystem.d.ts" />
/// <reference path="../Declare/Console.d.ts" />
/// <reference path="../Declare/ConsoleADB.d.ts" />
/// <reference path="../JSRuntime.d.ts" />
var JSRuntime;
(function (JSRuntime) {
    /**
     *
     * @returns - C# ReadLine normal
     */
    let Argument;
    (function (Argument) {
        function input() {
            Console.Write(ConsoleADB.TextAreaGenerator("cyan", "◉ "));
            return Console.ReadLine();
        }
        Argument.input = input;
        /**
         *
         * @param min_val - Pass the smaller value here
         * @param max_val - Pass the biggest value here
         * @returns - Suitable number
         */
        function int_input(min_val, max_val) {
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
        Argument.int_input = int_input;
    })(Argument = JSRuntime.Argument || (JSRuntime.Argument = {}));
})(JSRuntime || (JSRuntime = {}));
