// Consts/global variables
const w = 800;
const h = 500;
const margin = 60;

const parseYear = d3.timeParse("%Y");

// load data
d3.csv("gdpannual.csv").then(data => {

    console.log("data", data);

    data.forEach(d => {
        d.year = parseYear(d.Year);

        d.California = +d.California;
        d.Texas = +d.Texas;
        d.NewYork = +d["New York"];
        d.Florida = +d.Florida;
        d.Illinois = +d.Illinois;
    });

    // scales
    const xScale = d3.scaleTime()
        .domain(d3.extent(data, d => d.year))
        .range([margin, w - margin]);

    const yScale = d3.scaleLinear()
        .domain([0, 5])
        .range([h - margin, margin]);

    // svg
    const svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    // bottom axis
    const bottomAxis = d3.axisBottom()
        .scale(xScale)
        .tickFormat(d3.timeFormat("%Y"));

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

    // left axis
    const leftAxis = d3.axisLeft()
        .scale(yScale);

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + margin + ",0)")
        .call(leftAxis);

    // title
    svg.append("text")
        .attr("x", margin)
        .attr("y", 30)
        .attr("class", "title")
        .text("Top US States GDP Over Time - In trillions of USD");

    // line function
    function drawData(which) {

        const coords = d3.line()
            .x(d => xScale(d.year))
            .y(function(d) {

                if (which == "California") {
                    return yScale(d.California)
                }

                else if (which == "Texas") {
                    return yScale(d.Texas)
                }

                else if (which == "NewYork") {
                    return yScale(d.NewYork)
                }

                else if (which == "Florida") {
                    return yScale(d.Florida)
                }

                else {
                    return yScale(d.Illinois)
                }

            });

        // line with transition
        svg.selectAll(".line")
            .data([data])
            .join("path")
            .attr("class", which.toLowerCase() + " line")
            .transition()
            .duration(1000)
            .attr("d", coords);

    }

    // buttons
    d3.selectAll("button").on("click", (event) => {

        const selected = event.currentTarget;

        if (selected.id == "buttonCalifornia") {
            drawData("California")
        }

        else if (selected.id == "buttonTexas") {
            drawData("Texas")
        }

        else if (selected.id == "buttonNewYork") {
            drawData("NewYork")
        }

        else if (selected.id == "buttonFlorida") {
            drawData("Florida")
        }

        else {
            drawData("Illinois")
        }

    });

    // default line
    drawData("California");

});