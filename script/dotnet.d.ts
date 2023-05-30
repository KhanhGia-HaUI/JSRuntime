declare namespace Runtime {}

declare const args: string[];

declare namespace Console {
    /**
     *
     * @param params - Pass any things here and the tool will console out the input value.
     */

    export function Print<T extends any>(...params: Array<T>): void;

    /**
     * @returns Input argument as string
     */

    export function Input(): string;
}

declare type unsigned_long_long = number;

declare type int = number;

declare type float = number;

declare namespace Fs {
    /**
     *
     * @param file_path - Provide file path here, must be file path.
     * @param encoding - Choose one encoding type.
     */

    export function ReadText(
        file_path: string,
        encoding: Runtime.Script.Modules.FileSystem.Constraints.EncodingType,
    ): string;
    /**
     *
     * @param file_path - Provide file path to write.
     * @param data - Provide file data.
     * @param encoding - Provide encoding type (can choose from enum).
     */
    export function WriteText(
        file_path: string,
        data: string,
        encoding: Runtime.Script.Modules.FileSystem.Constraints.EncodingType,
    ): void;
    /**
     *
     * @param directory_path - Provide directory path to create.
     * @returns Created Directory.
     */
    export function CreateDirectory(directory_path: string): void;
    /**
     *
     * @param directory_path - Provide directory path to delete.
     * @returns Deleted Directory.
     */
    export function DeleteDirectory(directory_path: string): void;
    /**
     *
     * @param file_path - Provide directory to read.
     * @param encoding - Provide encoding from const enum.
     * @returns ASYNCHRONOUS read text file, please provide an await to make the function synchronous.
     */
    export async function ReadTextAsync(
        file_path: string,
        encoding: Runtime.Script.Modules.FileSystem.Constraints.EncodingType,
    ): Promise<string>;
    /**
     *
     * @param directory_path - Provide Directory path.
     * @returns If exists return true, else false.
     */
    export function DirectoryExists(directory_path: string): boolean;
    /**
     *
     * @param file_path - Provide File path.
     * @returns If exists return true, else false.
     */
    export function FileExists(file_path: string): boolean;
    /**
     *
     * @param file_path - Provide file path to write file.
     * @param data - Provide data to write.
     * @param encoding - Provide Encoding Type to Write file.
     * @returns Asynchronous Write file, please provide ES6 async await to make the function synchronous.
     */
    export async function WriteTextAsync(
        file_path: string,
        data: string,
        encoding: Runtime.Script.Modules.FileSystem.Constraints.EncodingType,
    ): Promise<void>;
    /**
     *
     * @param file_path - Provide Json File path to read.
     * @returns Deserialized Json Object.
     */
    export function ReadJson<Generic_T>(file_path: string): Generic_T;
    /**
     *
     * @param output_path - Provide Json Output Path.
     * @param json_object - Provide Json Object to Serialize.
     * @returns Json Serialized as File.
     */
    export function WriteJson<Generic_T>(output_path: string, json_object: Generic_T): void;
    /**
     *
     * @param file_path - Provide Json File path to read.
     * @returns Deserialized Json Object as Asynchronous function, please provide await from ES6 to handle asynchronous function.
     */
    export async function ReadJsonAsync<Generic_T>(file_path: string): Promise<Generic_T>;
    /**
     *
     * @param output_path - Provide Json Output Path.
     * @param json_object - Provide Json Object to Serialize.
     * @returns Json Serialized as File, but this function is Asynchronous. You need to provide await from ES6 to handle asynchronous function.
     */
    export async function WriteJsonAsync<Generic_T>(output_path: string, json_object: Generic_T): Promise<void>;
    /**
     *
     * @param output_path - Output file expected.
     * @param data - Pass data to write in.
     * @returns Writed file.
     */
    export function OutFile<Generic_T>(output_path: string, data: Generic_T): void;
    /**
     *
     * @param output_path - Output file expected.
     * @param data - Pass data to write in.
     * @returns Writed file, but this function is asynchronous. You need to provide await from ES6 to handle asynchronous function.
     */
    export async function OutFileAsync<Generic_T>(output_path: string, data: Generic_T): Promise<void>;
    /**
     *
     * @param output_file - Normal File System Write file
     * @param data - Data to write
     * @returns Writed data to file
     */
    export function WriteFile<Generic_T>(output_file: string, data: Generic_T): void;
    /**
     *
     * @param output_file - Normal File System Write file
     * @param data - Data to write
     * @returns Writed data to file, but this function is asynchronous. You need to provide await from ES6 to handle asynchronous function.
     */
    export async function WriteFileAsync<Generic_T>(output_file: string, data: Generic_T): Promise<void>;

    /**
     *
     * @param directory - Provide directory needs to read
     * @param ReadOption - Provide read option
     * @returns Readed directory
     */

    export function ReadDirectory(
        directory: string,
        ReadOption: Runtime.Script.Modules.FileSystem.Constraints.ReadDirectory,
    ): Array<string>;
}

declare namespace Type {
    /**
     *
     * @param data - Provide any variable here
     * @returns - Variable type
     */
    export function GetType(data: any): string;
}

declare interface FormatRecords {
    root: string;
    name: string;
    dir: string;
    extname: string;
    basename: string;
}

declare interface ParsedPath {
    name: string;
    dir: string;
    ext: string;
    basename: string;
}

declare namespace Path {
    export function Basename(path: string, ...suffix: string[]): string;

    /**
     * @returns - Provides the platform-specific path delimiter:
     * `;` for Windows
     * `:` for POSIX
     */
    export function Delimiter(): string;

    /**
     * Example: "/test/st/sf/main.js" returns "/test/st/sf"
     * @param path File path or directory path
     * @returns Returns directory containing the file or directory
     */
    export function Dirname(path: string): string;

    /**
     * Example: "main.js" returns ".js"
     * @param path File path or directory path
     * @returns Returns file extension
     */
    export function Extname(path: string): string;

    /**
     *
     * @param dir - Current Directory
     * @param root - Root directory
     * @param basename - Basename
     * @param name - Current name
     * @param ext - Current extension
     */

    export function Format(dir: string, root: string, basename: string, name: string, ext: string): FormatRecords;

    /**
     *
     * @param path - Provide path
     * @returns Is rooted path (true or false)
     */

    export function IsAbsolute(path: string): boolean;

    /**
     *
     * @param paths - Provide path array
     * @returns Joined path
     */

    export function Join(...paths: string[]): string;

    /**
     *
     * @param path - Provide file path
     * @returns Normalized path
     */

    export function Normalize(path: string): string;

    /**
     *
     * @param filePath - Provide file path
     * @returns Implemented NodeJs Parsed Path
     */

    export function Parse(filePath: string): ParsedPath;

    /**
     *
     * @param from - From
     * @param to - To
     * @returns Concat from & to
     */

    export function Relative(from: string, to: string): string;

    /**
     *
     * @param path - Input file path
     * @returns Full file path
     */

    export function Resolve(path: string): string;

    /**
     * @returns Current platform sep
     */

    export function Sep(): string;

    /**
     *
     * @param path - File path
     * @returns Current file name
     */

    export function GetFileName(path: string): string;

    /**
     *
     * @param path - Provide directory path
     * @returns Directory name
     */

    export function GetDirectoryName(path: string): string;
}
