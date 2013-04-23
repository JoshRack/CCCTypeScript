namespace Api.Models
{
    public class LogDetail : LogSummary
    {
        public string AppDomain { get; set; }
        public string Thread { get; set; }
    }
}