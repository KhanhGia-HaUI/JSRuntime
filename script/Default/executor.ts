namespace JSRuntime.Executor {

    export function Evaluate(args: string[]) {

        let override_list: Array<string> = args;

        switch (args.length) {

            case 0:
                override_list = Input.Argument.input_filepath();
                break;
            case 1:

            default:
                break;


        }


        /**
         * @param time_start - The tool current time start execution
         */


        const time_start: number = Timer.StartTimer();

        Input.Argument.int_input(1, 3) as number;

        const time_end: number = Timer.EndTimer();

        const full_time: number = Timer.TimeSpent(time_start, time_end);

        ConsoleADB.WriteLine(ConsoleADB.TextGenerator("green", "◉ Time spent: " + full_time + "s"));


        ConsoleADB.ExecutionFinish(ConsoleADB.TextGenerator("green", "Press any key to continue..."));

    }


}