using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Api.Infrastructure;
using Api.Models;

namespace Api.Controllers
{
    public class LogsController : ApiController
    {
        private LogRepository repository;

        public LogsController()
        {
            repository = new LogRepository();
        }

        public IEnumerable<LogSummary> Get()
        {
            return repository.Search();
        }

        public LogDetail Get(int id)
        {
            return repository.FindById(id);
        }
    }
}