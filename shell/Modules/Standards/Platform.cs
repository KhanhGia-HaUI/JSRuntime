using System.Runtime.InteropServices;
using System.IO;

namespace Runtime.Modules.Standards
{

    public abstract class Platform_Abstract
    {
        public abstract string ThisPlatform();

    }

    public class Platform : Platform_Abstract
    {
        // Console
        /// <summary>
        /// Windows is "windows", Linux is "linux" & "Macintosh" is "macintosh"
        /// </summary>
        /// <returns>"windows", "linux", "macintosh", "unknown"</returns>
        /// 
        public override string ThisPlatform()
        {
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                return "windows";
            }
            else if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
            {
                return "linux";
            }
            else if (RuntimeInformation.IsOSPlatform(OSPlatform.OSX))
            {
                return "macintosh";
            }
            else
            {
                return "unknown";
            }
        }

        #pragma warning disable CS8601

        public readonly static string CurrentDirectoryContainsShell = Path.GetDirectoryName(Environment.ProcessPath);


        public static string CurrentPlatform()
        {
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                return "windows";
            }
            else if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
            {
                return "linux";
            }
            else if (RuntimeInformation.IsOSPlatform(OSPlatform.OSX))
            {
                return "macintosh";
            }
            else
            {
                return "unknown";
            }
        }

        /// Xamarin.Forms only
        //public static string CurrentPlatform()
        //{
        //    #if WINDOWS
        //        return "windows";
        //    #elif MACOS
        //        return "macintosh";
        //    #elif LINUX
        //        return "linux";
        //    #endif
        //    switch (Device.RuntimePlatform)
        //    {
        //        case Device.iOS:
        //            return "ios";
        //        case Device.Android:
        //            return "android";
        //        case Device.Windows:
        //            return "windows";
        //        case Device.
        //    }
        //}
    }
}
