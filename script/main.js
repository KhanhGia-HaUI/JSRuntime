"use strict";
/**
 * @param - Default JS Runtime Namespace
 */
/// <reference path="./Declare/FileStystem.d.ts" />
/// <reference path="./Declare/Console.d.ts" />
/// <reference path="./JSRuntime.d.ts" />
var JSRuntime;
(function (JSRuntime) {
    /**
     * @param js_version - Default version of script
     */
    JSRuntime.js_version = 0;
    /**
     * @param - Evaluate function
     */
    function evaluate() {
        const time_start = JSRuntime.Timer.StartTimer();
        Console.WriteLine(ConsoleADB.TextGenerator("green", "◉ JSRuntime ~ Script " + JSRuntime.js_version + " ~ Console " + ConsoleADB.console_version));
        Console.WriteLine(ConsoleADB.TextGenerator("cyan", "◉ Input an empty string to continue..."));
        JSRuntime.Argument.input();
        const time_end = JSRuntime.Timer.EndTimer();
        const full_time = JSRuntime.Timer.TimeSpent(time_start, time_end);
        ConsoleADB.WriteLine(ConsoleADB.TextGenerator("green", "◉ Time spent: " + full_time + "s"));
        ConsoleADB.ExecutionFinish(ConsoleADB.TextGenerator("green", "Press any key to continue..."));
        ConsoleADB.EndProcess();
    }
    JSRuntime.evaluate = evaluate;
})(JSRuntime || (JSRuntime = {}));
JSRuntime.evaluate();
