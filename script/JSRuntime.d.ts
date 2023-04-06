/**
 * @param JSRuntime - Default namespace
 */

declare namespace JSRuntime {


    /**
     * @param Argument - The argument input declaration 
     */

    namespace Argument {



        /**
         * 
         * @returns - The input argument value as string
         * 
         */



        function input(): string;



        /**
         * 
         * @param min_val - Pass the smaller value here
         * @param max_val - Pass the biggest value here
         * @returns - A string with the generated text
         */



        function int_input
            (
                min_val: number,
                max_val: number,
            ): number;



        function input_filepath
            (): Array<string>;




    }




    /**
     * @param ConsoleVersion - The version declared in Shell
     */



    export const ConsoleVersion: number;


}

/**
 * @param args - The argument passed in process
 */

declare const args: Array<string>;



/**
 * @param - Return the toolkit.exe current directory
 */

declare const ShellDirectory: string;


