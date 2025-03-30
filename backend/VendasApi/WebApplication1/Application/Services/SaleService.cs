using WebApplication1.Application.Interfaces;
using WebApplication1.Domain.Entities;
using WebApplication1.Domain.Interfaces;

namespace WebApplication1.Application.Services
{
    public class SaleService : ISaleService
    {
        private readonly ISalesRepository _salesRepository;

        public SaleService(ISalesRepository salesRepository)
        {
            _salesRepository = salesRepository;//teste
        }
       
    }
}
