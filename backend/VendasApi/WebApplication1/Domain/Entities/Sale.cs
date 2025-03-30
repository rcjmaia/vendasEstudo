namespace WebApplication1.Domain.Entities
{
    public class Sale
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public List<SaleItem> Items { get; set; }
        public decimal Total { get; set; }
        public DateTime SaleDate { get; set; } = DateTime.UtcNow;
    }
}
