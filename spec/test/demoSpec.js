'use strict'

var clusterMaker = require('../../clusters.js');

describe("demo", function() {
  it("k means module works", function() {
    //number of clusters, defaults to undefined
    clusterMaker.k(2);

    //number of iterations (higher number gives more time to converge), defaults to 1000
    clusterMaker.iterations(750);

    //data from which to identify clusters, defaults to []
    clusterMaker.data([[1, 2], [2, 3], [4, 2], [7, 10], [5, 7], [9, 7]]);

    console.log(clusterMaker.clusters());
  });

});