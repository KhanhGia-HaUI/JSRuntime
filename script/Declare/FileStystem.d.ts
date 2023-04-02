/**
 * @param - JS FileSystem based on C#
 */

declare namespace fs {

    /**
     * 
     * @param path - Pass an argument or an filepath here, should be args[i]
     * @returns - Plain Text as String
     */

    function ReadFile(path: string): string;



    /**
     * 
     * @param path - Pass an argument or an filepath here, should be args[i]
     * @param content - Pass the content needs to be written as String
     */

    function WriteFile(path: string, content: string): void;

}