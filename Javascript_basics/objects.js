const movies = [
  { name: "Iron man", rating: 3, haveSeen: true },
  { name: "Pacific Rim", rating: 10, haveSeen: true },
  { name: "Little Women", rating: 8, haveSeen: false },
  { name: "The Room", rating: 0, haveSeen: false },
];

movies.forEach((element) => {
  if (element.haveSeen) {
    console.log(`you have seen: ${element.name} - ${element.rating} stars`);
  } else {
    console.log(`you have not seen: ${element.name} - ${element.rating} stars`);
  }
});
