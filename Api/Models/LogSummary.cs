using System;

namespace Api.Models
{
    public class LogSummary
    {
        public int Id { get; set; }
        public DateTime EventDate { get; set; }
        public string Level { get; set; }
        public string Message { get; set; }
    }
}