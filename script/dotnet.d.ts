/**
 * @param args - Arguments pass from DotNet will be send to Script
 * @implements Hold arguments and do process with arguments
 */

declare const args: string[];

/**
 * @package Platform implementing system for DotNet using JS
 */

declare namespace DotNetPlatform {
    /**
     * @returns The platform that the user is using right now
     */
    export function CurrentPlatform(): "windows" | "linux" | "macintosh" | "unknown" | "ios" | "android";

    /**
     * @returns The current Runtime is Console or GUI
     */
    export const RuntimeShell = "console" | "gui";

    /**
     * @returns Check if the UTF8 is supported by User Console
     */

    export function IsUTF8Support(): boolean;

    /**
     * @returns Check if the color is supported by User Console
     */

    export function IsColorSupport(): boolean;

    /**
     * @returns Make the User's terminal support UTF8
     */

    export function SupportUtf8Console(): void;
}

/**
 * @package Implementing for Console & MaUI project
 */

declare namespace Console {
    /**
     *
     * @param params - Pass any things here and the tool will console out the input value.
     */

    export function Print<T extends any>(
        color: Runtime.Script.Modules.Platform.Constraints.ConsoleColor | null,
        ...params: Array<T>
    ): void;
    /**
     *
     * @param params - Pass any things here and the tool will console out the input value.
     */

    export function Printf<T extends any>(
        color: Runtime.Script.Modules.Platform.Constraints.ConsoleColor | null,
        ...params: Array<T>
    ): void;

    /**
     * @returns Input argument as string
     */

    export function Input(): string;

    /**
     * @param - Console.ReadKey()
     */

    export function TerminateProgram(): void;
}

/**
 * @abstract Data type for long number
 */

declare type unsigned_long_long = number;

/**
 * @abstract Data type for integer number
 */

declare type int = number;

/**
 * @abstract Data type for float number
 */

declare type float = number;

/**
 * @packages Implementing File System based on C# & JS
 * @access Script can have access to File System through Runtime
 */

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
     * @param directory_path - Provide directories path to delete. should pass array
     * @returns Deleted Directory.
     */
    export function DeleteDirectory(directories: Array<string>): void;
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
/**
 * @package Self implement Records
 */

declare interface FormatRecords {
    root: string;
    name: string;
    dir: string;
    extname: string;
    basename: string;
}

/**
 * @package Records for path
 */

declare interface ParsedPath {
    name: string;
    dir: string;
    ext: string;
    basename: string;
}

/**
 * @package Self implementing Path based on NodeJS & C# Path System
 */

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

declare type Image<Argb32> = Uint8Array;

declare namespace DotNetBitmap {
    /**
     *
     * @param imagePath - Provide image path
     * @returns width & height of the provided image
     */

    export function GetDimension<Generic_T>(
        imagePath: string,
    ): Runtime.Script.Modules.BitMap.Constraints.ImageInfo<Generic_T>;

    /**
     *
     * @param imagePath - Provide image path
     * @returns alpha channel
     */

    export function ExtractAlphaChannel(imagePath: string): Uint8Array;

    /**
     *
     * @param imagePath - Provide image path
     * @returns red channel
     */

    export function ExtractRedChannel(imagePath: string): Uint8Array;

    /**
     *
     * @param imagePath - Provide image path
     * @returns green channel
     */

    export function ExtractGreenChannel(imagePath: string): Uint8Array;

    /**
     *
     * @param imagePath - Provide image path
     * @returns blue channel
     */

    export function ExtractBlueChannel(imagePath: string): Uint8Array;

    /**
     *
     * @param images - Provide image<RGBA32> Array
     * @param width - Provide expected output width
     * @param height - Provide expected output height
     * @returns New Image as Buffer
     */

    export function JoinImages(images: Image<Rgba32>[], width: number, height: number): Image<Rgba32>;

    /**
     *
     * @param original - Pass original ImageInfo
     * @param output - Pass modified (expected) ImageInfo
     * @returns Modified
     */

