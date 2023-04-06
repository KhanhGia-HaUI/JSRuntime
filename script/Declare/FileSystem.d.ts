/**
 * @param - JS FileSystem based on C#
 * @param - FileSystem will be based on C# & Microsoft Library
 * @description - The tool will need to provide built-in functions to evaluate these
 */

declare namespace FileStream {

    /**
     * 
     * @param path - Pass an argument or an filepath here, should be args[i]
     * @returns - Plain Text as String
     */

    function ReadFile(
        path: string
    ): string;



    /**
     * 
     * @param path - Pass an argument or an filepath here, should be args[i]
     * @param content - Pass the content needs to be written as String
     */

    function WriteFile
        (
            path: string,
            content: string
        ): void;



    /**
     * 
     * @param filepath - Pass an argument here as filepath or directory path
     * @returns - Full file extension in local machine
     */

    function FullPath(
        filepath: string
    ): string;


    /**
     * 
     * @param filepath  - Pass an argument here as filepath 
     * @returns - The file extension
     */

    function File_Extension
        (
            filepath: string,
        ): string;



    /**
     * 
     * @param filepath  - Pass an argument here as filepath 
     * @returns - The file basename
     */

    function File_Basename
        (
            filepath: string,
        ): string;


    /**
    * 
    * @param filepath  - Pass an argument here as filepath 
    * @returns - If the argument passed in is file
    */

    function IsFile
        (
            filepath: string,
        ): boolean;



    /**
    * 
    * @param filepath  - Pass an argument here as filepath 
    * @returns - If the argument passed in is directory
    */

    function IsDirectory
        (
            filepath: string,
        ): boolean;


    /**
     * 
     * @param filepath - Pass an argument here as directory path
     * @returns - Full folder name in local machine
     */

    function DirectoryName(
        filepath: string
    ): string;


    /**
     * 
     * @param path - Send an file path argument want to create
     * @returns - Created directory
     */

    function CreateDirectory(
        path: string,
    ): void;

    /**
         * 
         * @param path - Send an file path argument want to create
         * @returns - Deleted everything inside that directory
         */

    function DeleteEverythingInFolder(
        path: string,
    ): void;



    /**
     * 
     * @param zipPath - Input the zip output directory
     * @param filePaths - Input the filepaths as arguments
     * @returns - Zipped file
     */

    function CreateZip(
        zipPath: string,
        ...filePaths: Array<string[]>,
    ): void;




    /**
     * 
     * @param zipPath - Zip file path as argument
     * @param outputFolder - Output folder or files
     * @returns - Uncompressed zip out
     */

    function UncompressZip(
        zipPath: string,
        outputFolder: string,
    ): void;




    /**
     * 
     * @param argument - The C# shell will check if the argument contains ""
     * @returns finished checking
     */


    function CheckSlash
        (argument: string): string;



}
