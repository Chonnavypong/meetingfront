const Obj = [
  {
    _id: "AAAA",
    Name: "Mr. A",
    LastName: "A lastName",
    company: "A Co, Ltd.",
    Database: "ADB",
    Rule: "Admin"
  },
  {
    _id: "BBBB",
    Name: "Mr. B",
    LastName: "B lastName",
    company: "A Co, Ltd.",
    Database: "ADB",
    Rule: "user"
  },
  {
    _id: "CCCC",
    Name: "Mr. C",
    LastName: "C lastName",
    company: "B Co, Ltd.",
    Database: "BDB",
    Rule: "Admin"
  },
  {
    _id: "DDDD",
    Name: "Mr. D",
    LastName: "D lastName",
    company: "B Co, Ltd.",
    Database: "BDB",
    Rule: "user"
  }
];
const headerName = Object.keys(Obj[0])
console.log(headerName)
function headerKey(obj) {
  return obj !="_id"
}
const x = headerName.filter(headerKey)
console.log(x)

Obj.map(function(el) {
  console.log(`<tr>`)
  x.map( (key, index) => console.log(`${index} <tr>${el[key]}</tr>`))
  console.log(`</tr>`)
})

// console.log(headerName.filter(headerKey(Obj)))

/*{ <tr v-for="(row, rindex) in people">
<td>{{ rindex }}</td>
<template>
   <cell  v-for="(value, vindex) in row" :value="value" :vindex="vindex" :rindex="rindex" ></cell>
</template>
</tr>} */