using SixLabors.ImageSharp.Formats.Jpeg;
using SixLabors.ImageSharp.Formats.Png;

namespace Runtime.Modules.Standards.Bitmap
{
    public class Dimension<Generic_T>
    {
        protected Generic_T _width;

        protected Generic_T _height;

        #pragma warning disable IDE1006

        public Dimension(Generic_T width, Generic_T height) { 
            this._width = width;
            this._height = height;
        }

        public Generic_T width { 
            get { return this._width; }
            set {
                if(value != null)
                {
                    this._width = value;
                }
            } 
        }

        public Generic_T height
        {
            get { return this._height; }
            set
            {
                if (value != null)
                {
                    this._height = value;
                }
            }
        }
    }

    public class ImageInfo<Generic_T> : Dimension<Generic_T>
    {
        private string _file_path;

        public string file_path
        {
            get { return this._file_path; }
            set
            {
                if(value != null)
                {
                    this._file_path = value;
                }
            }
        } 

        public ImageInfo(Generic_T width, Generic_T height, string file_path ) : base(width, height)
        {
                this._file_path = file_path;
        }
    }

    public abstract class Abstract_Bitmap
    {
        public abstract Dimension<int> GetDimension(string imagePath);

        public abstract byte[] ExtractAlphaChannel(string image_path);

        public abstract byte[] ExtractRedChannel(string image_path);

        public abstract byte[] ExtractGreenChannel(string image_path);

        public abstract byte[] ExtractBlueChannel(string image_path);

        public abstract Image<Rgba32> JoinImages(Image<Rgba32>[] images, int width, int height);


        public abstract Image<Rgba32> ResizeImage(Runtime.Modules.Standards.Bitmap.ImageInfo<int> original, Runtime.Modules.Standards.Bitmap.ImageInfo<int> output);

        public abstract void SaveImage(string image_path, Image<Rgba32> image_byte);

        public abstract Image<Rgba32> CreateRgbaImage(byte[] alphaBuffer, byte[] redBuffer, byte[] greenBuffer, byte[] blueBuffer, int width, int height);

        public abstract Image<Argb32> CreateArgbImage(byte[] alphaBuffer, byte[] redBuffer, byte[] greenBuffer, byte[] blueBuffer, int width, int height);

        public abstract Image<Rgba32> RotateImage(string imagePath, string outputPath, float degrees);

        public abstract void ConvertPngToJpeg(string pngImagePath, string jpegImagePath);

        public abstract void ConvertJpegToPng(string jpegImagePath, string pngImagePath);

        public abstract void ExportGifToPngs(string gifImagePath, string outputDirectory, string frame_name);

        public abstract Task SaveImageAsync(string image_path, Image<Rgba32> image_byte);
    }

    public class Bitmap_Implement : Abstract_Bitmap
    {
        public override Dimension<int> GetDimension(string imagePath)
        {
            using Image<Rgba32> image = Image.Load<Rgba32>(imagePath);
            return new Dimension<int>(
                image.Width,
                image.Height
                )
            {
            };
        }

        public override byte[] ExtractAlphaChannel(string image_path)
        {
            #pragma warning disable IDE0063

            using (Image<Rgba32> image = Image.Load<Rgba32>(image_path))
            {
                byte[] alphaBuffer = new byte[image.Width * image.Height];

                var index = 0;
                for (var y = 0; y < image.Height; y++)
                {
                    for (var x = 0; x < image.Width; x++)
                    {
                        Rgba32 pixel = image[x, y];
                        alphaBuffer[index] = pixel.A;
                        index++;
                    }
                }

                return alphaBuffer;
            }
        }

        public override Image<Rgba32> CreateRgbaImage(byte[] alphaBuffer, byte[] redBuffer, byte[] greenBuffer, byte[] blueBuffer, int width, int height)
        {
            #pragma warning disable IDE0090

            Image<Rgba32> rgbaImage = new Image<Rgba32>(width, height);

            var index = 0;
            for (var y = 0; y < height; y++)
            {
                for (var x = 0; x < width; x++)
                {
                    byte alpha = alphaBuffer[index];
                    byte red = redBuffer[index];
                    byte green = greenBuffer[index];
                    byte blue = blueBuffer[index];

                    #pragma warning disable IDE0090

                    Rgba32 pixel = new Rgba32(red, green, blue, alpha);
                    rgbaImage[x, y] = pixel;

                    index++;
                }
            }

            return rgbaImage;
        }

        public override Image<Argb32> CreateArgbImage(byte[] alphaBuffer, byte[] redBuffer, byte[] greenBuffer, byte[] blueBuffer, int width, int height)
        {
            Image<Argb32> argbImage = new Image<Argb32>(width, height);

            var index = 0;
            for (var y = 0; y < height; y++)
            {
                for (var x = 0; x < width; x++)
                {
                    byte alpha = alphaBuffer[index];
                    byte red = redBuffer[index];
                    byte green = greenBuffer[index];
                    byte blue = blueBuffer[index];

                    Argb32 pixel = new Argb32(alpha, red, green, blue);
                    argbImage[x, y] = pixel;

                    index++;
                }
            }

            return argbImage;
        }

