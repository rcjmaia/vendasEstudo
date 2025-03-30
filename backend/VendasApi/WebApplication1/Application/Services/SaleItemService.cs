using WebApplication1.Application.Interfaces;
using WebApplication1.Domain.Entities;
using WebApplication1.Domain.Interfaces;

namespace WebApplication1.Application.Services
{
    public class SaleItemService : ISaleItemService
    {
        private readonly ISaleItemRepository saleItemRepository;

        public SaleItemService(ISaleItemRepository saleItemRepository)
        {
            this.saleItemRepository = saleItemRepository;
        }
    }
}
