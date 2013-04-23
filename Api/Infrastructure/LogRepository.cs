using System;
using System.Collections.Generic;
using System.Linq;
using Api.Models;

namespace Api.Infrastructure
{
    public class LogRepository
    {
        private static List<LogDetail> Logs { get; set; }

        static LogRepository()
        {
            Logs = new List<LogDetail>();

            var r = new Random();
            for (var i = 0; i < 20; i++)
            {
                var randomValue = r.Next(60);

                var log = new LogDetail
                    {
                        AppDomain = "/lm/w3svc/1/root",
                        EventDate = DateTime.Now.AddMinutes(0 - randomValue),
                        Id = i + 1,
                        Thread = randomValue.ToString(),
                    };
                AppendLevelAndMessage(log, randomValue);
                Logs.Add(log);
            }
        }

        private static void AppendLevelAndMessage(LogDetail log, int randomizer)
        {
            var selector = randomizer % 10;
            switch (selector)
            {
                case 0:
                    log.Level = "ERROR";
                    log.Message = "Object reference not set to an instance of an object.";
                    break;
                case 1:
                    log.Level = "ERROR";
                    log.Message = "Index was outside the bounds of the array.";
                    break;
                case 2:
                    log.Level = "ERROR";
                    log.Message = "Sequence contains no elements";
                    break;
                case 3:
                    log.Level = "WARN";
                    log.Message = "No record was found for id " + (randomizer * 53);
                    break;
                case 4:
                    log.Level = "WARN";
                    log.Message = "No values were returned.";
                    break;
                case 5:
                    log.Level = "INFO";
                    log.Message = "Entered method Foo()";
                    break;
                case 6:
                    log.Level = "INFO";
                    log.Message = "Entered method CustomerRepository.Find()";
                    break;
                case 7:
                    log.Level = "DEBUG";
                    log.Message = "Customer ID: " + (randomizer * 79);
                    break;
                case 8:
                    log.Level = "DEBUG";
                    log.Message = "Organization ID: " + (randomizer * 21);
                    break;
                case 9:
                    log.Level = "DEBUG";
                    log.Message = "DB Call: " + (randomizer * 8) + "ms";
                    break;
            }
        }

        public IEnumerable<LogDetail> Search()
        {
            return Logs;
        }

        public LogDetail FindById(int id)
        {
            return Logs.FirstOrDefault(l => l.Id == id);
        }
    }
}