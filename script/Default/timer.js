"use strict";
var JSRuntime;
(function (JSRuntime) {
    var Timer;
    (function (Timer) {
        /**
         *
         * @returns This current time
         */
        function StartTimer() {
            return Date.now();
        }
        Timer.StartTimer = StartTimer;
        /**
         *
         * @returns This current time
         */
        function EndTimer() {
            return Date.now();
        }
        Timer.EndTimer = EndTimer;
        /**
         *
         * @param start_timer - Evaluate start
         * @param end_timer - Evaluate end
         * @returns - Total time spent in Evaluate time
         */
        function TimeSpent(start_timer, end_timer) {
            return (end_timer - start_timer) / 1000;
        }
        Timer.TimeSpent = TimeSpent;
    })(Timer = JSRuntime.Timer || (JSRuntime.Timer = {}));
})(JSRuntime || (JSRuntime = {}));
