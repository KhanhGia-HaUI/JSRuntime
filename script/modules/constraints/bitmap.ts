namespace Runtime.Script.Modules.BitMap.Constraints {
    export interface DimensionInterface<Generic_T> {
        width: Generic_T;
        height: Generic_T;
    }

    export interface ImageInfo<Generic_T> extends DimensionInterface<Generic_T> {
        file_path: string;
    }
}
