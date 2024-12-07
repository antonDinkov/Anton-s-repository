function fromJSONtoHTMLTable(input){ 
    
    const data = JSON.parse(input);
    const headers = Object.keys(data[0]);

    console.log(`<table>
<tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
${data.map((entry) => `<tr>${headers.map(h => `<td>${entry[h]}</td>`).join('')}</tr>`).join('\n')}
</table>`);
}
fromJSONtoHTMLTable(`[{"Name":"Stamat", 

    "Score":5.5}, 

   {"Name":"Rumen", 

    "Score":6}]`);
    /* fromJSONtoHTMLTable(`[{"Name":"Pesho", 

    "Score":4, 

    " Grade":8}, 
   {"Name":"Gosho", 

    "Score":5, 

    " Grade":8}, 

   {"Name":"Angel", 

    "Score":5.50, 

    " Grade":10}]`) */