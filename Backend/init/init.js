const mongoose = require("mongoose");
const Books = require("../models/books");

const sampleBooks = [
    {
        title: "The Alchemist",
        description: "A young shepherd follows his dream to discover a hidden treasure and learns valuable lessons along the way.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg",
        author: "Paulo Coelho"
    },
    {
        title: "Atomic Habits",
        description: "A practical guide to building good habits, breaking bad ones, and making small improvements every day.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
        author: "James Clear"
    },
    {
        title: "The Great Gatsby",
        description: "A classic novel exploring wealth, love, ambition, and the American Dream during the Jazz Age.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
        author: "F. Scott Fitzgerald"
    },
    {
        title: "To Kill a Mockingbird",
        description: "A young girl observes her community and learns about justice, courage, and prejudice.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
        author: "Harper Lee"
    },
    {
        title: "1984",
        description: "A dystopian story about surveillance, government control, freedom, and individual thought.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
        author: "George Orwell"
    },
    {
        title: "The Hobbit",
        description: "Bilbo Baggins joins a dangerous adventure across Middle-earth to help reclaim a lost kingdom.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
        author: "J.R.R. Tolkien"
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        description: "A young boy discovers that he is a wizard and begins his journey at Hogwarts School of Witchcraft and Wizardry.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780590353427-L.jpg",
        author: "J.K. Rowling"
    },
    {
        title: "The Little Prince",
        description: "A poetic story about friendship, love, loneliness, and the importance of seeing beyond appearances.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780156012195-L.jpg",
        author: "Antoine de Saint-Exupéry"
    },
    {
        title: "Pride and Prejudice",
        description: "A classic romance following Elizabeth Bennet as she navigates relationships, family, and social expectations.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
        author: "Jane Austen"
    },
    {
        title: "The Catcher in the Rye",
        description: "A teenager struggles with growing up, identity, and his complicated view of the world around him.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780316769488-L.jpg",
        author: "J.D. Salinger"
    },
    {
        title: "The Kite Runner",
        description: "A powerful story about friendship, family, guilt, and redemption set against the history of Afghanistan.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9781594631931-L.jpg",
        author: "Khaled Hosseini"
    },
    {
        title: "The Book Thief",
        description: "A young girl discovers the power of words and books while living in Germany during World War II.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780375842207-L.jpg",
        author: "Markus Zusak"
    },
    {
        title: "The Hunger Games",
        description: "A young woman enters a dangerous competition where survival depends on courage and strategy.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780439023481-L.jpg",
        author: "Suzanne Collins"
    },
    {
        title: "The Fault in Our Stars",
        description: "Two teenagers meet and form a meaningful friendship while dealing with difficult circumstances.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780525428028-L.jpg",
        author: "John Green"
    },
    {
        title: "The Lord of the Rings",
        description: "A group of companions undertake a dangerous journey to destroy a powerful ring and save Middle-earth.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780618640157-L.jpg",
        author: "J.R.R. Tolkien"
    },
    {
        title: "The Psychology of Money",
        description: "Lessons about how people think about money, investing, saving, risk, and financial decisions.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg",
        author: "Morgan Housel"
    },
    {
        title: "Deep Work",
        description: "A guide to developing focused concentration and producing valuable work in a distracted world.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg",
        author: "Cal Newport"
    },
    {
        title: "Rich Dad Poor Dad",
        description: "A personal finance book discussing different approaches to money, investing, and financial independence.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg",
        author: "Robert T. Kiyosaki"
    },
    {
        title: "Think and Grow Rich",
        description: "A classic personal development book focused on mindset, goals, persistence, and achievement.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg",
        author: "Napoleon Hill"
    },
    {
        title: "The 7 Habits of Highly Effective People",
        description: "A personal development guide focused on principles, effectiveness, responsibility, and meaningful goals.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9781982137274-L.jpg",
        author: "Stephen R. Covey"
    },
    {
        title: "How to Win Friends and Influence People",
        description: "Practical advice about communication, relationships, leadership, and understanding other people.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780671027032-L.jpg",
        author: "Dale Carnegie"
    },
    {
        title: "The Power of Now",
        description: "A guide to mindfulness and learning to focus attention on the present moment.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9781577314806-L.jpg",
        author: "Eckhart Tolle"
    },
    {
        title: "Man's Search for Meaning",
        description: "A reflection on finding meaning, hope, and purpose during extremely difficult circumstances.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780807014295-L.jpg",
        author: "Viktor E. Frankl"
    },
    {
        title: "The Subtle Art of Not Giving a F*ck",
        description: "A modern personal development book about values, responsibility, problems, and accepting life's challenges.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780062457714-L.jpg",
        author: "Mark Manson"
    },
    {
        title: "Can't Hurt Me",
        description: "A memoir about discipline, resilience, overcoming obstacles, and developing mental strength.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9781544512280-L.jpg",
        author: "David Goggins"
    },
    {
        title: "Educated",
        description: "A memoir about education, family, identity, and the journey of building a new life through learning.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780399590504-L.jpg",
        author: "Tara Westover"
    },
    {
        title: "The Midnight Library",
        description: "A novel exploring choices, possibilities, regret, and the different paths a person's life can take.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780525559474-L.jpg",
        author: "Matt Haig"
    },
    {
        title: "The Silent Patient",
        description: "A psychological mystery surrounding a famous painter who suddenly stops speaking after a shocking event.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9781250301697-L.jpg",
        author: "Alex Michaelides"
    },
    {
        title: "A Thousand Splendid Suns",
        description: "A story of friendship, family, sacrifice, and survival across several decades of Afghan history.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9781594489501-L.jpg",
        author: "Khaled Hosseini"
    },
    {
        title: "The Great Gatsby",
        description: "A story of ambition, love, wealth, and dreams surrounding the mysterious Jay Gatsby.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
        author: "F. Scott Fitzgerald"
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