/**
 * @param - C# Console Calling from Jint Third Parties
 */



declare namespace Console {

    /**
     * 
     * @param params - Pass any arguments here as string...
     * @argument - String data type
     * @returns - console.log(that.data)
     */



    function WriteLine(...params: Array<string>): void;


    /**
     * @param - C# input function
     * @returns - Output string
     */



    function ReadLine(): string;



    /**
     * 
     * @param params - Pass any arguments here as string...
     * @argument - String data type
     * @returns - console.log(that.data) but no "\n"
     */

    function Write(...params: Array<string>): void;





    /**
     * @returns - Char
     */



    function ReadKey(): string;



}