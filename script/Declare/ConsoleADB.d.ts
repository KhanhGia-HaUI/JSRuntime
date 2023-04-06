/**
 * @param - Implement C# Console - Console ADB
 */



declare namespace ConsoleADB {

    /**
     * 
     * @param params - Pass any arguments here as string...
     * @argument - String data type
     * @returns - console.log(that.data)
     */

    function WriteLine(...params: Array<string>): void;


    /**
     * 
     * @param color - Input color
     * @param params - Arguments
     * @returns - New generated color
     */

    function TextGenerator(
        color: "red" |
            "blue" |
            "green" |
            "white" |
            "yellow" |
            "magenta" |
            "cyan" |
            "black",
        ...params: string[]): string;



    /**
     * 
     * @param params - Pass any arguments here as string...
     * @argument - String data type
     * @returns - console.error(that.data)
     */

    function ExecutionError(
        ...params: string[]): void;


    /**
     * @param - Console Version 
     */

    export const console_version: number;

    /**
         * 
         * @param color - Input color
         * @param params - Arguments
         * @returns - New generated color
         */

    function TextAreaGenerator(
        color: "red" |
            "blue" |
            "green" |
            "white" |
            "yellow" |
            "magenta" |
            "cyan" |
            "black",
        ...params: string[]): string;



    /**
     * @param - End the tool process 
     */



    function EndProcess(

    ): void;



    /**
     * 
     * @param params - Pass any arguments here as string...
     * @argument - String data type
     * @returns - console.finish(that.data)
     */

    function ExecutionFinish(
        ...params: string[]): void;



    /**
        * 
        * @param params - Pass any arguments here as string...
        * @argument - String data type
        * @returns - console.finish(that.data)
        */

    function ExecutionCount(
        ...params: string[]): void;




}
