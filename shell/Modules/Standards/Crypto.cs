using System;
using System.Security.Cryptography;
using System.Text;

namespace Runtime.Modules.Standards
{

    public abstract class Crypto_Abstract
    {
        public abstract string ComputeMD5Hash<Generic_T>(Generic_T data) where Generic_T : IEnumerable<byte>;

        public abstract string ComputeSha1Hash<Generic_T>(Generic_T data) where Generic_T : IEnumerable<byte>;

        public abstract string ComputeSha256Hash<Generic_T>(Generic_T data) where Generic_T : IEnumerable<byte>;

        public abstract string ComputeSha384Hash<Generic_T>(Generic_T data) where Generic_T : IEnumerable<byte>;

        public abstract string ComputeSha512Hash<Generic_T>(Generic_T data) where Generic_T : IEnumerable<byte>;

        public abstract byte[] RijndaelEncrypt(string plainText, string password, string salt_value, RijndaelMode Rijndael_Mode, RijndaelPadding Rijndael_Padding);

        public abstract byte[] RijndaelDecrypt(byte[] encryptedBytes, string password, string salt_value, RijndaelMode Rijndael_Mode, RijndaelPadding Rijndael_Padding);

    }

    public enum RijndaelMode
    {
        CBC,
        ECB,
        CFB,
        CTS,
    }

    public enum RijndaelPadding
    {
        None,
        PKCS7,
        Zeros,
        ANSIX923,
        ISO10126,
    }

    public class Crypto : Crypto_Abstract
    {
        public Crypto() { }


        public override string ComputeMD5Hash<Generic_T>(Generic_T data) where Generic_T : default
        {
            {
                if (data == null)
                {
                    throw new ArgumentNullException(nameof(data));
                }

                byte[] hashBytes = MD5.HashData(data.ToArray());
                var sb = new StringBuilder();

                for (var i = 0; i < hashBytes.Length; i++)
                {
                    sb.Append(hashBytes[i].ToString("x2"));
                }

                return sb.ToString();
            }
        }

        public override string ComputeSha1Hash<Generic_T>(Generic_T data) where Generic_T : default
        {
            if (data == null)
            {
                throw new ArgumentNullException(nameof(data));
            }

            byte[] dataBytes;

            if (data is string)
            {
                #pragma warning disable CS8604
                dataBytes = Encoding.UTF8.GetBytes(data as string);
            }
            else if (data is byte[] byteArray)
            {
                dataBytes = byteArray;
            }
            else
            {
                throw new ArgumentException($"Invalid data type. Expecting string or byte array.");
            }
            {
                byte[] hashBytes = SHA1.HashData(dataBytes);
                return BitConverter.ToString(hashBytes).Replace("-", "").ToLower();
            }
        }

        public override string ComputeSha256Hash<Generic_T>(Generic_T data) where Generic_T : default
        {
            if (data == null)
            {
                throw new ArgumentNullException(nameof(data));
            }

            byte[] dataBytes;

            if (data is string)
            {
                #pragma warning disable CS8604
                dataBytes = Encoding.UTF8.GetBytes(data as string);
            }
            else if (data is byte[] byteArray)
            {
                dataBytes = byteArray;
            }
            else
            {
                throw new ArgumentException($"Invalid data type. Expecting string or byte array.");
            }
            {
                byte[] hashBytes = SHA256.HashData(dataBytes);
                return BitConverter.ToString(hashBytes).Replace("-", "").ToLower();
            }
        }

        public override string ComputeSha384Hash<Generic_T>(Generic_T data) where Generic_T : default
        {
            if (data == null)
            {
                throw new ArgumentNullException(nameof(data));
            }

            byte[] dataBytes;

            if (data is string)
            {
                #pragma warning disable CS8604
                dataBytes = Encoding.UTF8.GetBytes(data as string);
            }
            else if (data is byte[] byteArray)
            {
                dataBytes = byteArray;
            }
            else
            {
                throw new ArgumentException($"Invalid data type. Expecting string or byte array.");
            }
            {
                byte[] hashBytes = SHA384.HashData(dataBytes);
                return BitConverter.ToString(hashBytes).Replace("-", "").ToLower();
            }
        }

        public override string ComputeSha512Hash<Generic_T>(Generic_T data) where Generic_T : default
        {
            if (data == null)
            {
                throw new ArgumentNullException(nameof(data));
            }

            byte[] dataBytes;

            if (data is string)
            {
                #pragma warning disable CS8604
                dataBytes = Encoding.UTF8.GetBytes(data as string);
            }
            else if (data is byte[] byteArray)
            {
                dataBytes = byteArray;
            }
            else
            {
                throw new ArgumentException($"Invalid data type. Expecting string or byte array.");
            }
            {
                byte[] hashBytes = SHA512.HashData(dataBytes);
                return BitConverter.ToString(hashBytes).Replace("-", "").ToLower();
            }
        }