    export function ResizeImage(
        original: Runtime.Script.Modules.BitMap.Constraints.ImageInfo<number>,
        output: Runtime.Script.Modules.BitMap.Constraints.ImageInfo<number>,
    ): Image<Rgba32>;

    /**
     *
     * @param imagePath - Pass image to save
     * @param imageByte - Pass Byte image
     * @returns Images saved
     */

    export function SaveImage(imagePath: string, imageByte: Image<Rgba32>): void;

    /**
     *
     * @param alphaBuffer - Pass alpha channel
     * @param redBuffer  - Pass red channel
     * @param greenBuffer  - Pass green channel
     * @param blueBuffer  - Pass blue channel
     * @param width  - Pass image width
     * @param height  - Pass image height
     * @returns Rgba Image as Buffer
     */

    export function CreateRgbaImage(
        alphaBuffer: Uint8Array,
        redBuffer: Uint8Array,
        greenBuffer: Uint8Array,
        blueBuffer: Uint8Array,
        width: number,
        height: number,
    ): Image<Rgba32>;

    /**
     *
     * @param alphaBuffer - Pass alpha channel
     * @param redBuffer  - Pass red channel
     * @param greenBuffer  - Pass green channel
     * @param blueBuffer  - Pass blue channel
     * @param width  - Pass image width
     * @param height  - Pass image height
     * @returns Argb Image as Buffer
     */

    export function CreateArgbImage(
        alphaBuffer: Uint8Array,
        redBuffer: Uint8Array,
        greenBuffer: Uint8Array,
        blueBuffer: Uint8Array,
        width: number,
        height: number,
    ): Image<Argb32>;

    /**
     *
     * @param imagePath - Provide image path
     * @param outputPath - Provide output image path
     * @param degrees
     */

    export function RotateImage(imagePath: string, outputPath: string, degrees: number): void;

    /**
     *
     * @param pngImagePath - Provide png in path
     * @param jpegImagePath - Provide Jpeg out path
     * @returns PNG TO JPEG
     */

    export function ConvertPngToJpeg(pngImagePath: string, jpegImagePath: string): void;

    /**
     *
     * @param pngImagePath - Provide png out path
     * @param jpegImagePath - Provide Jpeg in path
     * @returns   JPEG TO PNG
     */

    export function ConvertJpegToPng(jpegImagePath: string, pngImagePath: string): void;

    /**
     *
     * @param gifImagePath - Input gif path
     * @param outputDirectory - Output directory contains images
     * @param frameName - name for frames
     * @returns All gif frames exported to PNGs
     */

    export function ExportGifToPngs(gifImagePath: string, outputDirectory: string, frameName: string): void;

    /**
     *
     * @param imagePath - Provide image path
     * @param imageByte - Provide image buffer
     * @async Requires to handle asynchronous function
     * @returns Asynchrnous write image
     */

    export async function SaveImageAsync(imagePath: string, imageByte: Image<Rgba32>): Promise<void>;
}

namespace DotNetCrypto {
    /**
     *
     * @param data - Provide data to hash as string
     * @returns Hashed data
     */
    export function ComputeMD5Hash(data: string): string;

    /**
     *
     * @param data - Provide data to hash as string
     * @returns Hashed data
     */
    export function ComputeSha1Hash(data: string): string;

    /**
     *
     * @param data - Provide data to hash as string
     * @returns Hashed data
     */
    export function ComputeSha256Hash(data: string): string;

    /**
     *
     * @param data - Provide data to hash as string
     * @returns Hashed data
     */
    export function ComputeSha384Hash(data: string): string;

    /**
     *
     * @param data - Provide data to hash as string
     * @returns Hashed data
     */
    export function ComputeSha512Hash(data: string): string;

    /**
     *
     * @param plainText - Pass plain text
     * @param password - Pass password
     * @param saltValue - Pass salt value
     * @param rijndaelMode - Rijndael Mode, choose one
     * @param rijndaelPadding - Rijndael Padding, choose one
     * @returns encrypted Uint8Array
     */

