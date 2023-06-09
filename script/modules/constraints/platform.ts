namespace Runtime.Script.Modules.Platform.Constraints {
    /**
     * @param -  Shell Type for Runtime
     */
    export enum ShellType {
        Console,
        GUI,
    }

    /**
     * @package Current user platform
     */

    export enum UserPlatform {
        Windows,
        Macintosh,
        Linux,
        Android,
        iOS,
        Unknown,
    }

    /**
     * @param - Console color to choose
     */

    export enum ConsoleColor {
        Black,
        Blue,
        Cyan,
        DarkBlue,
        DarkCyan,
        DarkGray,
        DarkGreen,
        DarkMagenta,
        DarkRed,
        DarkYellow,
        Gray,
        Green,
        Magenta,
        Red,
        White,
        Yellow,
    }
}
