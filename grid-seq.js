//window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 9000;
const grid = document.querySelector("#grid1");
const grid2 = document.querySelector("#grid2");
const grid3 = document.querySelector("#grid3");
const grid4 = document.querySelector("#grid4");

function cleanGrid(g) {
  $(g)
    .find(".card")
    .each(function(index) {
      $(this).removeClass("card--expanded");
      $(this).removeClass("card--expanded-row");
      $(this).removeClass("card--expanded-col");
    });
}

function g1seq1() {
  cleanGrid(grid);
  $("#grid1cell1").addClass("card--expanded");
  $("#grid1cell4").addClass("card--expanded-col");
}

function g1seq2() {
  cleanGrid(grid);
  $("#grid1cell3").addClass("card--expanded");
  $("#grid1cell2").addClass("card--expanded-row");
}

function g1seq3() {
  cleanGrid(grid);
  $("#grid1cell0").addClass("card--expanded");
  $("#grid1cell3").addClass("card--expanded-col");
}
//////
function g2seq1() {
  cleanGrid(grid2);
  $("#grid2cell3").addClass("card--expanded");
  $("#grid2cell2").addClass("card--expanded-row");
}

function g2seq2() {
  cleanGrid(grid2);
  $("#grid2cell0").addClass("card--expanded");
  $("#grid2cell3").addClass("card--expanded-col");
}

function g2seq3() {
  cleanGrid(grid2);
  $("#grid2cell1").addClass("card--expanded");
  $("#grid2cell4").addClass("card--expanded-col");
}

////
function g3seq1() {
  cleanGrid(grid3);
  $("#grid3cell1").addClass("card--expanded");
  $("#grid3cell4").addClass("card--expanded-col");
}

function g3seq2() {
  cleanGrid(grid3);
  $("#grid3cell3").addClass("card--expanded");
  $("#grid3cell2").addClass("card--expanded-row");
}

function g3seq3() {
  cleanGrid(grid3);
  $("#grid3cell0").addClass("card--expanded");
  $("#grid3cell3").addClass("card--expanded-col");
}
////
function g4seq1() {
  cleanGrid(grid4);
  $("#grid4cell1").addClass("card--expanded");
  $("#grid4cell4").addClass("card--expanded-col");
}

function g4seq2() {
  cleanGrid(grid4);
  $("#grid4cell3").addClass("card--expanded");
  $("#grid4cell2").addClass("card--expanded-row");
}

function g4seq3() {
  cleanGrid(grid4);
  $("#grid4cell0").addClass("card--expanded");
  $("#grid4cell3").addClass("card--expanded-col");
}

function runSeq() {
  setTimeout(g1seq1, 3000);
  setTimeout(g2seq1, 6000);
  setTimeout(g3seq1, 9000);
  setTimeout(g4seq1, 12000);
  setTimeout(g1seq2, 15000);
  setTimeout(g2seq2, 18000);
  setTimeout(g3seq2, 21000);
  setTimeout(g4seq2, 24000);
  setTimeout(g1seq3, 27000);
  setTimeout(g2seq3, 30000);
  setTimeout(g3seq3, 33000);
  setTimeout(g4seq3, 36000);
}

function fillGrid(grid) {
  grid.insertAdjacentHTML(
    "beforeend",
    '<div class="card" id=""><img src="" class="card__img"/></div>'
  );
}

const addCardGrid1 = () => {
  return fetch(``).then(
    response => {
      fillGrid(grid1);
    },
    () => {}
  );
};

const addCardGrid3 = () => {
  return fetch(``).then(
    response => {
      fillGrid(grid3);
    },
    () => {}
  );
};

const addCardGrid2 = () => {
  return fetch(``).then(
    response => {
      fillGrid(grid2);
    },
    () => {}
  );
};

const addCardGrid4 = () => {
  return fetch(``).then(
    response => {
      fillGrid(grid4);
    },
    () => {}
  );
};

// Grid 1
Promise.all([...Array(5).keys()].map(addCardGrid1)).then(() => {
  animateCSSGrid.wrapGrid(grid, {
    duration: 300,
    stagger: 10
  });
});

// Grid 2
Promise.all([...Array(5).keys()].map(addCardGrid2)).then(() => {
  animateCSSGrid.wrapGrid(grid2, {
    duration: 300,
    stagger: 10
  });
});

