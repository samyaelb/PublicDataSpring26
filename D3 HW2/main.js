// Consts/global variables
const w = 800;
const h = 500;
const margin = 60;

const parseYear = d3.timeParse("%Y");


// load my data, gdp annual by state
d3.csv("gdpannual.csv").then(data => {

    console.log("data", data);

    data.forEach(d => {
        d.year = parseYear(d.Year);

        d.California = +d.California;
        d.Texas = +d.Texas;
        d.NewYork = +d.NewYork;
        d.Florida = +d.Florida;
        d.Illinois = +d.Illinois;
    });

    // scales
    const xScale = d3.scaleTime()
        .domain(d3.extent(data, d => d.year))
        .range([margin, w - margin]);

    const yScale = d3.scaleLinear()
        .domain([
            0,
            d3.max(data, d =>
                Math.max(
                    d.California,
                    d.Texas,
                    d.NewYork,
                    d.Florida,
                    d.Illinois
                )
            )
        ])
        .range([h - margin, margin]);

    // axes
    const bottomAxis = d3.axisBottom()
        .scale(xScale)
        .tickFormat(d3.timeFormat("%Y"));

    const leftAxis = d3.axisLeft()
        .scale(yScale);

    // svg
    const svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    // generate the lines
    const lineCalifornia = d3.line()
        .x(d => xScale(d.year))
        .y(d => yScale(d.California));

    const lineTexas = d3.line()
        .x(d => xScale(d.year))
        .y(d => yScale(d.Texas));

    const lineNewYork = d3.line()
        .x(d => xScale(d.year))
        .y(d => yScale(d.NewYork));

    const lineFlorida = d3.line()
        .x(d => xScale(d.year))
        .y(d => yScale(d.Florida));

    const lineIllinois = d3.line()
        .x(d => xScale(d.year))
        .y(d => yScale(d.Illinois));

    svg.append("path")
        .data([data])
        .attr("d", lineCalifornia)
        .attr("class", "california line");

    svg.append("path")
        .data([data])
        .attr("d", lineTexas)
        .attr("class", "texas line");

    svg.append("path")
        .data([data])
        .attr("d", lineNewYork)
        .attr("class", "newyork line");

    svg.append("path")
        .data([data])
        .attr("d", lineFlorida)
        .attr("class", "florida line");

    svg.append("path")
        .data([data])
        .attr("d", lineIllinois)
        .attr("class", "illinois line");

    // axes
    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + (h - margin) + ")")
        .call(bottomAxis);

    svg.append("text")
        .attr("x", w / 2)
        .attr("y", h - 15)
        .attr("text-anchor", "middle")
        .attr("class", "label")
        .text("Year");

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + margin + ",0)")
        .call(leftAxis);

    // title
    svg.append("text")
        .attr("x", margin)
        .attr("y", 30)
        .attr("class", "title")
        .text("US States GDP Over Time - Top 5 States");

    // subheader
    svg.append("text")
        .attr("x", margin)
        .attr("y", 50)
        .attr("class", "subheader")
        .text("GDP values are in trillions of USD");

    // line labels
    const last = data[data.length - 1];

    svg.append("text")
        .attr("x", xScale(last.year) + 10)
        .attr("y", yScale(last.California))
        .style("fill", "lightblue")
        .style("font-size", "12px")
        .text("California");

    svg.append("text")
        .attr("x", xScale(last.year) + 10)
        .attr("y", yScale(last.Texas))
        .style("fill", "salmon")
        .style("font-size", "12px")
        .text("Texas");

    svg.append("text")
        .attr("x", xScale(last.year) + 10)
        .attr("y", yScale(last.NewYork))
        .style("fill", "lightgreen")
        .style("font-size", "12px")
        .text("New York");

    svg.append("text")
        .attr("x", xScale(last.year) + 10)
        .attr("y", yScale(last.Florida))
        .style("fill", "lightsalmon")
        .style("font-size", "12px")
        .text("Florida");

    svg.append("text")
        .attr("x", xScale(last.year) + 10)
        .attr("y", yScale(last.Illinois))
        .style("fill", "violet")
        .style("font-size", "12px")
        .text("Illinois");

});