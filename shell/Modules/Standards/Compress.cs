using Ionic.Zip;
using Ionic.Zlib;

namespace Runtime.Modules.Standards
{

    public abstract class Abstract_Compress
    {
        public abstract byte[] CompressZip<Generic_T>(string zip_output, Generic_T? files, Generic_T? directories) where Generic_T : IList<string>;

        public abstract Task<byte[]> CompressZipAsync<Generic_T>(string zip_output, Generic_T? files, Generic_T? directories) where Generic_T : IList<string>;

        public abstract void UncompressZip(string zip_input, string extracted_directory);

        public abstract Task UncompressZipAsync(string zip_input, string extracted_directory);

        public abstract byte[] CompressZlibBytes<Generic_T>(Generic_T data, int compression_level);

        public abstract byte[] UncompressZlibBytes<Generic_T>(Generic_T zlibData) where Generic_T : IList<byte>;

    }


    public class Compress : Abstract_Compress
    {


        public override byte[] CompressZip<Generic_T>(string zip_output, Generic_T? files, Generic_T? directories) where Generic_T : default
        {
            using var memoryStream = new MemoryStream();
            using (var zip = new ZipFile())
            {
                if (files != null)
                {
                    foreach (string file in files)
                    {
                        zip.AddFile(file);
                    }
                }

                if (directories != null)
                {
                    foreach (string directory in directories)
                    {
                        zip.AddDirectory(directory);
                    }
                }

                zip.Save(memoryStream);
            }

            return memoryStream.ToArray();
        }


        public override async Task<byte[]> CompressZipAsync<Generic_T>(string zipOutput, Generic_T? files, Generic_T? directories) where Generic_T : default
        {
            using var memoryStream = new MemoryStream();
            await Task.Run(() =>
            {
                using var zip = new ZipFile();
                if (files != null)
                {
                    foreach (string file in files)
                    {
                        zip.AddFile(file);
                    }
                }

                if (directories != null)
                {
                    foreach (string directory in directories)
                    {
                        zip.AddDirectory(directory);
                    }
                }

                zip.Save(memoryStream);
            });
            return memoryStream.ToArray();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="Generic_T"></typeparam>
        /// <param name="data"></param>
        /// <param name="compression_level">0, 1, 2, 3, 4, 5, 6, 7, 8, 9. 10 = None, 11 = Best, 12 = speed, all other case using default</param>
        /// <returns></returns>
        /// 
        

        public override byte[] CompressZlibBytes<Generic_T>(Generic_T data, int compression_level)
        {
            var compressionLevel = compression_level switch
            {
                0 => CompressionLevel.Level0,
                1 => CompressionLevel.Level1,
                2 => CompressionLevel.Level2,
                3 => CompressionLevel.Level3,
                4 => CompressionLevel.Level4,
                5 => CompressionLevel.Level5,
                6 => CompressionLevel.Level6,
                7 => CompressionLevel.Level7,
                8 => CompressionLevel.Level8,
                9 => CompressionLevel.Level9,
                10 => CompressionLevel.None,
                11 => CompressionLevel.BestCompression,
                12 => CompressionLevel.BestSpeed,
                _ => CompressionLevel.Default,
                
            };

            using var memoryStream = new MemoryStream();
            using (var zlibStream = new ZlibStream(memoryStream, CompressionMode.Compress, compressionLevel))
            {
                using var writer = new StreamWriter(zlibStream);
                {
                    writer.Write(data);
                }
            }

            return memoryStream.ToArray();
        }

        public override void UncompressZip(string zip_input, string extracted_directory)
        {
            using var zip = ZipFile.Read(zip_input);
            {
                zip.ExtractAll(extracted_directory);
            }
            return;
        }


        public override async Task UncompressZipAsync(string zip_input, string extracted_directory)
        {
            await Task.Run(() =>
            {
                using var zip = ZipFile.Read(zip_input);
                {
                    zip.ExtractAll(extracted_directory);
                }
            });
            return;
        }

        public override byte[] UncompressZlibBytes<Generic_T>(Generic_T zlibData)
        {
            byte[] zlibBytes;

            if (zlibData is byte[] byteArray)
            {
                zlibBytes = byteArray;
            }
            else if (zlibData is Array array && array.GetType().GetElementType() == typeof(byte))
            {
                zlibBytes = array.Cast<byte>().ToArray();
            }
            else
            {
                throw new ArgumentException($"Invalid zlib. Expected byte array or byte[].");
            }

            using var inputStream = new MemoryStream(zlibBytes);
            using var zlibStream = new ZlibStream(inputStream, CompressionMode.Decompress);
            using var outputStream = new MemoryStream();
            {
                zlibStream.CopyTo(outputStream);
                return outputStream.ToArray();
            }
        }
    }
}
