/**
 * @param - JS Input implement C#
 */

/// <reference path="../Declare/FileSystem.d.ts" />
/// <reference path="../Declare/Console.d.ts" />
/// <reference path="../Declare/ConsoleADB.d.ts" />
/// <reference path="../JSRuntime.d.ts" />

namespace JSRuntime.Input {

    /**
     * 
     * @returns - C# ReadLine normal
     */



    export namespace Argument {


        /**
         * 
         * @returns - The input argument value as string
         */


        export function input(): string {
            Console.Write(ConsoleADB.TextAreaGenerator("cyan", "◉ "));
            return Console.ReadLine();
        }


        /**
         * 
         * @param min_val - Pass the smaller value here
         * @param max_val - Pass the biggest value here
         * @returns - A string with the generated text
         */


        export function generate_notify
            (
                min_val: number,
                max_val: number,
            ): string {
            let notify_message = "The input should be ";
            for (let i: number = min_val; i <= max_val; ++i) {
                if (i === max_val) {
                    notify_message += ("or " + i);
                    break;
                }
                if (i === max_val - 1) {
                    notify_message += (i + " ");
                    continue;
                }
                notify_message += (i + ", ");
            }
            return notify_message;
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
            let input_data: number = parseInt(input());
            let notify_message: string;
            while (true as boolean) {
                switch (max_val - min_val) {
                    case 1:
                        notify_message = "The input should be " + min_val + " or " + max_val;
                        break;
                    case 2:
                        notify_message = generate_notify(min_val, max_val);
                        break;
                    default:
                        notify_message = "The input should be in range [" + min_val + "," + max_val + "]";
                        break;
                }
                if (typeof (input_data) === "number" && input_data >= min_val && input_data <= max_val) {

                    break;

                }

                ConsoleADB.ExecutionError(notify_message as string);

                input_data = parseInt(input());
            }

            return input_data;
        }


        export function input_filepath
            (): Array<string> {

            Console.WriteLine(ConsoleADB.TextGenerator("cyan", "◉ Input file path as string to continue..."));

            const filepath_list: Array<string> = new Array();

            let create_new_input_file_path: string = input();

            while (true) {

                create_new_input_file_path = FileStream.CheckSlash(create_new_input_file_path);

                if (create_new_input_file_path === "") {
                    break;
                }

                if (FileStream.IsFile(create_new_input_file_path) || FileStream.IsDirectory(create_new_input_file_path)) {
                    filepath_list.push(create_new_input_file_path);
                    ConsoleADB.ExecutionCount(filepath_list.length.toString());
                }

                else {
                    ConsoleADB.ExecutionError("The input data is not a valid file or directory on local machine");
                }

                create_new_input_file_path = input();

            }


            return filepath_list;
        }


    }



}
