import React from 'react'
import Card from '../components/Card'
import SortBy from '../components/SortBy';
import { Outlet, useSearchParams } from 'react-router-dom';

const HomePage = () => {
  const [searchParams,setSearchParams]=useSearchParams();
  console.log(searchParams.get("category"));
  
const category = searchParams.get("category");

  const books = [
  {
    title: "The Silent Garden",
    description: "A young writer discovers an abandoned garden hiding a forgotten family secret.",
    imageUrl: "https://picsum.photos/seed/book1/400/600",
    author: "Emma Carter",
    category: "Stories"
  },
  {
    title: "Beyond the Horizon",
    description: "An adventurous journey across distant lands changes a young explorer forever.",
    imageUrl: "https://picsum.photos/seed/book2/400/600",
    author: "Daniel Brooks",
    category: "Life Lessons"
  },
  {
    title: "The Last Library",
    description: "A mysterious librarian protects the final collection of books in a changing world.",
    imageUrl: "https://picsum.photos/seed/book3/400/600",
    author: "Sophia Miller",
    category: "Novels"
  },
  {
    title: "Echoes of Time",
    description: "A historian finds clues that connect the present to an unexplained event from centuries ago.",
    imageUrl: "https://picsum.photos/seed/book4/400/600",
    author: "James Wilson",
    category: "Stories"
  },
  {
    title: "Moonlight Dreams",
    description: "A collection of stories about dreams, hope, and unexpected discoveries.",
    imageUrl: "https://picsum.photos/seed/book5/400/600",
    author: "Olivia Harris",
    category: "Novels"
  },
  {
    title: "The Forgotten Path",
    description: "Two friends follow an old map and uncover a hidden path through the mountains.",
    imageUrl: "https://picsum.photos/seed/book6/400/600",
    author: "Michael Anderson",
    category: "Stories"
  },
  {
    title: "Whispers in the Rain",
    description: "A detective investigates strange messages appearing whenever it rains.",
    imageUrl: "https://picsum.photos/seed/book7/400/600",
    author: "Emily Parker",
    category: "Novels"
  },
  {
    title: "City of Stars",
    description: "A teenager moves to a new city and discovers a community built around astronomy.",
    imageUrl: "https://picsum.photos/seed/book8/400/600",
    author: "William Turner",
    category: "Life Lessons"
  },
  {
    title: "The Hidden Door",
    description: "A forgotten door inside an old house leads to a surprising discovery.",
    imageUrl: "https://picsum.photos/seed/book9/400/600",
    author: "Grace Mitchell",
    category: "Stories"
  },
  {
    title: "Winds of Change",
    description: "A family struggles to rebuild their lives after moving to a remote coastal town.",
    imageUrl: "https://picsum.photos/seed/book10/400/600",
    author: "Henry Adams",
    category: "Life Lessons"
  },
  {
    title: "The Blue Notebook",
    description: "A mysterious notebook contains stories that seem to predict future events.",
    imageUrl: "https://picsum.photos/seed/book11/400/600",
    author: "Charlotte Evans",
    category: "Novels"
  },
  {
    title: "Road to Tomorrow",
    description: "A young inventor travels across the country searching for inspiration.",
    imageUrl: "https://picsum.photos/seed/book12/400/600",
    author: "Benjamin Scott",
    category: "Self Development"
  },
  {
    title: "Secrets of the Lake",
    description: "A quiet lakeside town hides a mystery that has remained unsolved for decades.",
    imageUrl: "https://picsum.photos/seed/book13/400/600",
    author: "Amelia Collins",
    category: "Stories"
  },
  {
    title: "The Golden Compass",
    description: "An explorer searches for a legendary compass said to reveal hidden treasures.",
    imageUrl: "https://picsum.photos/seed/book14/400/600",
    author: "Alexander Reed",
    category: "Novels"
  },
  {
    title: "Letters from Home",
    description: "A series of old letters helps a family understand their forgotten history.",
    imageUrl: "https://picsum.photos/seed/book15/400/600",
    author: "Mia Stewart",
    category: "Life Lessons"
  },
  {
    title: "The Mountain House",
    description: "A family inherits an isolated house surrounded by beautiful but mysterious mountains.",
    imageUrl: "https://picsum.photos/seed/book16/400/600",
    author: "Ethan Morgan",
    category: "Novels"
  },
  {
    title: "Stars Over Paris",
    description: "An aspiring artist finds inspiration while exploring the streets of Paris.",
    imageUrl: "https://picsum.photos/seed/book17/400/600",
    author: "Isabella Cooper",
    category: "Stories"
  },
  {
    title: "The Secret Map",
    description: "A young traveler discovers an ancient map that leads to an unknown destination.",
    imageUrl: "https://picsum.photos/seed/book18/400/600",
    author: "Lucas Bennett",
    category: "Novels"
  },
  {
    title: "Winter Morning",
    description: "A quiet story about friendship, family, and starting over during a difficult winter.",
    imageUrl: "https://picsum.photos/seed/book19/400/600",
    author: "Ella Richardson",
    category: "Life Lessons"
  },
  {
    title: "The Endless Road",
    description: "A traveler sets out without a destination and discovers more than expected.",
    imageUrl: "https://picsum.photos/seed/book20/400/600",
    author: "Noah Foster",
    category: "Stories"
  },
  {
    title: "Garden of Memories",
    description: "An old garden brings back memories of a family separated by time.",
    imageUrl: "https://picsum.photos/seed/book21/400/600",
    author: "Lily Ward",
    category: "Life Lessons"
  },
  {
    title: "The Midnight Train",
    description: "A mysterious train appears at midnight and takes passengers somewhere unexpected.",
    imageUrl: "https://picsum.photos/seed/book22/400/600",
    author: "Jack Harrison",
    category: "Novels"
  },
  {
    title: "Ocean of Dreams",
    description: "A young sailor begins a journey across the ocean searching for a legendary island.",
    imageUrl: "https://picsum.photos/seed/book23/400/600",
    author: "Chloe Murphy",
    category: "Stories"
  },
  {
    title: "The Old Clock",
    description: "An antique clock becomes the key to solving a mystery from the past.",
    imageUrl: "https://picsum.photos/seed/book24/400/600",
    author: "Samuel Lewis",
    category: "Others"
  },
  {
    title: "Beyond the Mountains",
    description: "A group of friends travels beyond familiar mountains in search of adventure.",
    imageUrl: "https://picsum.photos/seed/book25/400/600",
    author: "Sophie Walker",
    category: "Stories"
  },
  {
    title: "The Paper Boat",
    description: "A simple paper boat begins a story about childhood dreams and friendship.",
    imageUrl: "https://picsum.photos/seed/book26/400/600",
    author: "Leo Young",
    category: "Life Lessons"
  },
  {
    title: "Shadows of the Past",
    description: "A detective returns to his hometown to solve an old unexplained mystery.",
    imageUrl: "https://picsum.photos/seed/book27/400/600",
    author: "Ava King",
    category: "Novels"
  },
  {
    title: "The Lighthouse Keeper",
    description: "A lighthouse keeper discovers something unusual during a stormy night.",
    imageUrl: "https://picsum.photos/seed/book28/400/600",
    author: "Henry Wright",
    category: "Stories"
  },
  {
    title: "A Place to Begin",
    description: "A young student learns that new beginnings can lead to unexpected opportunities.",
    imageUrl: "https://picsum.photos/seed/book29/400/600",
    author: "Nora Green",
    category: "Self Development"
  },
  {
    title: "The Forest Beyond",
    description: "Three friends enter a mysterious forest while searching for a missing traveler.",
    imageUrl: "https://picsum.photos/seed/book30/400/600",
    author: "David Hall",
    category: "Novels"
  },
  {
    title: "Dreams of Tomorrow",
    description: "A young inventor works toward a future that seems impossible to achieve.",
    imageUrl: "https://picsum.photos/seed/book31/400/600",
    author: "Lucy Allen",
    category: "Self Development"
  },
  {
    title: "The Hidden Village",
    description: "A traveler discovers a village that does not appear on any modern map.",
    imageUrl: "https://picsum.photos/seed/book32/400/600",
    author: "Thomas Young",
    category: "Stories"
  },
  {
    title: "River of Stories",
    description: "A journey beside a river reveals stories passed down through generations.",
    imageUrl: "https://picsum.photos/seed/book33/400/600",
    author: "Maya Brooks",
    category: "Stories"
  },
  {
    title: "The Silver Key",
    description: "A mysterious silver key opens a door that has been locked for many years.",
    imageUrl: "https://picsum.photos/seed/book34/400/600",
    author: "Ryan Clark",
    category: "Novels"
  },
  {
    title: "Autumn Leaves",
    description: "A story about friendship, change, and memories created during one autumn.",
    imageUrl: "https://picsum.photos/seed/book35/400/600",
    author: "Hannah Wood",
    category: "Life Lessons"
  },
  {
    title: "The Lost Journal",
    description: "A lost journal reveals the remarkable journey of an unknown traveler.",
    imageUrl: "https://picsum.photos/seed/book36/400/600",
    author: "Oliver Scott",
    category: "Others"
  },
  {
    title: "Across the Desert",
    description: "A challenging journey across a vast desert becomes a lesson in courage and patience.",
    imageUrl: "https://picsum.photos/seed/book37/400/600",
    author: "Sarah Hill",
    category: "Life Lessons"
  },
  {
    title: "The Secret Gardeners",
    description: "A group of students secretly restores an abandoned community garden.",
    imageUrl: "https://picsum.photos/seed/book38/400/600",
    author: "Daniel Moore",
    category: "Stories"
  },
  {
    title: "The Last Letter",
    description: "One final letter connects two families separated by many years.",
    imageUrl: "https://picsum.photos/seed/book39/400/600",
    author: "Emma Collins",
    category: "Life Lessons"
  },
  {
    title: "Night at the Museum",
    description: "A student discovers that an ordinary museum contains an extraordinary secret.",
    imageUrl: "https://picsum.photos/seed/book40/400/600",
    author: "Jack Wilson",
    category: "Others"
  },
  {
    title: "The Northern Star",
    description: "A young explorer uses the stars to find his way through an unfamiliar land.",
    imageUrl: "https://picsum.photos/seed/book41/400/600",
    author: "Sophia Adams",
    category: "Stories"
  },
  {
    title: "A New Chapter",
    description: "Starting at a new school teaches a young student the value of friendship.",
    imageUrl: "https://picsum.photos/seed/book42/400/600",
    author: "James Carter",
    category: "Self Development"
  },
  {
    title: "The Forgotten City",
    description: "Archaeologists discover clues pointing toward a city lost to history.",
    imageUrl: "https://picsum.photos/seed/book43/400/600",
    author: "Olivia Reed",
    category: "Novels"
  },
  {
    title: "Across the Sea",
    description: "A family begins a new life after moving to a distant country.",
    imageUrl: "https://picsum.photos/seed/book44/400/600",
    author: "William Harris",
    category: "Life Lessons"
  },
  {
    title: "The Green House",
    description: "An unusual house becomes the center of a mystery in a quiet neighborhood.",
    imageUrl: "https://picsum.photos/seed/book45/400/600",
    author: "Emily Morgan",
    category: "Others"
  },
  {
    title: "The Traveler's Diary",
    description: "A diary records an unforgettable journey through several distant countries.",
    imageUrl: "https://picsum.photos/seed/book46/400/600",
    author: "Benjamin Turner",
    category: "Stories"
  },
  {
    title: "The Hidden Treasure",
    description: "A family discovers an old clue that leads them toward a forgotten treasure.",
    imageUrl: "https://picsum.photos/seed/book47/400/600",
    author: "Grace Anderson",
    category: "Novels"
  },
  {
    title: "Morning Sun",
    description: "A hopeful story about rebuilding life after an unexpected change.",
    imageUrl: "https://picsum.photos/seed/book48/400/600",
    author: "Michael Evans",
    category: "Self Development"
  },
  {
    title: "The Empty Room",
    description: "An empty room in an old house holds clues about its mysterious previous owner.",
    imageUrl: "https://picsum.photos/seed/book49/400/600",
    author: "Charlotte Brown",
    category: "Others"
  },
  {
    title: "Journey Home",
    description: "A long journey teaches a young traveler what home really means.",
    imageUrl: "https://picsum.photos/seed/book50/400/600",
    author: "Ethan Wilson",
    category: "Life Lessons"
  }
];

const filteredBooks = category
  ? books.filter((book) =>
      book.category.toLowerCase().includes(category.toLowerCase())
    )
  : books;

  
  return (
   <>
   <div className="container py-4">
    <div className="row g-3">
    <div className="col-md-12 d-flex justify-content-between">
        <h4>All Books</h4>
        <SortBy/>
    </div>
  {filteredBooks.map((book, index) => (
    <div key={index} className="col-6 col-lg-3">
      <Card book={book}/>
    </div>
  ))}
    </div>
    </div>
    <Outlet/>
    </>
  )
}

export default HomePage