        public override byte[] RijndaelEncrypt(string plainText, string password, string salt_value, RijndaelMode Rijndael_Mode, RijndaelPadding Rijndael_Padding)
        {
            #pragma warning disable SYSLIB0022
            using var rijndael = Rijndael.Create();
            {
                rijndael.Mode = Rijndael_Mode switch
                {
                    RijndaelMode.CBC => CipherMode.CBC,
                    RijndaelMode.ECB => CipherMode.ECB,
                    RijndaelMode.CFB => CipherMode.CFB,
                    RijndaelMode.CTS => CipherMode.CTS,
                    _ => throw new InvalidOperationException($"Rijndael Mode has not been implemented"),
                };
                rijndael.Padding = Rijndael_Padding switch
                {
                    RijndaelPadding.None => PaddingMode.None,
                    RijndaelPadding.ISO10126 => PaddingMode.ISO10126,
                    RijndaelPadding.PKCS7 => PaddingMode.PKCS7,
                    RijndaelPadding.ANSIX923 => PaddingMode.ANSIX923,
                    RijndaelPadding.Zeros => PaddingMode.Zeros,
                    _ => throw new InvalidOperationException($"Rijndael Padding has not been impleemented"),
                };

                byte[] salt = Encoding.UTF8.GetBytes(salt_value);
                byte[] passwordBytes = Encoding.UTF8.GetBytes(password);

                #pragma warning disable SYSLIB0041
                using var deriveBytes = new Rfc2898DeriveBytes(passwordBytes, salt, 1000);
                {
                    rijndael.Key = deriveBytes.GetBytes(32);
                    rijndael.IV = deriveBytes.GetBytes(16);

                    using var memoryStream = new MemoryStream();
                    {
                        using var cryptoStream = new CryptoStream(memoryStream, rijndael.CreateEncryptor(), CryptoStreamMode.Write);
                        {
                            byte[] plainBytes = Encoding.UTF8.GetBytes(plainText);
                            cryptoStream.Write(plainBytes, 0, plainBytes.Length);
                            cryptoStream.FlushFinalBlock();

                            return memoryStream.ToArray();
                        }
                    }
                }
            }
        }

        public override byte[] RijndaelDecrypt(byte[] encryptedBytes, string password, string salt_value ,RijndaelMode Rijndael_Mode, RijndaelPadding Rijndael_Padding)
        {
            #pragma warning disable SYSLIB0022
            using var rijndael = Rijndael.Create();
            {
                rijndael.Mode = Rijndael_Mode switch
                {
                    RijndaelMode.CBC => CipherMode.CBC,
                    RijndaelMode.ECB => CipherMode.ECB,
                    RijndaelMode.CFB => CipherMode.CFB,
                    RijndaelMode.CTS => CipherMode.CTS,
                    _ => throw new InvalidOperationException($"Rijndael Mode has not been implemented"),
                };

                rijndael.Padding = Rijndael_Padding switch
                {
                    RijndaelPadding.None => PaddingMode.None,
                    RijndaelPadding.ISO10126 => PaddingMode.ISO10126,
                    RijndaelPadding.PKCS7 => PaddingMode.PKCS7,
                    RijndaelPadding.ANSIX923 => PaddingMode.ANSIX923,
                    RijndaelPadding.Zeros => PaddingMode.Zeros,
                    _ => throw new InvalidOperationException($"Rijndael Padding has not been impleemented"),
                };

                byte[] salt = Encoding.UTF8.GetBytes("YourSaltValue");
                byte[] passwordBytes = Encoding.UTF8.GetBytes(password);

                #pragma warning disable SYSLIB0041
                using var deriveBytes = new Rfc2898DeriveBytes(passwordBytes, salt, 1000);
                {
                    rijndael.Key = deriveBytes.GetBytes(32);
                    rijndael.IV = deriveBytes.GetBytes(16);

                    using var memoryStream = new MemoryStream(encryptedBytes);
                    {
                        using var cryptoStream = new CryptoStream(memoryStream, rijndael.CreateDecryptor(), CryptoStreamMode.Read);
                        {
                            byte[] decryptedBytes = new byte[encryptedBytes.Length];
                            int decryptedByteCount = cryptoStream.Read(decryptedBytes, 0, decryptedBytes.Length);
                            byte[] result = new byte[decryptedByteCount];
                            Array.Copy(decryptedBytes, result, decryptedByteCount);

                            return result;
                        }
                    }
                }
            }
        }
    }
}
