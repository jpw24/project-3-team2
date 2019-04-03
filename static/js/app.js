function buildMetadata(sample) {

  // @TODO: Complete the following function that builds the metadata panel

  // Use `d3.json` to fetch the metadata for a sample
    // Use d3 to select the panel with id of `#sample-metadata`
    var dest=d3.select('#sample-metadata');
    // Use `.html("") to clear any existing metadata
    d3.select('#sample-metadata').node().value="";
    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    dest.selectAll("table").remove();
    dest.selectAll("tr").remove();
    dest.selectAll("td").remove();
    var hlp=dest.append("table");

    var test_sample=d3.json("/metadata/".concat(sample)).then(function(response){
      Object.entries(response).forEach(([key,value])=>{
        var tmp=hlp.append("tr");
        tmp.append("td").text(key);
        tmp.append("td").text(value);
      });
      
    });
    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);
  }

function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots
  d3.json("/samples/".concat(sample)).then(function(data){
    var layout={height:500,width:600};
    //getting the top ten values
    //console.log(data.sample_values);
    var helper=[];
    for (t in data.sample_values){
      helper.push(data.sample_values[t]);
    }
    var top_ten=helper.sort(function(a, b){return b - a}).slice(0,10);
    var identity=[];
    var hover=[];
    for (i in top_ten){
      for (x=0; x<data.sample_values.length;x++){
        if (top_ten[i]===data.sample_values[x]){
          identity.push(data.otu_ids[x]);
          hover.push(data.otu_labels[x]);
        }
      }
    }
    
    var trace1 = [{
      values: top_ten,
      labels: identity,
      type: 'pie',
      text: hover,
      hoverinfo: 'text'
    }];
    var mark_size=[];
    for (x in data.sample_values){
      mark_size.push(data.sample_values[x]*1.5)
    }
    //normalizing the colors
    var colors=[];
    var min=0;
    var max=0;
    for (y in data.otu_ids){
      if (y===0){
        min=data.otu_ids[y];
        max=data.otu_ids[y];
      }
      else{
        if (data.otu_ids[y]>max){
          max=data.otu_ids[y];
        }
        if (data.otu_ids[y]<min){
          min=data.otu_ids[y];
        }
      }
    }
    var range=max-min;
    for (x in data.otu_ids){
      colors.push((data.otu_ids[x]-min)*(100/range)*(data.otu_ids[x]-min)*(100/range)); 
    }
    console.log(colors);
    var trace2 = [{
      x: data.otu_ids,
      y: data.sample_values,
      mode: 'markers',
      marker: {
        size: mark_size,
        color:colors
      },
      text: data.otu_labels
    }];
    var layout2 = {
      title: 'Bubble chart',
      showlegend: false,
      height: 1000,
      width: 1500,
      xaxis: {
        title: 'OTU IDs',
      },
      yaxis: {
        title: 'Sample Values'
      }
    };
    
    Plotly.newPlot('pie', trace1, layout);
    Plotly.newPlot('bubble', trace2, layout2);

  });
    // @TODO: Build a Bubble Chart using the sample data

    // @TODO: Build a Pie Chart


    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).
}
/*
function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}
*/
// Initialize the dashboard
//init();
