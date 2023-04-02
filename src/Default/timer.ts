namespace JSRuntime.Timer {


    /**
     * 
     * @returns This current time
     */

    export function StartTimer
        (

    ): number {
        return Date.now();
    }



    /**
     * 
     * @returns This current time
     */



    export function EndTimer
        (

    ): number {
        return Date.now();
    }



    /**
     * 
     * @param start_timer - Evaluate start
     * @param end_timer - Evaluate end
     * @returns - Total time spent in Evaluate time
     */

    export function TimeSpent
        (
            start_timer: number,
            end_timer: number,
        ): number {
        return (end_timer - start_timer) / 1000;
    }




}