


export default function ProductPage() {
  const products = [
    {
      id: 1,
      name: "Boats Airbuds-131",
      price: 39.99,
      category: "Earbuds",
      image: "https://m.media-amazon.com/images/I/614gbl-O98L._SX425_.jpg",
    },
    {
      id: 2,
      name: "Boat Nirvana-654",
      price: 89.99,
      category: "Earbuds",
      image:
        "https://m.media-amazon.com/images/I/41umTKqeziL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: 3,
      name: "Oneplus-cord95",
      price: 54.99,
      category: "Earbuds",
      image: "https://m.media-amazon.com/images/I/51Yx1TsWZyL._SX679_.jpg",
    },
    {
      id: 4,
      name: "Mivi air-469",
      price: 44.95,
      category: "Earbuds",
      image: "https://m.media-amazon.com/images/I/71wVgd6atUL._SX679_.jpg",
    },
    {
      id: 5,
      name: "Realme encobuds-277",
      price: 65.0,
      category: "Earbuds",
      image:
        "https://m.media-amazon.com/images/I/31AZv03+5bL._SY300_SX300_.jpg",
    },
    {
      id: 6,
      name: "Apple buds",
      price: 147.99,
      category: "Earbuds",
      image: "https://m.media-amazon.com/images/I/51pOjb8cWPL._SX522_.jpg",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 display-4 fw-bold">
        Explore Our Products
      </h1>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-lg-4 col-md-6" key={product.id}>
            <div className="card product-card h-100">
              <div className="card-img-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img"
                />
              </div>
              <div className="card-body p-4">
                <h5 className="card-title fw-semibold">{product.name}</h5>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="badge bg-primary">{product.category}</span>
                  <h4 className="text-success mb-0">${product.price}</h4>
                </div>
                <button className="btn btn-primary w-100 mt-4">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
