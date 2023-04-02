/**
 * @param JSRuntime - Default namespace
 */

export namespace JSRuntime {


    /**
     * @param Argument - The argument input declaration 
     */

    namespace Argument {
        function input(): string;
        function int_input
            (
                min_val: number,
                max_val: number,
            ): number
    }


    export const ConsoleVersion: number;

}