    export function RijndaelEncrypt(
        plainText: string,
        password: string,
        saltValue: string,
        rijndaelMode: Runtime.Script.Modules.Crypto.Constraints.RijndaelMode,
        rijndaelPadding: Runtime.Script.Modules.Crypto.Constraints.RijndaelPadding,
    ): Uint8Array;

    /**
     *
     * @param encryptedBytes - Encrypted Uint8Array
     * @param password  - Pass password
     * @param saltValue - Pass salt value
     * @param rijndaelMode - Rijndael Mode, choose one
     * @param rijndaelPadding - Rijndael Padding, choose one
     * @returns decrypted Uint8Array
     */

    export function RijndaelDecrypt(
        encryptedBytes: Uint8Array,
        password: string,
        saltValue: string,
        rijndaelMode: Runtime.Script.Modules.Crypto.Constraints.RijndaelMode,
        rijndaelPadding: Runtime.Script.Modules.Crypto.Constraints.RijndaelPadding,
    ): Uint8Array;
}

/**
 * @package Self implement compression based on DotNetZip
 * @requires https://www.nuget.org/packages/DotNetZip/
 */

declare namespace DotNetCompress {
    /**
     *
     * @param zip_output - Created zip output path
     * @param files - File array, pass an empty array if nothing were added
     * @param directories - Directory array, pass an empty array if nothing were added
     * @returns Created zip
     */
    export function CompressZip(zip_output: string, files: string[], directories: string[]): void;
    /**
     *
     * @param zip_output - Created zip output path
     * @param files - File array, pass an empty array if nothing were added
     * @param directories - Directory array, pass an empty array if nothing were added
     * @returns Created zip, this function is asynchronous, please provide await from ES6
     */

    export async function CompressZipAsync(zip_output: string, files?: string[], directories?: string[]): Promise<void>;

    /**
     *
     * @param zip_input - Zip path
     * @param extracted_directory - Extracted directory expected
     * @returns Extracted zip
     */

    export function UncompressZip(zip_input: string, extracted_directory: string): void;

    /**
     *
     * @param zip_input - Zip path
     * @param extracted_directory - Extracted directory expected
     * @returns Extracted zip as asynchronous function, please use ES6 Async/Await to make it synchronous
     */

    export async function UncompressZipAsync(zip_input: string, extracted_directory: string): Promise<void>;

    /**
     *
     * @param data - Pass data to do compression
     * @param compression_level - Pass Zlib Level
     * @returns Zlib out
     */

    export function CompressZlibBytes<Generic_T, Generic_U>(
        data: Generic_T,
        compression_level: Runtime.Script.Modules.Compression.Constraints.ZlibLevel,
    ): Generic_U;

    /**
     *
     * @param zlibData - Pass data to do uncompression
     * @returns Uncompressed Zlib out
     */

    export function UncompressZlibBytes<Generic_T, Generic_U>(zlibData: Generic_T): Generic_U;
}

/**
 * @returns Current place contains Script directory
 */
declare const MainScriptDirectory: string;

/**
 * @returns All scripts loaded by the Runtime program
 */

declare const ScriptModules: Array<string>;

/**
 * @package Dependencies Jint from DotNet
 * @requires https://github.com/sebastienros/jint
 */

declare namespace JavaScriptEngine {
    /**
     *
     * @param js_string_to_evaluate - Pass JS to Evaluate as string
     * @returns Finished evaluate, can be undefined
     */
    export function Evaluate(js_string_to_evaluate: string, source: string): void;
    /**
     *
     * @param js_string_to_execute - Pass JS to Evaluate as string
     * @returns Add engine to the Runtime
     */
    export function Execute(js_string_to_execute: string, source: string): void;
    /**
     *
     * @param specifier - Pass specifier
     * @param code - Pass code
     * @returns Added module JS import/export to the Runtime
     */
    export function AddModule(specifier: string, code: string): void;
}

declare namespace DotNetLocalization {
    /**
     *
     * @param property - Property to get
     * @param ScriptDirectory - The script directory contains "main.js"
     * @param Language - Language to get
     * @returns STRING if exists in Language, else returns property
     */
    export function Get(property: string, ScriptDirectory: string, Language: string): string;
}
