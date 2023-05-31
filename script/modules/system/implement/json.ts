namespace Runtime.Script.Modules.FileSystem.Implement.JsonLibrary {
    /**
     *
     * @param jsonText Provide serialized JSON text as string
     * @returns Deserialized JSON can be used by the tool
     */

    export function ParseJson<Generic_T>(jsonText: string): Generic_T {
        return JSON.parse(jsonText) as Generic_T;
    }

    /**
     *
     * @param serializedJson - Provide serialized JSON Data
     * @param indent - Indent, can be skipped
     * @returns Stringify JSON as string
     */

    export function StringifyJson<Generic_T>(serializedJson: Generic_T, indent: string | number = "\t"): string {
        return JSON.stringify(serializedJson, null, indent);
    }
}