        public override byte[] ExtractRedChannel(string image_path)
        {
            #pragma warning disable IDE0063

            using (Image<Rgba32> image = Image.Load<Rgba32>(image_path))
            {
                byte[] redBuffer = new byte[image.Width * image.Height];

                var index = 0;
                for (var y = 0; y < image.Height; y++)
                {
                    for (var x = 0; x < image.Width; x++)
                    {
                        Rgba32 pixel = image[x, y];
                        redBuffer[index] = pixel.R;
                        index++;
                    }
                }

                return redBuffer;
            }
        }

        public override byte[] ExtractGreenChannel(string image_path)
        {
            #pragma warning disable IDE0063

            using (Image<Rgba32> image = Image.Load<Rgba32>(image_path))
            {
                byte[] greenBuffer = new byte[image.Width * image.Height];

                var index = 0;
                for (var y = 0; y < image.Height; y++)
                {
                    for (var x = 0; x < image.Width; x++)
                    {
                        Rgba32 pixel = image[x, y];
                        greenBuffer[index] = pixel.G;
                        index++;
                    }
                }

                return greenBuffer;
            }
        }

        public override byte[] ExtractBlueChannel(string image_path)
        {
            #pragma warning disable IDE0063

            using (Image<Rgba32> image = Image.Load<Rgba32>(image_path))
            {
                byte[] blueBuffer = new byte[image.Width * image.Height];

                var index = 0;
                for (var y = 0; y < image.Height; y++)
                {
                    for (var x = 0; x < image.Width; x++)
                    {
                        Rgba32 pixel = image[x, y];
                        blueBuffer[index] = pixel.G;
                        index++;
                    }
                }

                return blueBuffer;
            }
        }

        public override Image<Rgba32> ResizeImage(Runtime.Modules.Standards.Bitmap.ImageInfo<int> original, Runtime.Modules.Standards.Bitmap.ImageInfo<int> output)
        {
            using (Image<Rgba32> image = Image.Load<Rgba32>(original.file_path))
            {
                Image<Rgba32> resizedImage = image.Clone(ctx => ctx.Resize(new ResizeOptions
                {
                    Size = new Size(output.width, output.height),
                    Mode = ResizeMode.Stretch,
                }));

                return resizedImage;
            }
        }

        public override Image<Rgba32> JoinImages(Image<Rgba32>[] images, int width, int height)
        {
            var columns = width / images[0].Width;
            var rows = height / images[0].Height;

            Image<Rgba32> result = new (width, height);

            var index = 0;
            for (var y = 0; y < rows; y++)
            {
                for (var x = 0; x < columns; x++)
                {
                    if (index < images.Length)
                    {
                        Image<Rgba32> currentImage = images[index];
                        result.Mutate(ctx => ctx
                            .DrawImage(currentImage, new Point(x * currentImage.Width, y * currentImage.Height), 1.0f));
                        index++;
                    }
                }
            }

            return result;
        }

        public override void SaveImage(string image_path, Image<Rgba32> image_byte)
        {
            image_byte.Save(image_path);
            return;
        }

        public override Image<Rgba32> RotateImage(string imagePath, string outputPath, float degrees)
        {
            using (Image<Rgba32> image = Image.Load<Rgba32>(imagePath))
            {
                Image<Rgba32> rotatedImage = image.Clone(x => x.Rotate(degrees));
                rotatedImage.Save(outputPath);
                return rotatedImage;
            }
        }

        public override void ConvertPngToJpeg(string pngImagePath, string jpegImagePath)
        {
            using (Image<Rgba32> image = Image.Load<Rgba32>(pngImagePath))
            {
                image.Save(jpegImagePath, new JpegEncoder());
            }
        }

        public override void ConvertJpegToPng(string jpegImagePath, string pngImagePath)
        {
            using (Image<Rgba32> image = Image.Load<Rgba32>(jpegImagePath))
            {
                image.Save(pngImagePath, new PngEncoder());
            }
        }


        public override void ExportGifToPngs(string gifImagePath, string outputDirectory, string frame_name)
        {
             var fs = new Runtime.Modules.Standards.IOModule.FileSystem();
             var path = new Runtime.Modules.Standards.IOModule.Implement_Path();
             using (Image<Rgba32> gifImage = Image.Load<Rgba32>(gifImagePath))
             {
                if(!fs.DirectoryExists(outputDirectory))
                {
                    fs.CreateDirectory(outputDirectory);
                }

                for (var frameIndex = 0; frameIndex < gifImage.Frames.Count; frameIndex++)
                {
                    using (Image<Rgba32> frameImage = gifImage.Clone())
                    {
                        frameImage.Frames.RemoveFrame(frameIndex);
                        var outputPath = path.Join(outputDirectory, $"{frame_name}_{frameIndex}.png");
                        frameImage.Save(outputPath);
                    }
                }
             }
            return;
        }


        public override Task SaveImageAsync(string outputPath, Image<Rgba32> image)
        {
            using (FileStream outputStream = File.OpenWrite(outputPath))
            {
                this.SaveImage(outputPath, image);
            }

            return Task.CompletedTask;
        }


    }
}
