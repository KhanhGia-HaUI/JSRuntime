declare namespace Runtime {}

declare const args: string[];

declare namespace Console {
    /**
     *
     * @param params - Pass any things here and the tool will console out the input value
     */

    export function Print<T extends any>(...params: Array<T>): void;

    export function Input(): string;
}

declare type unsigned_long_long = number;

declare type int = number;

declare type float = number;

declare namespace fs {
    /**
     *
     * @param file_path - Provide file path here, must be file path
     * @param encoding - Choose one encoding type
     */

    export function ReadText(
        file_path: string,
        encoding: Runtime.Script.Modules.FileSystem.Constraints.EncodingType,
    ): string;
    /**
     *
     * @param file_path - Provide file path to write
     * @param data - Provide file data
     * @param encoding - Provide encoding type (can choose from enum)
     */
    export function WriteText(
        file_path: string,
        data: string,
        encoding: Runtime.Script.Modules.FileSystem.Constraints.EncodingType,
    ): void;
    export function CreateDirectory(file_path: string): void;
    export function DeleteDirectory(file_path: string): void;
    export function ReadTextAsync(
        file_path: string,
        encoding: Runtime.Script.Modules.FileSystem.Constraints.EncodingType,
    ): Promise<string>;
    export function DirectoryExists(file_path: string): boolean;
    export function FileExists(file_path: string): boolean;
    export function WriteTextAsync(
        file_path: string,
        data: string,
        encoding: Runtime.Script.Modules.FileSystem.Constraints.EncodingType,
    ): Promise<void>;
    export function ReadJson<Generic_T>(file_path: string): Generic_T;
    export function WriteJson<Generic_T>(output_path: string, json_object: Generic_T): void;
    export function ReadJsonAsync<Generic_T>(file_path: string): Promise<Generic_T>;
    export function WriteJsonAsync<Generic_T>(output_path: string, json_object: Generic_T): Promise<void>;
    export function OutFile<Generic_T>(output_path: string, data: Generic_T): void;
    export function OutFileAsync<Generic_T>(output_path: string, data: Generic_T): Promise<void>;
    export function WriteFile<Generic_T>(output_file: string, data: Generic_T): void;
    export function WriteFileAsync<Generic_T>(output_file: string, data: Generic_T): Promise<void>;
    export function WriteBufferToFile(filePath: string, buffer: number[]): void;
}

declare namespace Type {
    /**
     *
     * @param data - Provide any variable here
     * @returns - Variable type
     */
    export function GetType(data: any): string;
}
