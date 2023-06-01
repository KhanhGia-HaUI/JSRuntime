namespace Runtime.Script.Modules.System.Default.Localization {
    /**
     *
     * @param property - Provide property to get
     * @returns String if exists, else return property
     */
    export function GetString(property: string): string {
        return DotNetLocalization.Get(property, Path.Resolve(`${MainScriptDirectory}/modules/language`), "English");
    }
}