// Grid 4
Promise.all([...Array(5).keys()].map(addCardGrid4)).then(() => {
  animateCSSGrid.wrapGrid(grid3, {
    duration: 300,
    stagger: 10
  });
});

// Grid 3
Promise.all([...Array(5).keys()].map(addCardGrid3)).then(() => {
  animateCSSGrid.wrapGrid(grid4, {
    duration: 300,
    stagger: 10
  });
});

/* Code that executes after grid is ready */

function init() {
  $("#grid1")
    .find(".card")
    .each(function(index) {
      $(this).attr("id", "grid1cell" + index);
    });
  $("#grid2")
    .find(".card")
    .each(function(index) {
      $(this).attr("id", "grid2cell" + index);
    });
  $("#grid3")
    .find(".card")
    .each(function(index) {
      $(this).attr("id", "grid3cell" + index);
    });
  $("#grid4")
    .find(".card")
    .each(function(index) {
      $(this).attr("id", "grid4cell" + index);
    });

  $("#grid1cell0")
    .find("img")
    .attr("src", "../images/morphing-grid/Dining_CornerBakery.jpg");

  $("#grid1cell1")
    .find("img")
    .attr("src", "../images/morphing-grid/Dining_Texas_de_Brazil.jpg");

  $("#grid1cell2")
    .find("img")
    .attr("src", "../images/morphing-grid/Dining_BlazePizza.jpg");
  $("#grid1cell3")
    .find("img")
    .attr("src", "../images/morphing-grid/Dining_Woops_0130.jpg");

  $("#grid1cell4")
    .find("img")
    .attr("src", "../images/morphing-grid/Dining_Wayback.jpg");

  $("#grid2cell0")
    .find("img")
    .attr(
      "src",
      "../images/morphing-grid/Entertainment_VIPexperience_0219.jpg"
    );
  $("#grid2cell1")
    .find("img")
    .attr("src", "../images/morphing-grid/Entertainment_Evergreen.jpg");
  $("#grid2cell2")
    .find("img")
    .attr("src", "../images/morphing-grid/EventAccess_Lifestyle_0503.jpg");
  $("#grid2cell3")
    .find("img")
    .attr("src", "../images/morphing-grid/Entertainment_EventAccess.jpg");
  $("#grid2cell4")
    .find("img")
    .attr(
      "src",
      "../images/morphing-grid/Entertainment_TicketTwosdays_0619.jpg"
    );

  $("#grid3cell0")
    .find("img")
    .attr("src", "../images/morphing-grid/Music_TuneIn_0219.jpg");
  $("#grid3cell1")
    .find("img")
    .attr("src", "../images/morphing-grid/Music_SummerFestivals.jpg");
  $("#grid3cell2")
    .find("img")
    .attr("src", "../images/morphing-grid/Music_Evergreen.jpg");
  $("#grid3cell3")
    .find("img")
    .attr("src", "../images/morphing-grid/Music_iHeartRadio.jpg");
  $("#grid3cell4")
    .find("img")
    .attr("src", "../images/morphing-grid/Music_SoundStudio.jpg");

  $("#grid4cell0")
    .find("img")
    .attr("src", "../images/morphing-grid/Services_PremierSupport.jpg");
  $("#grid4cell1")
    .find("img")
    .attr("src", "../images/morphing-grid/Services_Evergreen.jpg");
  $("#grid4cell2")
    .find("img")
    .attr("src", "../images/morphing-grid/Services_ReadyToGo_0424.jpg");
  $("#grid4cell3")
    .find("img")
    .attr("src", "../images/morphing-grid/Services_Wifi.jpg");
  $("#grid4cell4")
    .find("img")
    .attr("src", "../images/morphing-grid/Services_PriorityServices.jpg");

  g2seq3();
  g1seq3();
  g3seq3();
  g4seq3();

  //css
  $(".morphing-grid-web").css("background-image", "none"); //remove loading gif
  $("#gridContainer").css("visibility", "visible"); //display loaded grid
}

$(document).ready(function() {
  setTimeout(function() {
    init();
  }, 6000);
  runSeq();
  setInterval(function() {
    runSeq();
  }, 30000);
});
