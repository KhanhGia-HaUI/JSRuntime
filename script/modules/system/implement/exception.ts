namespace Runtime.Script.Modules.Exceptions {
    export abstract class OverrideInheritence {
        public static [Symbol.hasInstance](instance: any): boolean {
            return false;
        }
    }

    export class RuntimeError extends Error {
        public constructor(error: string) {
            super(error);
            this.name = "runtime_error";
        }
    }

    export class EvaluateError extends Error {
        public constructor(error: string) {
            super(error);
            this.name = "evaluate_error";
        }
    }

    export class FrameRateIncreasementError extends Error {
        public constructor(error: string) {
            super(error);
            this.name = "frame_rate_increasement_error";
        }
    }

    export class MissingFileRequirement extends Error {
        public constructor(error: string) {
            super(error);
            this.name = "missing_files_requirement";
        }
    }

    export class ModuleNotFound extends Error {
        private _module: string;
        public constructor(error: string, module: string) {
            super(error);
            this.name = "module_not_found";
            this._module = module;
        }
        public get module(): string {
            return this._module;
        }
        public set module(new_module: string) {
            this._module = new_module;
        }
    }

    export class MissingProperty extends Error {
        protected _property: string;
        protected _file_path: string;

        public constructor(error: string, property: string, file_path: string) {
            super(error);
            this.name = "missing_property";
            this._property = property;
            this._file_path = Path.Resolve(file_path);
        }

        public get property(): string {
            return this._property;
        }

        public set property(new_property: string) {
            if (
                typeof new_property === "string" &&
                new_property !== null &&
                new_property !== undefined &&
                new_property !== void 0
            ) {
                this._property = new_property;
            }
        }

        public get file_path(): string {
            return this._file_path;
        }

        public set file_path(new_file_path: string) {
            if (
                typeof new_file_path === "string" &&
                new_file_path !== null &&
                new_file_path !== undefined &&
                new_file_path !== void 0
            ) {
                this._file_path = new_file_path;
            }
        }
    }

    export class MissingPropertySpecializeFunctionJSON extends MissingProperty {
        private _function_name: string;
        constructor(error: string, property: string, file_path: string, function_name: string) {
            super(error, property, file_path);
            this._function_name = function_name;
        }

        public get function_name(): string {
            return this._function_name;
        }

        public set function_name(new_function_name: string) {
            if (
                typeof new_function_name === "string" &&
                new_function_name !== null &&
                new_function_name !== undefined &&
                new_function_name !== void 0
            ) {
                this._function_name = new_function_name;
            }
        }
    }

    export class EvaluateWithoutDefaultPoint extends Error {
        private _type_error: string;
        public constructor(message: string, type_error: string) {
            super(message);
            this.name = "no_entry_point";
            this._type_error = type_error;
        }
        public get type_error(): string {
            return this._type_error;
        }

        public set type_error(new_type_error: string) {
            if (
                typeof new_type_error === "string" &&
                new_type_error !== null &&
                new_type_error !== undefined &&
                new_type_error !== void 0
            ) {
                this._type_error = new_type_error;
            }
        }
    }

    export class PropertyHasNotBeenDefined extends MissingProperty {
        public constructor(message: string, property: string, file_path: string) {
            super(message, property, file_path);
            this.name = "property_is_not_defined";
        }
    }

    export class WrongDataType extends MissingProperty {
        private _type_expected: string;
        /**
         *
         * @param message
         * @param property
         * @param file_path
         * @param type_expected - Remember to implement this (expected_type example: boolean)
         */
        public constructor(message: string, property: string, file_path: string, type_expected: string) {
            super(message, property, file_path);
            this.name = "wrong_data_type";
            this._type_expected = type_expected;
        }
        public get type_expected(): string {
            return this._type_expected;
        }
        public set type_expected(new_type_expect: string) {
            this._type_expected = new_type_expect;
        }
    }

    export class DimensionError extends Error {
        protected _dimension_type_error: "width" | "height";
        protected _file_path: string;
        public constructor(message: string, file_path: string, dimension_type_error: "width" | "height") {
            super(message);
            this.name = "wrong_dimension";
            this._dimension_type_error = dimension_type_error;
            this._file_path = Path.Resolve(file_path);
        }
        public get dimension_type_error(): "width" | "height" {
            return this._dimension_type_error;
        }
        public set dimension_type_error(new_expected_dimension_type: "width" | "height") {
            this._dimension_type_error = new_expected_dimension_type;
        }
        public get file_path(): string {
            return this._file_path;
        }
        public set file_path(new_file_location: string) {
            this._file_path = new_file_location;
        }
    }

    export class MissingFile extends Error {
        protected _file_path: string;
        public constructor(message: string, file_path: string) {
            super(message);
            this.name = "missing_file";
            this._file_path = Path.Resolve(file_path);
        }

        public get file_location(): string {
            return this._file_path;
        }

        public set file_location(new_file_location: string) {
            this._file_path = new_file_location;
        }
    }

    export class MissingDirectory extends MissingFile {
        public constructor(message: string, file_path: string) {
            super(message, file_path);
            this.name = "missing_directory";
        }
    }

    export class ResizeImageError extends Error {
        protected _file_path: string;
        protected _code: string;

        public constructor(message: string, file_path: string, code: string) {
            super(message);
            this.name = "resize_error";
            this._file_path = Path.Resolve(file_path);
            this._code = code;
        }

        public get code(): string {
            return this.code;
        }

        public set code(new_code: string) {
            this._code = new_code;
        }
    }

    export class UnknownFormat<T> extends ResizeImageError {
        private _format: T;
        public constructor(message: string, file_path: string, code: string, format: T) {
            super(message, file_path, code);
            this.name = "unknown_format";
            this._format = format;
        }
        public get format(): T {
            return this._format;
        }

        public set format(new_format: T) {
            this._format = new_format;
        }
    }

    export class JSONParseSyntaxError extends Error {
        protected _file_path: string;
        public constructor(message: string, file_path: string) {
            super(message);
            this.name = "unknown_format";
            this._file_path = Path.Resolve(file_path);
        }
        public get file_path(): string {
            return this._file_path;
        }

        public set file_path(new_file_location: string) {
            this._file_path = new_file_location;
        }
    }

    export class JSONParseTrailingCommasError extends JSONParseSyntaxError {
        public constructor(message: string, file_path: string) {
            super(message, file_path);
            this.name = "this_json_trailing_commas";
        }
    }

    export class JSONParseTypeError extends JSONParseSyntaxError {
        public constructor(message: string, file_path: string) {
            super(message, file_path);
            this.name = "this_json_has_type_error";
        }
    }

    export class JSONPatchOperationError extends Error {
        protected _operation: string;
        public constructor(message: string, operation: string) {
            super(message);
            this.name = "this_json_has_type_error";
            this._operation = operation;
        }

        public get operation(): string {
            return this._operation;
        }

        public set operation(new_operation: string) {
            this._operation = new_operation;
        }
    }

    export class WrongPropertyValue extends MissingProperty {
        protected _additional_message: string = "";
        public constructor(error: string, property: string, file_path: string, additional_message?: string) {
            super(error, property, file_path);
            this.name = "wrong_property_value";
            if (
                additional_message !== null &&
                additional_message !== undefined &&
                additional_message !== void 0 &&
                typeof additional_message === "string"
            ) {
                this._additional_message = additional_message;
            }
        }
        public get additional_message(): string {
            return this._additional_message;
        }
        public set additional_message(new_msg: string) {
            this._additional_message = new_msg;
        }
    }

    export class WrongFile extends MissingFile {
        public constructor(message: string, file_path: string) {
            super(message, file_path);
            this.name = "wrong_file_type";
        }
    }

    export class BrokenFile extends WrongFile {
        public constructor(message: string, file_path: string, name: string) {
            super(message, file_path);
            this.name = name;
        }
    }

    export class InvalidRange extends Error {
        protected _file_path: string;
        public constructor(message: string, file_path: string) {
            super(message);
            this.name = "invalid_range";
            this._file_path = Path.Resolve(file_path);
        }
        public get file_path(): string {
            return this._file_path;
        }
        public set file_path(file_location: string) {
            this._file_path = file_location;
        }
    }

    export class DOMDocumentError extends InvalidRange {
        public constructor(message: string, file_path: string) {
            super(message, file_path);
            this.name = "domdocument_error";
        }
    }

    export class ImageXMLError extends DOMDocumentError {
        public constructor(message: string, file_path: string) {
            super(message, file_path);
            this.name = "image_error";
        }
    }

    export class SpriteXMLError extends ImageXMLError {
        public constructor(message: string, file_path: string) {
            super(message, file_path);
            this.name = "sprite_error";
        }
    }

    export class ResourceDataTypeContainerStrictlyRequirement extends ImageXMLError {
        public constructor(message: string, file_path: string, name: string) {
            super(message, file_path);
            this.name = name;
        }
    }

    export class EncodingError extends ImageXMLError {
        public constructor(message: string, file_path: string) {
            super(message, file_path);
            this.name = "encoding_error";
        }
    }

    export class ReadPathFailed extends ImageXMLError {
        public constructor(message: string, file_path: string) {
            super(message, file_path);
            this.name = "cannot_read_path";
        }
    }

    export class UnsupportedDataType extends ReadPathFailed {
        public constructor(message: string, file_path: string) {
            super(message, file_path);
            this.name = "unsupported_data_type";
        }
    }

    export class UnsupportedFileType extends UnsupportedDataType {
        public constructor(message: string, file_path: string) {
            super(message, file_path);
            this.name = "unsupported_file_type";
        }
    }

    export class CannotWriteFile extends MissingFile {
        public constructor(message: string, file_path: string) {
            super(message, file_path);
            this.name = "cannot_write_file";
        }
    }

    export class CannotReadFileSystem extends MissingFile {
        public constructor(message: string, file_path: string, write_template: "directory" | "file" | "unknown") {
            super(message, file_path);
            switch (write_template) {
                case "directory": {
                    this.name = "cannot_read_file".replace(/\{\}/g, "directory");
                    break;
                }
                case "file": {
                    this.name = "cannot_read_file".replace(/\{\}/g, "file");
                    break;
                }
                default: {
                    this.name = "cannot_read_file".replace(/\{\}/g, "file_or_directory");
                    break;
                }
            }
        }
    }

    export class ExtensionDoesNotMeetsRequirement extends MissingFile {
        public constructor(message: string, file_path: string) {
            super(message, file_path);
            this.name = "cannot_read_file";
        }
    }

    export class JoinImageError extends MissingFile {
        public constructor(message: string, file_path: string) {
            super(message, file_path);
            this.name = "cannot_read_file";
        }
    }

    export function ExecutionExceptionType(exception_type: string): void {
        Console.Print(
            Runtime.Script.Modules.Platform.Constraints.ConsoleColor.Red,
            `${Runtime.Script.Modules.System.Default.Localization.GetString("exception_type")}${exception_type}`,
        );
        return;
    }

    export function ExecutionLoadedFrom(file_location: string): void {
        Console.Print(
            Runtime.Script.Modules.Platform.Constraints.ConsoleColor.Red,
            `${Runtime.Script.Modules.System.Default.Localization.GetString("exception_path")}`,
        );
        Console.Printf(Runtime.Script.Modules.Platform.Constraints.ConsoleColor.White, `   ${file_location}`);
        return;
    }

    export function ExecutionError(message: string): void {
        Console.Print(
            Runtime.Script.Modules.Platform.Constraints.ConsoleColor.Red,
            `${Runtime.Script.Modules.System.Default.Localization.GetString("execution_error").replace(
                /\{\}/g,
                `${message}`,
            )}`,
        );
    }

    export function PrintError<Generic_T extends Error, Generic_U extends string>(error: unknown): void {
        switch ((error as Generic_T).constructor) {
            case Runtime.Script.Modules.Exceptions.BrokenFile: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.BrokenFile).name;
                const file_location: string = (error as Runtime.Script.Modules.Exceptions.BrokenFile).file_location;
                const message: string = (error as Runtime.Script.Modules.Exceptions.BrokenFile).message;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(name);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(file_location);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                break;
            }
            case Runtime.Script.Modules.Exceptions.DOMDocumentError: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.DOMDocumentError).name;
                const file_location: string = (error as Runtime.Script.Modules.Exceptions.DOMDocumentError).file_path;
                const message: string = (error as Runtime.Script.Modules.Exceptions.DOMDocumentError).message;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(name);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(file_location);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                break;
            }
            case Runtime.Script.Modules.Exceptions.DimensionError: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.DimensionError).name;
                const file_location: string = (error as Runtime.Script.Modules.Exceptions.DimensionError).file_path;
                const message: string = (error as Runtime.Script.Modules.Exceptions.DimensionError).message;
                const property_error: string = (error as Runtime.Script.Modules.Exceptions.DimensionError)
                    .dimension_type_error;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(name);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(file_location);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                break;
            }
            case Runtime.Script.Modules.Exceptions.EncodingError: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.EncodingError).name;
                const file_location: string = (error as Runtime.Script.Modules.Exceptions.EncodingError).file_path;
                const message: string = (error as Runtime.Script.Modules.Exceptions.EncodingError).message;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(name);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(file_location);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                break;
            }
            case Runtime.Script.Modules.Exceptions.EvaluateError: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.EvaluateError).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.EvaluateError).message;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(name);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                break;
            }
            case Runtime.Script.Modules.Exceptions.EvaluateWithoutDefaultPoint: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.EvaluateWithoutDefaultPoint).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.EvaluateWithoutDefaultPoint)
                    .message;
                const type_error: string = (error as Runtime.Script.Modules.Exceptions.EvaluateWithoutDefaultPoint)
                    .type_error;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(name);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                break;
            }
            case Runtime.Script.Modules.Exceptions.FrameRateIncreasementError: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.FrameRateIncreasementError).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.FrameRateIncreasementError).message;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(name);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                break;
            }
            case Runtime.Script.Modules.Exceptions.ImageXMLError: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.ImageXMLError).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.ImageXMLError).message;
                const location: string = (error as Runtime.Script.Modules.Exceptions.ImageXMLError).file_path;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(name);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.WrongDataType: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.WrongDataType).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.WrongDataType).message;
                const location: string = (error as Runtime.Script.Modules.Exceptions.WrongDataType).file_path;
                const expected_data_type: string = (error as Runtime.Script.Modules.Exceptions.WrongDataType)
                    .type_expected;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(name);
                Console.Print(
                    Runtime.Script.Modules.Platform.Constraints.ConsoleColor.Red,
                    `${Runtime.Script.Modules.System.Default.Localization.GetString(
                        "execution_expected",
                    )}${Runtime.Script.Modules.System.Default.Localization.GetString("expected_variable_type").replace(
                        /\{\}/g,
                        expected_data_type,
                    )}`,
                );
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.MissingProperty: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.MissingProperty).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.MissingProperty).message;
                const location: string = (error as Runtime.Script.Modules.Exceptions.MissingProperty).file_path;
                const property: string = (error as Runtime.Script.Modules.Exceptions.MissingProperty).property;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name} ${"and_property_is"} "${property}"`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.PropertyHasNotBeenDefined: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.PropertyHasNotBeenDefined).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.PropertyHasNotBeenDefined).message;
                const location: string = (error as Runtime.Script.Modules.Exceptions.PropertyHasNotBeenDefined)
                    .file_path;
                const property: string = (error as Runtime.Script.Modules.Exceptions.PropertyHasNotBeenDefined)
                    .property;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name} ${"and_property_is"} "${property}"`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.RuntimeError: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.RuntimeError).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.RuntimeError).message;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                break;
            }
            case Runtime.Script.Modules.Exceptions.RuntimeError: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.RuntimeError).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.RuntimeError).message;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                break;
            }
            case Runtime.Script.Modules.Exceptions.FrameRateIncreasementError: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.FrameRateIncreasementError).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.FrameRateIncreasementError).message;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                break;
            }
            case Runtime.Script.Modules.Exceptions.MissingFileRequirement: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.MissingFileRequirement).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.MissingFileRequirement).message;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                break;
            }
            case Runtime.Script.Modules.Exceptions.MissingFile: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.MissingFile).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.MissingFile).message;
                const location: string = (error as Runtime.Script.Modules.Exceptions.MissingFile).file_location;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.WrongFile: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.WrongFile).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.WrongFile).message;
                const location: string = (error as Runtime.Script.Modules.Exceptions.WrongFile).file_location;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.BrokenFile: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.BrokenFile).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.BrokenFile).message;
                const location: string = (error as Runtime.Script.Modules.Exceptions.BrokenFile).file_location;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.MissingDirectory: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.MissingDirectory).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.MissingDirectory).message;
                const location: string = (error as Runtime.Script.Modules.Exceptions.MissingDirectory).file_location;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.InvalidRange: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.InvalidRange).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.InvalidRange).message;
                const location: string = (error as Runtime.Script.Modules.Exceptions.InvalidRange).file_path;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.DOMDocumentError: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.DOMDocumentError).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.DOMDocumentError).message;
                const location: string = (error as Runtime.Script.Modules.Exceptions.DOMDocumentError).file_path;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.ImageXMLError: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.ImageXMLError).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.ImageXMLError).message;
                const location: string = (error as Runtime.Script.Modules.Exceptions.ImageXMLError).file_path;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.SpriteXMLError: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.SpriteXMLError).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.SpriteXMLError).message;
                const location: string = (error as Runtime.Script.Modules.Exceptions.SpriteXMLError).file_path;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.ResourceDataTypeContainerStrictlyRequirement: {
                const name: string = (
                    error as Runtime.Script.Modules.Exceptions.ResourceDataTypeContainerStrictlyRequirement
                ).name;
                const message: string = (
                    error as Runtime.Script.Modules.Exceptions.ResourceDataTypeContainerStrictlyRequirement
                ).message;
                const location: string = (
                    error as Runtime.Script.Modules.Exceptions.ResourceDataTypeContainerStrictlyRequirement
                ).file_path;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.ReadPathFailed: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.ReadPathFailed).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.ReadPathFailed).message;
                const location: string = (error as Runtime.Script.Modules.Exceptions.ReadPathFailed).file_path;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.ResizeImageError: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.ResizeImageError).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.ResizeImageError).message;
                const location: string = (error as Runtime.Script.Modules.Exceptions.MissingDirectory).file_location;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.UnknownFormat: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.UnknownFormat<Generic_U>).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.UnknownFormat<Generic_U>).message;
                const format: Generic_U = (error as Runtime.Script.Modules.Exceptions.UnknownFormat<Generic_U>).format;
                const location: string = (error as Runtime.Script.Modules.Exceptions.MissingDirectory).file_location;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(
                    `${name} ${"and_unknown_format_is".replace(/\{\}/g, format)}`,
                );
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.JSONParseSyntaxError: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.JSONParseSyntaxError).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.JSONParseSyntaxError).message;
                const location: string = (error as Runtime.Script.Modules.Exceptions.JSONParseSyntaxError).file_path;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.JSONParseTrailingCommasError: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.JSONParseTrailingCommasError).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.JSONParseTrailingCommasError)
                    .message;
                const location: string = (error as Runtime.Script.Modules.Exceptions.JSONParseTrailingCommasError)
                    .file_path;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.JSONPatchOperationError: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.JSONPatchOperationError).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.JSONPatchOperationError).message;
                const operation: string = (error as Runtime.Script.Modules.Exceptions.JSONPatchOperationError)
                    .operation;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(
                    `${name} ${"and_the_operation_is".replace(/\{\}/g, operation)}`,
                );
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                break;
            }
            case Runtime.Script.Modules.Exceptions.WrongPropertyValue: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.WrongPropertyValue).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.WrongPropertyValue).message;
                const location: string = (error as Runtime.Script.Modules.Exceptions.WrongPropertyValue).file_path;
                const additional_message: string = (error as Runtime.Script.Modules.Exceptions.WrongPropertyValue)
                    .additional_message;
                const property: string = (error as Runtime.Script.Modules.Exceptions.WrongPropertyValue).property;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(
                    `${name} ${"and_the_wrong_property_is".replace(/\{\}/g, property)}`,
                );
                Console.Print(
                    Runtime.Script.Modules.Platform.Constraints.ConsoleColor.Red,
                    `${Runtime.Script.Modules.System.Default.Localization.GetString(
                        "execution_reminder",
                    )}${additional_message}`,
                );
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.ModuleNotFound: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.ModuleNotFound).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.ModuleNotFound).message;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                break;
            }
            case Runtime.Script.Modules.Exceptions.UnsupportedDataType: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.UnsupportedDataType).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.UnsupportedDataType).message;
                const location: string = (error as Runtime.Script.Modules.Exceptions.UnsupportedDataType).file_path;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.UnsupportedFileType: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.UnsupportedFileType).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.UnsupportedFileType).message;
                const location: string = (error as Runtime.Script.Modules.Exceptions.UnsupportedFileType).file_path;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.CannotWriteFile: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.CannotWriteFile).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.CannotWriteFile).message;
                const location: string = (error as Runtime.Script.Modules.Exceptions.CannotWriteFile).file_location;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.CannotReadFileSystem: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.CannotReadFileSystem).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.CannotReadFileSystem).message;
                const location: string = (error as Runtime.Script.Modules.Exceptions.CannotReadFileSystem)
                    .file_location;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.ExtensionDoesNotMeetsRequirement: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.ExtensionDoesNotMeetsRequirement).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.ExtensionDoesNotMeetsRequirement)
                    .message;
                const location: string = (error as Runtime.Script.Modules.Exceptions.ExtensionDoesNotMeetsRequirement)
                    .file_location;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            case Runtime.Script.Modules.Exceptions.JoinImageError: {
                const name: string = (error as Runtime.Script.Modules.Exceptions.JoinImageError).name;
                const message: string = (error as Runtime.Script.Modules.Exceptions.JoinImageError).message;
                const location: string = (error as Runtime.Script.Modules.Exceptions.JoinImageError).file_location;
                Runtime.Script.Modules.Exceptions.ExecutionExceptionType(`${name}`);
                Runtime.Script.Modules.Exceptions.ExecutionError(message);
                Runtime.Script.Modules.Exceptions.ExecutionLoadedFrom(location);
                break;
            }
            default: {
                Console.Print(
                    Runtime.Script.Modules.Platform.Constraints.ConsoleColor.Red,
                    `${Runtime.Script.Modules.System.Default.Localization.GetString("execution_failed")}: ${(
                        (error as Error).message as string
                    ).toString()}`,
                );
            }
        }
        Console.Printf(
            null,
            (error as Error).stack?.replace(/(\s)at(\s)/g, DotNetPlatform.IsUTF8Support() ? " ▶ " : " > "),
        );
    }
}
