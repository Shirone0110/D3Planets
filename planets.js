var Names = ["a", "b", "c"];
d3.select("#A1")
    .append("p")
    .selectAll("p")
    .data(Names)
    .enter()
    .append("p")
    .text(function(d)
         {
    return d;
})
 
d3.select("#A2")
    .selectAll("span")
    .data(Names)
    .enter()
    .append("span")
    .text(function(d){return d;})

var planetPromise = d3.json("planets.json")
planetPromise.then
(
    function(planetData)
    {
        console.log("planetData", planetData);
        drawPlanet(planetData);
        namePlanet(planetData);
        emptyTable(planetData);
        oneColumnTable(planetData);
        ColumnsTable(planetData);
    },
    function(err)
    {
        console.log("fail", err);
    }
)

var drawPlanet = function (planetData)
{
    d3.select("#B3")
        .selectAll("img")
        .data(planetData)
        .enter()
        .append("img")
        .attr("src", function(d)
              {
        return d.img; })
}

var namePlanet = function (planetData)
{
    d3.select("#B4")
        .append("ol")
        .selectAll("li")
        .data(planetData)
        .enter()
        .append("li")
        .text(function (d)
             {return d.name;})
}

var emptyTable = function(planetData)
{
    d3.select("#C1")
        .append("table")
        .selectAll("tr")
        .data(planetData)
        .enter()
        .append("tr")
}

var oneColumnTable = function(planetData)
{
    var row = d3.select("#C2")
                .append("table")
                .selectAll("tr")
                .data(planetData)
                .enter()
                .append("tr")
    
    row.append("td")
        .text(function(d){return d.name;})
}

var ColumnsTable = function(planetData)
{
    var row = d3.select("#C3")
                .append("table")
                .selectAll("tr")
                .data(planetData)
                .enter()
                .append("tr")
    
    row.append("td")
        .text(function(d){return d.name;})
    
    row.append("td")
        .append("img")
        .attr("src", function(d)
             {return d.img;})
    
    row.append("td")
        .text(function(d) {return d.distance;})
    
    row.append("td")
        .text(function(d) {return d.radius;})
    
    row.append("td")
        .text(function(d) {return d.density;})
    
    row.append("td")
        .text(function(d) {return d.moons;})
}
 
