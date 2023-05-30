using System.Text.Encodings.Web;
using System.Text.Json;

namespace Runtime.Modules.Standards
{

    public abstract class Json_Abstract
    {
        public abstract Generic_T ParseJson<Generic_T>(string text_json) where Generic_T : class;

        public abstract string StringifyJson<Generic_T>(Generic_T json_serialized, JsonSerializerOptions? SerializerOptions) where Generic_T : class;

    }

    public class JsonImplement : Json_Abstract
    {
        private readonly JsonSerializerOptions ConstraintJsonSerializerOptions = new()
        {
            WriteIndented = true,
            Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping,
        };

        public JsonImplement() { }

        public override Generic_T ParseJson<Generic_T>(string text_json) where Generic_T : class
        {
            #pragma warning disable CS8603
            return JsonSerializer.Deserialize<Generic_T>(text_json);
        }


        public override string StringifyJson<Generic_T>(Generic_T json_serialized, JsonSerializerOptions? SerializerOptions) where Generic_T : class
        {
            SerializerOptions ??= this.ConstraintJsonSerializerOptions;
            return JsonSerializer.Serialize<Generic_T>(json_serialized, SerializerOptions);
        }


    }
}
