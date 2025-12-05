const express = require("express");
const app = express();
const port = 3000;

const products = [
  {
    id: 1,
    name: "Chicken Inasal Meal",
    price: 129.0,
    img_src: "img/chicken-inasal.jpg",
    category: "main",
  },
  {
    id: 2,
    name: "Pork BBQ Skewers",
    price: 99.0,
    img_src: "img/pork-bbq.jpg",
    category: "main",
  },
  {
    id: 3,
    name: "Sizzling Bangus Sisig",
    price: 149.0,
    img_src: "img/bangus-sisig.jpg",
    category: "main",
  },
  {
    id: 4,
    name: "Palabok",
    price: 79.0,
    img_src: "img/palabok.jpg",
    category: "noodles",
  },
  {
    id: 5,
    name: "Extra Rice",
    price: 15.0,
    img_src: "img/rice.jpg",
    category: "extras",
  },
  {
    id: 6,
    name: "Halo-Halo",
    price: 65.0,
    img_src: "img/halo-halo.jpg",
    category: "dessert",
  },
];

// 1.2. Customer Information (Data useful for the business)
const customers = [
  {
    id: 101,
    name: "Shane Cordero",
    email: "shane.c@example.com",
    phone: "0917-123-4567",
    branch: "Nepo Mall",
    status: "Gold",
  },
  {
    id: 102,
    name: "Elisha Gania",
    email: "elisha.g@example.com",
    phone: "0998-234-5678",
    branch: "SM Pampanga",
    status: "Silver",
  },
  {
    id: 103,
    name: "Kimberly Puno",
    email: "kimberly.p@example.com",
    phone: "0920-345-6789",
    branch: "Clark",
    status: "Bronze",
  },
  {
    id: 104,
    name: "John Doe",
    email: "john.d@company.net",
    phone: "0906-456-7890",
    branch: "Nepo Mall",
    status: "Silver",
  },
  {
    id: 105,
    name: "Jane Smith",
    email: "jane.s@work.org",
    phone: "0917-567-8901",
    branch: "SM Pampanga",
    status: "Gold",
  },
];

// 1.3. Contact Us Messages (Details submitted via the contact form)
const messages = [
  {
    id: 501,
    name: "Maria Clara",
    email: "maria@example.com",
    message: "Love the new Palabok recipe! Excellent service at Clark branch.",
    date: "2024-10-15T10:00:00Z",
  },
  {
    id: 502,
    name: "Crisostomo Ibarra",
    email: "crisostomo@net.ph",
    message: "Can you offer catering services? Please reply with details.",
    date: "2024-10-14T15:30:00Z",
  },
  {
    id: 503,
    name: "Sisa",
    email: "sisa@anon.com",
    message: "A suggestion: bring back the old dessert menu items.",
    date: "2024-10-13T09:10:00Z",
  },
  {
    id: 504,
    name: "Basilio",
    email: "basilio@mail.net",
    message: "Inasal was a bit cold on my last delivery order.",
    date: "2024-10-12T18:45:00Z",
  },
];

app.use(express.json());

app.use(express.static("public"));

app.get("/api/products", (req, res) => {
  console.log("GET request received for /api/products");
  res.json(products);
});

app.get("/api/customers", (req, res) => {
  console.log("GET request received for /api/customers");
  res.json(customers);
});

app.get("/api/messages", (req, res) => {
  console.log("GET request received for /api/messages");
  res.json(messages);
});

app.post("/api/contact", (req, res) => {
  const { name, email, message, number } = req.body;
  if (name && email && message) {
    const newMessage = {
      id: messages.length + 501,
      name,
      email,
      message,
      phone: number,
      date: new Date().toISOString(),
    };
    messages.push(newMessage);
    console.log("New Message Submitted:", newMessage);

    return res
      .status(201)
      .json({ success: true, message: "Message received successfully!" });
  }
  res.status(400).json({ success: false, message: "Missing required fields." });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`Static files are being served from the 'public' directory.`);
});
