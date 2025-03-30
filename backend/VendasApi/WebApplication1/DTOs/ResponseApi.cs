namespace WebApplication1.DTOs
{
    public class ResponseApi<T>
    {
        public T? Data { get; set; }
        public string Message { get; set; }
        public bool Success { get; set; } = true;

        public ResponseApi(T? data, string message = "Operação realizada com sucesso!")
        {
            Data = data;
            Message = message;
        }

        public static ResponseApi<T> ErrorResponse(string message)
        {
            return new ResponseApi<T>(default, message) { Success = false };
        }

    }
}
