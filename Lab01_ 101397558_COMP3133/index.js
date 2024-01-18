const fs = require('fs');
const csvParser = require('csv-parser')

// TASK A
// Delete canada.txt and usa.txt if the file exists
if(fs.existsSync('canada.txt') || fs.existsSync('usa.txt')){
    fs.unlinkSync('canada.txt');
    fs.unlinkSync('usa.txt');
    console.log('Deleted!');
}

// TASK B and C

// create canada.txt and usa.txt with headers

const headerData = "country,year,population\n"; 
fs.writeFile('canada.txt',headerData,function (err) {
    if (err) throw err;
    console.log('Saved!');
});
fs.writeFile('usa.txt',headerData,function (err) {
    if (err) throw err;
    console.log('Saved!');
});



fs.createReadStream("input_countries.csv")
  .pipe(csvParser())
  .on("data", (data) => {
    if(data.country === "Canada"){
        fs.appendFile('canada.txt',`${data.country},${data.year},${data.population}\n`,function (err) {
            if (err) throw err;
        });
    }else if(data.country === "United States"){
        fs.appendFile('usa.txt',`${data.country},${data.year},${data.population}\n`,function (err) {
            if (err) throw err;
        });
    }
  })
  .on("end", () => {
    console.log("All done!");
  });
  



