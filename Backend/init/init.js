const mongoose = require("mongoose");
const Books = require("../models/books");

const sampleBooks = [
    {
    title: "The Da Vinci Code",
    description: "A mystery thriller involving hidden symbols, ancient secrets, and a race to uncover a dangerous truth.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780307474278-L.jpg",
    author: "Dan Brown",
    category: "Novels"
},
{
    title: "Sapiens",
    description: "An exploration of human history and how humans developed societies, cultures, and civilizations.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg",
    author: "Yuval Noah Harari",
    category: "Others"
},
{
    title: "The Four Agreements",
    description: "A personal development guide built around principles that can improve your perspective and relationships.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9781878424365-L.jpg",
    author: "Don Miguel Ruiz",
    category: "Self development"
},
{
    title: "The Lean Startup",
    description: "A guide to building businesses through experimentation, customer feedback, and continuous improvement.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780307887894-L.jpg",
    author: "Eric Ries",
    category: "Others"
},
{
    title: "Zero to One",
    description: "Ideas about innovation, startups, technology, and creating something genuinely new.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780804139298-L.jpg",
    author: "Peter Thiel",
    category: "Others"
},
{
    title: "The Intelligent Investor",
    description: "A classic guide to investment principles, risk management, and long-term financial thinking.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780060555665-L.jpg",
    author: "Benjamin Graham",
    category: "Others"
},
{
    title: "A Brief History of Time",
    description: "An introduction to major ideas about the universe, space, time, and modern physics.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg",
    author: "Stephen Hawking",
    category: "Others"
},
{
    title: "The Martian",
    description: "A stranded astronaut must use science, engineering, and determination to survive on Mars.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780553418026-L.jpg",
    author: "Andy Weir",
    category: "Stories"
},
{
    title: "Dune",
    description: "A young heir becomes involved in political conflict, survival, and a struggle for control of a desert planet.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg",
    author: "Frank Herbert",
    category: "Stories"
},
{
    title: "The Chronicles of Narnia",
    description: "A group of children enter a magical world filled with adventure, courage, and unforgettable characters.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780064404990-L.jpg",
    author: "C.S. Lewis",
    category: "Stories"
},
{
    title: "The Name of the Wind",
    description: "A gifted young man tells the story of his life, education, adventures, and search for knowledge.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780756404741-L.jpg",
    author: "Patrick Rothfuss",
    category: "Stories"
},
{
    title: "The Girl with the Dragon Tattoo",
    description: "A journalist and a skilled hacker investigate a decades-old disappearance and uncover disturbing secrets.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780307454546-L.jpg",
    author: "Stieg Larsson",
    category: "Novels"
},
{
    title: "Murder on the Orient Express",
    description: "A famous detective investigates a mysterious murder aboard a luxury train where every passenger has a secret.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780062074001-L.jpg",
    author: "Agatha Christie",
    category: "Novels"
},
{
    title: "The Diary of a Young Girl",
    description: "A young girl's diary records her thoughts, hopes, fears, and experiences during a difficult period of history.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780553296983-L.jpg",
    author: "Anne Frank",
    category: "Stories"
},
{
    title: "Steve Jobs",
    description: "A detailed biography exploring the life, career, personality, and influence of Steve Jobs.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9781451648539-L.jpg",
    author: "Walter Isaacson",
    category: "Others"
},
{
    title: "Becoming",
    description: "A memoir about personal experiences, family, career, identity, and life in the public eye.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9781524763138-L.jpg",
    author: "Michelle Obama",
    category: "Stories"
},
{
    title: "The 48 Laws of Power",
    description: "A study of historical strategies surrounding power, influence, leadership, and human behavior.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780140280197-L.jpg",
    author: "Robert Greene",
    category: "Others"
},
{
    title: "Thinking, Fast and Slow",
    description: "An exploration of how people think, make decisions, judge situations, and make predictable mistakes.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg",
    author: "Daniel Kahneman",
    category: "Others"
},
{
    title: "The Power of Now",
    description: "A guide to mindfulness and learning to focus attention on the present moment.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9781577314806-L.jpg",
    author: "Eckhart Tolle",
    category: "Life Lessons"
},
{
    title: "The Four Agreements",
    description: "A practical guide about personal growth, self-awareness, and developing healthier ways of thinking.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9781878424365-L.jpg",
    author: "Don Miguel Ruiz",
    category: "Self development"
}
];

const initDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/BookPalace");

        await Books.deleteMany({});
        await Books.insertMany(sampleBooks);

        console.log("30 books inserted successfully!");
        await mongoose.connection.close();
    } catch (error) {
        console.log("Error:", error);
    }
};

initDB();