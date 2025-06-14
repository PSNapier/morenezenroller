/* jshint esversion: 6 */
// NOV 2019 REFACTOR

// geneArrays
// to add a gene, add ['colour', 'gene'] to the corresponding rarity array. Each gene in the array should be separated by a ','. The 'colour' should be all lowercase.
const genes = {
  common: [
    ["champagne", "Ch"],
    ["cream", "Cr"],
    ["dun", "Dn"],
    ["pearl", "Pr"],
    ["mushroom", "Ms"],
    ["silver", "Sv"],
    ["flaxen", "Fl"],
    ["fryekli", "Fr"],
    ["grey", "Gr"],
    ["oduud", "Od"],
    ["pangare", "Pn"],
    ["rabicano", "Rb"],
    ["sabino", "Sb"],
    ["shield", "Sh"],
    ["sable", "Sl"],
    ["nightshade", "Ns"],
    ["daybreak", "Db"],
    ["khoshig", "Ks"],
    ["seal", "Sl"],
    ["tear", "Tr"],
    ["tarnish", "Tn"],
  ],
  uncommon: [
    ["leopard", "Lp"],
    ["blanket", "Bl"],
    ["chono", "Cn"],
    ["shuvuu", "Su"],
    ["overo", "Ov"],
    ["roan", "Rn"],
    ["sooty", "St"],
    ["splash", "Sp"],
    ["tobiano", "To"],
    ["onoo", "On"],
    ["eguskine", "Eg"],
    ["aqmar", "Aq"],
    ["earthen", "Er"],
    ["giraffe", "Gf"],
    ["maze", "Mz"],
    ["rosettes", "Rs"],
    ["viper", "Vp"],
  ],
  rare: [
    ["mystic", "My"],
    ["shavar", "Sr"],
    ["takhö", "Tk"],
    ["tsasan", "Ts"],
    ["quagga", "Qu"],
    ["marbled", "Mb"],
    ["magebane", "Mg"],
    ["brume", "Br"],
  ],
};

function ceremonialHeadpieceCleanup() {
  const select = document.getElementById("ceremonialHeadpiece");
  const valuesToRemove = ["overo"].concat(genes.rare.map((x) => x[0]));
  for (let i = select.options.length - 1; i >= 0; i--) {
    if (valuesToRemove.includes(select.options[i].value)) {
      select.remove(i);
    }
  }
  const optgroups = select.getElementsByTagName("optgroup");
  for (let i = 0; i < optgroups.length; i++) {
    if (optgroups[i].label === "rare") {
      // Replace with your target label
      select.removeChild(optgroups[i]);
      break; // Stop after removing the first matching optgroup
    }
  }
}

// populate dropdowns
populate("tarotCard", ["stallion", "mare"], false);
populate("furCloak", genes, true);
populate("rankRider", ["untrained", "initiate", "rookie"], false);
populate("rankHorse", ["feral/companion", "adept", "veteran"], false);
populate("sireType", ["jibita pony", "haspar draft", "tatakh mini"], false);
populate("damType", ["jibita pony", "haspar draft", "tatakh mini"], false);
populate(
  "buildItems",
  ["none", "light tonic", "medium tonic", "heavy tonic"],
  false
);
populate("ceremonialMask", genes, true);
populate("ceremonialHeadpiece", genes, true);
ceremonialHeadpieceCleanup();
// populate('ceremonialBelt', ['chestnut','mealy','wild bay','bay','black'], false);

// setup input objects, add event listener to inputs and update objects on change
function inputSetup() {
  window.input = {
    tarotCard: document.getElementById("tarotCard").value,
    furCloak: document.getElementById("furCloak").value,
    rainbowChameleon: {
      albino:
        document.getElementById("rainbowChameleon").value.search(/albino/i) !==
        -1
          ? true
          : false,
      melanistic:
        document
          .getElementById("rainbowChameleon")
          .value.search(/melanistic/i) !== -1
          ? true
          : false,
      chimeric:
        document
          .getElementById("rainbowChameleon")
          .value.search(/chimeric/i) !== -1
          ? true
          : false,
      brindle:
        document.getElementById("rainbowChameleon").value.search(/brindle/i) !==
        -1
          ? true
          : false,
      vitiligo:
        document
          .getElementById("rainbowChameleon")
          .value.search(/vitiligo/i) !== -1
          ? true
          : false,
      somatic:
        document.getElementById("rainbowChameleon").value.search(/somatic/i) !==
        -1
          ? true
          : false,
      blizzard:
        document
          .getElementById("rainbowChameleon")
          .value.search(/blizzard/i) !== -1
          ? true
          : false,
      paradox:
        document.getElementById("rainbowChameleon").value.search(/paradox/i) !==
        -1
          ? true
          : false,
      caramel:
        document.getElementById("rainbowChameleon").value.search(/caramel/i) !==
        -1
          ? true
          : false,
      marl:
        document.getElementById("rainbowChameleon").value.search(/marl/i) !== -1
          ? true
          : false,
    },
    rankRider: document.getElementById("rankRider").value,
    rankHorse: document.getElementById("rankHorse").value,
    fertilitySupplement: document.getElementById("fertilitySupplement").checked,
    ringOfBlessings: document.getElementById("ringOfBlessings").checked,
    noviceTwins: document.getElementById("noviceTwins").checked,
    tortoiseCompanion: document.getElementById("tortoiseCompanion").checked,
    pendantOfTheAncestors: document.getElementById("pendantOfTheAncestors")
      .checked,
    buildItems: document.getElementById("buildItems").value,
    heirloomCurryComb: document.getElementById("heirloomCurryComb").checked,
    charmOfSuccess: document.getElementById("charmOfSuccess").checked,
    charmOfHealth: document.getElementById("charmOfHealth").checked,
    charmOfFortune: document.getElementById("charmOfFortune").checked,
    ceremonialBelt: document.getElementById("ceremonialBelt").value,
    ceremonialMask: document.getElementById("ceremonialMask").value,
    ceremonialHeadpiece: document.getElementById("ceremonialHeadpiece").value,
    mysteriousMixture: document.getElementById("mysteriousMixture").checked,
    inbred: document.getElementById("inbredGet").checked,
  };
}

function parentSetup() {
  window.sire = {
    geno: document
      .getElementById("sireget")
      .value.replace(/\//g, " ")
      .replace(/w/g, "w"),
    stats: document.getElementById("sirestatget").value,
    type: document.getElementById("sireType").value,
  };
  window.dam = {
    geno: document
      .getElementById("damget")
      .value.replace(/\//g, " ")
      .replace(/w/g, "w"),
    stats: document.getElementById("damstatget").value,
    type: document.getElementById("damType").value,
  };
}

function ceremonialBeltSetup() {
  function getBlack() {
    let sorted = ["E", "e"];
    let regEx1 = /(E|e)(?=E|e)/;
    let regEx2 = /(?<=E|e)(E|e)/;

    let geneA =
      sire.geno.match(regEx1) !== null ? sire.geno.match(regEx1)[0] : "e";
    let geneB =
      sire.geno.match(regEx2) !== null ? sire.geno.match(regEx2)[0] : "e";
    let geneC =
      dam.geno.match(regEx1) !== null ? dam.geno.match(regEx1)[0] : "e";
    let geneD =
      dam.geno.match(regEx2) !== null ? dam.geno.match(regEx2)[0] : "e";
    return [geneA + geneC, geneB + geneC, geneA + geneD, geneB + geneD]
      .map((x) => x.split("").sortByArray(sorted).join(""))
      .filter(onlyUnique);
  }

  function getAgouti() {
    let sorted = ["A", "At", "Aw", "a"];
    let regEx1 = /(A|At|Aw|a)(?=A|At|Aw|a)/;
    let regEx2 = /(?<=A|At|Aw|a)(A|At|Aw|a)/;

    let geneA =
      sire.geno.match(regEx1) !== null ? sire.geno.match(regEx1)[0] : "a";
    let geneB =
      sire.geno.match(regEx2) !== null ? sire.geno.match(regEx2)[0] : "a";
    let geneC =
      dam.geno.match(regEx1) !== null ? dam.geno.match(regEx1)[0] : "a";
    let geneD =
      dam.geno.match(regEx2) !== null ? dam.geno.match(regEx2)[0] : "a";
    return [
      [geneA, geneC],
      [geneB, geneC],
      [geneA, geneD],
      [geneB, geneD],
    ]
      .map((x) => x.sortByArray(sorted).join(""))
      .filter(onlyUnique);
  }

  let geno = { black: getBlack(), agouti: getAgouti() };
  console.log(geno);
  let output = [];
  if (
    geno.black.checkGene(/ee/) &&
    geno.agouti.checkGene(/(A|At|Aw|a)(A|At|Aw|a)/)
  ) {
    output.push("chestnut");
  }
  if (geno.black.checkGene(/E(E|e)/) && geno.agouti.checkGene(/(A)(A|a)/)) {
    output.push("bay");
  }
  if (geno.black.checkGene(/E(E|e)/) && geno.agouti.checkGene(/(At)(A|At|a)/)) {
    output.push("mealy");
  }
  if (geno.black.checkGene(/E(E|e)/) && geno.agouti.checkGene(/(Aw)(A|Aw|a)/)) {
    output.push("wild bay");
  }
  if (geno.black.checkGene(/E(E|e)/) && geno.agouti.checkGene(/aa/)) {
    output.push("black");
  }
  // console.log(geno, output);

  document.getElementById("ceremonialBelt").innerHTML = "";
  output.unshift("n/a");
  populate("ceremonialBelt", output, false);
}

let eleSelect = document.getElementsByTagName("select");
for (let i = 0; i < eleSelect.length; i++) {
  eleSelect[i].addEventListener("change", inputUpdate);
}

let eleInput = document.getElementsByTagName("input");
for (let i = 0; i < eleInput.length; i++) {
  eleInput[i].addEventListener("change", inputUpdate);
}
// console.log(eleSelect, eleInput);

// can't go in inputUpdate because then the selected option gets eaten :O)
document
  .getElementById("sireget")
  .addEventListener("change", ceremonialBeltSetup);
document
  .getElementById("damget")
  .addEventListener("change", ceremonialBeltSetup);

function inputUpdate() {
  inputSetup();
  parentSetup();

  // console.log(input);
  // console.log(sire, dam);
}

inputUpdate();

// setup 'foal' object
// old foal = foal.geno
function foalSetup() {
  window.foal = {
    warning: [],
    geno: {
      final: [],
      main: {
        final: [],
        base: [],
        rarities: [],
      },
      chimera: {
        final: [],
        base: [],
        rarities: [],
      },
    },
    pheno: {
      final: [],
      main: {
        final: [],
        base: [],
        rarities: [],
        carries: [],
      },
      chimera: {
        final: [],
        base: [],
        rarities: [],
        carries: [],
      },
      mutations: [],
    },
    stats: [],
    health: [],
    gender: "",
    type: "",
  };
  // console.log(foal);
}

// TODO: refactor rollStats, still long-winded and assumes formatting too much
function rollStats() {
  function rngStats(x) {
    if (input.charmOfSuccess) x = x * 2;
    let roll = Math.floor(Math.random() * x);
    return roll;
  }

  function logicStats() {
    let sstat = sire.stats.match(/(\d\d\b|\d\b)/g);
    let ssp = parseInt(sstat[0], 10);
    let sst = parseInt(sstat[1], 10);
    let ssm = parseInt(sstat[2], 10);
    let sin = parseInt(sstat[3], 10);
    let sag = parseInt(sstat[4], 10);
    let svi = parseInt(sstat[5], 10);

    let dstat = dam.stats.match(/(\d\d\b|\d\b)/g);
    let dsp = parseInt(dstat[0], 10);
    let dst = parseInt(dstat[1], 10);
    let dsm = parseInt(dstat[2], 10);
    let din = parseInt(dstat[3], 10);
    let dag = parseInt(dstat[4], 10);
    let dvi = parseInt(dstat[5], 10);

    foal.stats[0] = ssp > dsp ? rngStats(ssp) : rngStats(dsp);
    foal.stats[1] = sst > dst ? rngStats(sst) : rngStats(dst);
    foal.stats[2] = ssm > dsm ? rngStats(ssm) : rngStats(dsm);
    foal.stats[3] = sin > din ? rngStats(sin) : rngStats(din);
    foal.stats[4] = sag > dag ? rngStats(sag) : rngStats(dag);
    foal.stats[5] = svi > dvi ? rngStats(svi) : rngStats(dvi);
  }

  function addPendantOfTheAncestors() {
    let x = rng(6);
    if (x === 1) {
      foal.stats[0] += 5;
    } else if (x === 2) {
      foal.stats[1] += 5;
    } else if (x === 3) {
      foal.stats[2] += 5;
    } else if (x === 4) {
      foal.stats[3] += 5;
    } else if (x === 5) {
      foal.stats[4] += 5;
    } else if (x === 6) {
      foal.stats[5] += 5;
    }
  }

  function fixStats() {
    foal.stats[0] = isNaN(foal.stats[0]) === true ? "?" : foal.stats[0];
    foal.stats[1] = isNaN(foal.stats[1]) === true ? "?" : foal.stats[1];
    foal.stats[2] = isNaN(foal.stats[2]) === true ? "?" : foal.stats[2];
    foal.stats[3] = isNaN(foal.stats[3]) === true ? "?" : foal.stats[3];
    foal.stats[4] = isNaN(foal.stats[4]) === true ? "?" : foal.stats[4];
    foal.stats[5] = isNaN(foal.stats[5]) === true ? "?" : foal.stats[5];
  }

  if (sire.stats != "" && dam.stats != "") {
    logicStats();
    if (input.pendantOfTheAncestors === true) {
      addPendantOfTheAncestors();
    }
    fixStats();
  } else {
    foal.stats[0] = "?";
    foal.stats[1] = "?";
    foal.stats[2] = "?";
    foal.stats[3] = "?";
    foal.stats[4] = "?";
    foal.stats[5] = "?";
  }
}

function rollGender() {
  const x = rng(100);

  if ((foalNum === 1 && input.tarotCard === "stallion") || x >= 51) {
    foal.gender = "stallion";
  } else if ((foalNum === 1 && input.tarotCard === "mare") || x <= 50) {
    foal.gender = "mare";
  }
}

function rollType() {
  //console.log(sire.type, dam.type);
  if (sire.type === "jibita pony" && dam.type === "jibita pony") {
    foal.type = "jibita pony";
  } else if (
    (sire.type === "jibita pony" && dam.type === "haspar draft") ||
    (sire.type === "haspar draft" && dam.type === "jibita pony")
  ) {
    let ponyChance = 60;
    if (input.buildItems === "medium tonic") ponyChance = 80;
    else if (input.buildItems === "heavy tonic") ponyChance = 20;

    if (rng(100) <= ponyChance) {
      foal.type = "jibita pony";
    } else {
      foal.type = "haspar draft";
    }
  } else if (
    (sire.type === "jibita pony" && dam.type === "tatakh mini") ||
    (sire.type === "tatakh mini" && dam.type === "jibita pony")
  ) {
    if (input.buildItems === "light tonic") {
      if (rng(100) <= 80) {
        foal.type = "jibita pony";
      } else {
        foal.type = "tatakh mini";
      }
    } else {
      foal.type = "illegal type cross!";
    }
  } else if (sire.type === "haspar draft" && dam.type === "haspar draft") {
    foal.type = "haspar draft";
  } else if (
    (sire.type === "haspar draft" && dam.type === "tatakh mini") ||
    (sire.type === "tatakh mini" && dam.type === "haspar draft")
  ) {
    foal.type = "illegal type cross!";
  } else if (sire.type === "tatakh mini" && dam.type === "tatakh mini") {
    foal.type = "tatakh mini";
  }
}

function rollInbred() {
  let twins = foalNum === 2 ? true : false;

  function rollhealth() {
    function rolldefects() {
      let x = rng(100);

      if (x <= 10) {
        foal.health.push("partial blindness");
      } else if (x <= 20) {
        foal.health.push("blind");
      } else if (x <= 30) {
        foal.health.push("partial deafness");
      } else if (x <= 40) {
        foal.health.push("deaf");
      } else if (x <= 45) {
        foal.health.push("mute");
      } else if (x <= 50) {
        foal.health.push("spinal deformity");
      } else if (x <= 55) {
        foal.health.push("overbite/underbite");
      } else if (x <= 60) {
        foal.health.push("mane/tail baldness");
      } else if (x <= 65) {
        foal.health.push("extreme hoof growth");
      } else if (x <= 70) {
        foal.health.push("weak bones");
      } else if (x <= 75) {
        foal.health.push("respiratory weakness");
      } else if (x <= 80) {
        foal.health.push("benign growths");
      } else if (x <= 85) {
        foal.health.push("vascular disease");
      } else if (x <= 90) {
        foal.health.push("nerve sensitivity");
      } else if (x <= 95) {
        foal.health.push("weakened immune system");
      } else if (x <= 97) {
        foal.health.push("infertile");
      } else if (x <= 100) {
        foal.health.push("stillborn");
      }
    }

    let x = rng(100);

    if (twins === true) {
      if (x <= 60) {
        foal.health.push("healthy");
      } else if (x <= 80) {
        rolldefects();
      } else if (x <= 90) {
        rolldefects();
        rolldefects();
      } else if (x <= 100) {
        rolldefects();
        rolldefects();
        rolldefects();
      }
    } else if (twins === false) {
      if (x <= 70) {
        foal.health.push("healthy");
      } else if (x <= 80) {
        rolldefects();
      } else if (x <= 90) {
        rolldefects();
        rolldefects();
      } else if (x <= 100) {
        rolldefects();
        rolldefects();
        rolldefects();
      }
    }
  }

  if (
    input.fertilitySupplement === true ||
    input.tortoiseCompanion === true ||
    input.rankHorse === "veteran"
  ) {
    foal.health.push("healthy");
  } else if (input.charmOfHealth) {
    charmOfHealthTriggered = true;
    foal.health.push("healthy");
  } else if (input.inbred === true) {
    rollhealth();
  } else if (
    (input.rankRider === "untrained" && twins === true) ||
    (input.rankRider === "initiate" && twins === true) ||
    (input.rankRider === "rookie" && twins === true)
  ) {
    rollhealth();
  } else if (input.noviceTwins === true && twins === true) {
    rollhealth();
  } else {
    foal.health.push("healthy");
  }
}

function rollCoat(pathGeno) {
  // set dom, rec, cloak, geneA and geneB scope
  let dom = "";
  let rec = "";
  let absent = "";
  let cloak = "";
  let geneA = false;
  let geneB = false;

  function logicBlack() {
    function rollAgain() {
      dom = "EE";
      rec = "Ee";
      absent = "ee";
      let regEx = /\b(E|e)(E|e)\b/;

      geneA =
        sire.geno.match(regEx) !== null ? sire.geno.match(regEx)[0] : false;
      geneB = dam.geno.match(regEx) !== null ? dam.geno.match(regEx)[0] : false;
      // console.log(geneA, geneB);

      if (geneA !== false && geneB !== false) {
        let x = rng(100);

        pathGeno.base.pop();

        if (geneA === dom && geneB === dom) {
          // dom x dom
          pathGeno.base.push(dom);
        } else if (
          (geneA === dom && geneB === rec) ||
          (geneA === rec && geneB === dom)
        ) {
          // dom x rec
          if (x <= 80) {
            pathGeno.base.push(rec);
          } else if (x <= 100) {
            pathGeno.base.push(dom);
          }
        } else if (
          (geneA === dom && geneB === absent) ||
          (geneA === absent && geneB === dom)
        ) {
          // dom x absent
          if (x <= 80) {
            pathGeno.base.push(rec);
          } else if (x <= 95) {
            pathGeno.base.push(dom);
          } else if (x <= 100) {
            pathGeno.base.push(absent);
          }
        } else if (geneA === rec && geneB === rec) {
          // rec x rec
          if (x <= 80) {
            pathGeno.base.push(rec);
          } else if (x <= 85) {
            pathGeno.base.push(dom);
          } else if (x <= 100) {
            pathGeno.base.push(absent);
          }
        } else if (
          (geneA === rec && geneB === absent) ||
          (geneA === absent && geneB === rec)
        ) {
          // rec x absent
          if (x <= 60) {
            pathGeno.base.push(rec);
          } else if (x <= 100) {
            pathGeno.base.push(absent);
          }
        } else if (geneA === absent && geneB === absent) {
          // absent x absent
          if (x <= 100) {
            pathGeno.base.push(absent);
          }
        }
      } else {
        foal.warning = "black missing, inaccurate parent geno";
        pathGeno.base.push("??");
      }
    }

    rollAgain();
    while (
      input.ceremonialBelt === "chestnut" &&
      !pathGeno.base.checkGene(/ee/)
    ) {
      rollAgain();
    }
    while (
      input.ceremonialBelt === "bay" &&
      !pathGeno.base.checkGene(/E(E|e)/)
    ) {
      rollAgain();
    }
    while (
      input.ceremonialBelt === "mealy" &&
      !pathGeno.base.checkGene(/E(E|e)/)
    ) {
      rollAgain();
    }
    while (
      input.ceremonialBelt === "wild bay" &&
      !pathGeno.base.checkGene(/E(E|e)/)
    ) {
      rollAgain();
    }
    while (
      input.ceremonialBelt === "black" &&
      !pathGeno.base.checkGene(/E(E|e)/)
    ) {
      rollAgain();
    }
  }

  function logicAgouti() {
    function rollAgain() {
      let tempGenoRed = "";
      let tempGenoMealy = "";
      let tempGenoWild = "";
      let geneA1 = "";
      let geneB1 = "";
      let geneA2 = "";
      let geneB2 = "";
      let geneA3 = "";
      let geneB3 = "";
      let regEx = /\b(A|At|Aw|a)(A|At|Aw|a)\b/;

      // console.log(sire.geno, dam.geno);
      geneA =
        sire.geno.match(regEx) !== null ? sire.geno.match(regEx)[0] : false;
      geneB = dam.geno.match(regEx) !== null ? dam.geno.match(regEx)[0] : false;
      // console.log(geneA, geneB);

      function logicAgoutiSplit() {
        geneA1 = geneA.replace(/t|w/g, "");
        geneB1 = geneB.replace(/t|w/g, "");
        // console.log(geneA1, geneB1);

        geneA2 = geneA.search(/t/) !== -1 ? geneA.replace(/A|a/g, "") : false;
        geneB2 = geneB.search(/t/) !== -1 ? geneB.replace(/A|a/g, "") : false;
        // console.log(geneA2, geneB2);

        geneA3 = geneA.search(/w/) !== -1 ? geneA.replace(/A|a/g, "") : false;
        geneB3 = geneB.search(/w/) !== -1 ? geneB.replace(/A|a/g, "") : false;
        // console.log(geneA3, geneB3);
      }

      if (pathGeno.base.checkGene(/(A|At|Aw|a)(A|At|Aw|a)/))
        pathGeno.base.pop();

      function logicAgoutiRed() {
        dom = "AA";
        rec = "Aa";
        absent = "aa";
        let x = rng(100);

        // console.log(geneA1, geneB1);

        if (geneA1 === dom && geneB1 === dom) {
          // dom x dom
          //   console.log('dom x dom');
          tempGenoRed = dom;
        } else if (
          (geneA1 === dom && geneB1 === rec) ||
          (geneA1 === rec && geneB1 === dom)
        ) {
          // dom x rec
          //   console.log('dom x rec');
          if (x <= 90) {
            tempGenoRed = rec;
          } else if (x <= 100) {
            tempGenoRed = dom;
          }
        } else if (
          (geneA1 === dom && geneB1 === absent) ||
          (geneA1 === absent && geneB1 === dom)
        ) {
          // dom x none
          //   console.log('dom x none');
          if (x <= 80) {
            tempGenoRed = rec;
          } else if (x <= 95) {
            tempGenoRed = dom;
          } else if (x <= 100) {
            tempGenoRed = absent;
          }
        } else if (geneA1 === rec && geneB1 === rec) {
          // rec x rec
          //   console.log('rec x rec');
          if (x <= 80) {
            tempGenoRed = rec;
          } else if (x <= 95) {
            tempGenoRed = dom;
          } else if (x <= 100) {
            tempGenoRed = absent;
          }
        } else if (
          (geneA1 === rec && geneB1 === absent) ||
          (geneA1 === absent && geneB1 === rec)
        ) {
          // rec x absent
          //   console.log('rec x absent');
          if (x <= 80) {
            tempGenoRed = rec;
          } else if (x <= 100) {
            tempGenoRed = absent;
          }
        } else if (geneA1 === absent && geneB1 === absent) {
          // absent x absent
          //   console.log('absent x absent');
          if (x <= 100) {
            tempGenoRed = absent;
          }
        }
      }

      function logicAgoutiMealy() {
        dom = "tt";
        rec = "t";
        let x = rng(100);

        if (geneA2 === dom && geneB2 === dom) {
          // dom x dom
          if (x <= 65) {
            tempGenoMealy = rec;
          } else if (x <= 90) {
            tempGenoMealy = dom;
          } else if (x <= 100) {
            // none
          }
        } else if (
          (geneA2 === dom && geneB2 === rec) ||
          (geneA2 === rec && geneB2 === dom)
        ) {
          // dom x rec
          if (x <= 45) {
            tempGenoMealy = rec;
          } else if (x <= 60) {
            tempGenoMealy = dom;
          } else if (x <= 100) {
            // none
          }
        } else if (
          (geneA2 === dom && geneB2 === false) ||
          (geneA2 === false && geneB2 === dom)
        ) {
          // dom x none
          if (x <= 30) {
            tempGenoMealy = rec;
          } else if (x <= 35) {
            tempGenoMealy = dom;
          } else if (x <= 100) {
            // none
          }
        } else if (geneA2 === rec && geneB2 === rec) {
          // rec x rec
          if (x <= 30) {
            tempGenoMealy = rec;
          } else if (x <= 35) {
            tempGenoMealy = dom;
          } else if (x <= 100) {
            // none
          }
        } else if (
          (geneA2 === rec && geneB2 === false) ||
          (geneA2 === false && geneB2 === rec)
        ) {
          // rec x none
          if (x <= 15) {
            tempGenoMealy = rec;
          } else if (x <= 100) {
            // none
          }
        }
      }

      function logicAgoutiWild() {
        dom = "ww";
        rec = "w";
        let x = rng(100);

        if (geneA3 === dom && geneB3 === dom) {
          // dom x dom
          if (x <= 65) {
            tempGenoWild = rec;
          } else if (x <= 90) {
            tempGenoWild = dom;
          } else if (x <= 100) {
            // none
          }
        } else if (
          (geneA3 === dom && geneB3 === rec) ||
          (geneA3 === rec && geneB3 === dom)
        ) {
          // dom x rec
          if (x <= 45) {
            tempGenoWild = rec;
          } else if (x <= 60) {
            tempGenoWild = dom;
          } else if (x <= 100) {
            // none
          }
        } else if (
          (geneA3 === dom && geneB3 === false) ||
          (geneA3 === false && geneB3 === dom)
        ) {
          // dom x none
          if (x <= 30) {
            tempGenoWild = rec;
          } else if (x <= 35) {
            tempGenoWild = dom;
          } else if (x <= 100) {
            // none
          }
        } else if (geneA3 === rec && geneB3 === rec) {
          // rec x rec
          if (x <= 30) {
            tempGenoWild = rec;
          } else if (x <= 35) {
            tempGenoWild = dom;
          } else if (x <= 100) {
            // none
          }
        } else if (
          (geneA3 === rec && geneB3 === false) ||
          (geneA3 === false && geneB3 === rec)
        ) {
          // rec x none
          if (x <= 15) {
            tempGenoWild = rec;
          } else if (x <= 100) {
            // none
          }
        }
      }

      function logicAgoutiMerge() {
        // console.log(tempGenoRed, tempGenoMealy, tempGenoWild);
        let merge = "";
        let red = tempGenoRed.split("");
        let mealy = tempGenoMealy.split("");
        let wild = tempGenoWild.split("");
        // console.log(red, mealy, wild);

        if (red.length !== 0) {
          if (mealy.length !== 0) {
            merge = [red[0], mealy[0], red[1], mealy[1]];
          } else if (wild.length !== 0) {
            merge = [red[0], wild[0], red[1], wild[1]];
          } else {
            merge = [red[0], red[1]];
          }
        }

        merge = merge.join("").replace(/a(t|w)/g, "a");
        pathGeno.base.push(merge);
      }

      if (geneA !== false && geneB !== false) {
        logicAgoutiSplit();
        logicAgoutiRed();
        if (geneA2 !== false || geneB2 !== false) {
          logicAgoutiMealy();
        }
        if (geneA3 !== false || geneB3 !== false) {
          logicAgoutiWild();
        }
        logicAgoutiMerge();
      } else {
        // TODO: change foal.warning to array instead of string
        foal.warning = "agouti missing, inaccurate parent geno";
        pathGeno.base.push("??");
      }
    }

    rollAgain();
    while (
      input.ceremonialBelt === "chestnut" &&
      !pathGeno.base.checkGene(/(A|At|Aw|a)(A|At|Aw|a)/)
    ) {
      console.log("chestnut");
      rollAgain();
    }
    while (
      input.ceremonialBelt === "bay" &&
      !pathGeno.base.checkGene(/(A)(A|a)/)
    ) {
      console.log("bay");
      rollAgain();
    }
    while (
      input.ceremonialBelt === "mealy" &&
      !pathGeno.base.checkGene(/(At)(A|At|a)/)
    ) {
      console.log("mealy");
      rollAgain();
    }
    while (
      input.ceremonialBelt === "wild bay" &&
      !pathGeno.base.checkGene(/(Aw)(A|Aw|a)/)
    ) {
      console.log("wild bay");
      rollAgain();
    }
    while (input.ceremonialBelt === "black" && !pathGeno.base.checkGene(/aa/)) {
      console.log("black");
      rollAgain();
    }
  }

  // set dom, rec, cloak, geneA and geneB variables
  function logicPrepareGene(gene) {
    colour = gene[0];
    dom = gene[1] + gene[1];
    rec = "n" + gene[1];
    cloak = gene[0];
    headpiece = gene[0];
    let regEx = "\\b(" + dom + "|" + rec + ")\\b";
    regEx = new RegExp(regEx, "");
    // console.log(regEx);

    geneA = sire.geno.match(regEx) !== null ? sire.geno.match(regEx)[0] : false;
    geneB = dam.geno.match(regEx) !== null ? dam.geno.match(regEx)[0] : false;
    // console.log(geneA, geneB);
  }

  function logicCommon(gene) {
    logicPrepareGene(gene);

    if (input.ceremonialHeadpiece === headpiece && !headpieceTriggered) {
      headpieceTriggered = true;
      return;
    }

    if (geneA !== false || geneB !== false) {
      let x = rng(100);

      if (geneA === dom && geneB === dom) {
        // dom x dom
        if (x <= 100) {
          pathGeno.rarities.push(dom);
        }
      } else if (
        (geneA === dom && geneB === rec) ||
        (geneA === rec && geneB === dom)
      ) {
        // dom x rec
        if (x <= 60) {
          pathGeno.rarities.push(rec);
        } else if (x <= 100) {
          pathGeno.rarities.push(dom);
        }
      } else if (
        (geneA === dom && geneB === false) ||
        (geneA === false && geneB === dom)
      ) {
        // dom x none
        if (x <= 65) {
          pathGeno.rarities.push(rec);
        } else if (x <= 80) {
          pathGeno.rarities.push(dom);
        } else if (input.furCloak === cloak && !cloakTriggered) {
          pathGeno.rarities.push(rec);
          cloakTriggered = true;
        }
      } else if (geneA === rec && geneB === rec) {
        // rec x rec
        if (x <= 65) {
          pathGeno.rarities.push(rec);
        } else if (x <= 80) {
          pathGeno.rarities.push(dom);
        } else if (input.furCloak === cloak && !cloakTriggered) {
          pathGeno.rarities.push(rec);
          cloakTriggered = true;
        }
      } else if (
        (geneA === rec && geneB === false) ||
        (geneA === false && geneB === rec)
      ) {
        // rec x none
        if (x <= 50) {
          pathGeno.rarities.push(rec);
        } else if (input.furCloak === cloak && !cloakTriggered) {
          pathGeno.rarities.push(rec);
          cloakTriggered = true;
        }
      }

      if (input.ceremonialMask === gene[0] && rng(100) <= 15) {
        ceremonialMaskTriggered = true;
        if (pathGeno.rarities.includes(rec)) {
          pathGeno.rarities.pop();
          pathGeno.rarities.push(dom);
        } else if (
          !pathGeno.rarities.includes(dom) &&
          !pathGeno.rarities.includes(rec)
        ) {
          pathGeno.rarities.push(dom);
        }
      }
    }

    // console.log(pathGeno.rarities);
  }

  function logicUncommon(gene) {
    logicPrepareGene(gene);

    if (input.ceremonialHeadpiece === headpiece && !headpieceTriggered) {
      headpieceTriggered = true;
      return;
    }

    if (geneA !== false || geneB !== false) {
      let x = rng(100);

      if (geneA === dom && geneB === dom) {
        // dom x dom
        if (x <= 100) {
          pathGeno.rarities.push(dom);
        }
      } else if (
        (geneA === dom && geneB === rec) ||
        (geneA === rec && geneB === dom)
      ) {
        // dom x rec
        if (x <= 85) {
          pathGeno.rarities.push(rec);
        } else if (x <= 100) {
          pathGeno.rarities.push(dom);
        }
      } else if (
        (geneA === dom && geneB === false) ||
        (geneA === false && geneB === dom)
      ) {
        // dom x none
        if (x <= 45) {
          pathGeno.rarities.push(rec);
        } else if (x <= 50) {
          pathGeno.rarities.push(dom);
        } else if (input.furCloak === cloak && !cloakTriggered) {
          pathGeno.rarities.push(rec);
          cloakTriggered = true;
        }
      } else if (geneA === rec && geneB === rec) {
        // rec x rec
        if (x <= 45) {
          pathGeno.rarities.push(rec);
        } else if (x <= 50) {
          pathGeno.rarities.push(dom);
        } else if (input.furCloak === cloak && !cloakTriggered) {
          pathGeno.rarities.push(rec);
          cloakTriggered = true;
        }
      } else if (
        (geneA === rec && geneB === false) ||
        (geneA === false && geneB === rec)
      ) {
        // rec x none
        if (x <= 30) {
          pathGeno.rarities.push(rec);
        } else if (input.furCloak === cloak && !cloakTriggered) {
          pathGeno.rarities.push(rec);
          cloakTriggered = true;
        }
      }

      if (input.charmOfHealth && gene[0] === "overo") {
        if (
          !pathGeno.rarities.includes(dom) &&
          !pathGeno.rarities.includes(rec)
        ) {
          charmOfHealthTriggered = true;
          pathGeno.rarities.push(rec);
        }
      }

      if (input.ceremonialMask === gene[0] && rng(100) <= 10) {
        ceremonialMaskTriggered = true;
        if (pathGeno.rarities.includes(rec)) {
          pathGeno.rarities.pop();
          pathGeno.rarities.push(dom);
        } else if (
          !pathGeno.rarities.includes(dom) &&
          !pathGeno.rarities.includes(rec)
        ) {
          pathGeno.rarities.push(dom);
        }
      }
    }

    // console.log(pathGeno.rarities);
  }

  function logicRare(gene) {
    function rareHealth() {
      let x = rng(100);
      if (x <= 25) {
        foal.health.push("infertile");
      } else if (x <= 100) {
        foal.health.push("stillborn");
      }
    }

    logicPrepareGene(gene);

    if (input.ceremonialHeadpiece === headpiece && !headpieceTriggered) {
      headpieceTriggered = true;
      return;
    }

    if (geneA !== false || geneB !== false) {
      let x = rng(100);
      let warning = dom + "not viable, inaccurate parent geno";

      if (geneA === dom && geneB === dom) {
        // dom x dom
        foal.warning = warning;
      } else if (
        (geneA === dom && geneB === rec) ||
        (geneA === rec && geneB === dom)
      ) {
        // dom x rec
        foal.warning = warning;
      } else if (
        (geneA === dom && geneB === false) ||
        (geneA === false && geneB === dom)
      ) {
        // dom x none
        foal.warning = warning;
      } else if (geneA === rec && geneB === rec) {
        // rec x rec
        if (x <= 40) {
          pathGeno.rarities.push(rec);
        } else if (x <= 45) {
          pathGeno.rarities.push(dom);
          rareHealth();
        } else if (input.furCloak === cloak && !cloakTriggered) {
          pathGeno.rarities.push(rec);
          cloakTriggered = true;
        }
      } else if (
        (geneA === rec && geneB === false) ||
        (geneA === false && geneB === rec)
      ) {
        // rec x none
        if (x <= 25) {
          pathGeno.rarities.push(rec);
        } else if (input.furCloak === cloak && !cloakTriggered) {
          pathGeno.rarities.push(rec);
          cloakTriggered = true;
        }
      }

      if (input.charmOfHealth) {
        if (
          !pathGeno.rarities.includes(dom) &&
          !pathGeno.rarities.includes(rec)
        ) {
          charmOfHealthTriggered = true;
          pathGeno.rarities.push(rec);
        }
      }

      if (input.ceremonialMask === gene[0] && rng(100) <= 15) {
        ceremonialMaskTriggered = true;
        if (pathGeno.rarities.includes(rec)) {
          pathGeno.rarities.pop();
          pathGeno.rarities.push(dom);
        } else if (
          !pathGeno.rarities.includes(dom) &&
          !pathGeno.rarities.includes(rec)
        ) {
          pathGeno.rarities.push(dom);
        }
      }
    }

    // console.log(foal.geno);
  }

  /*
  let test = genes.common[0];
  // console.log(test);
  logicCommon(test);
  */

  // if (input.ceremonialBelt !== 'n/a') {
  // 	console.log('ceremonial belt triggered');

  // 	if (input.ceremonialBelt === 'chestnut') {
  // 		pathGeno.base.push('ee');
  // 		pathGeno.base.push(randomizer(['AA','AtAt','Ata','A+A+','AA+','Aa','aa']));
  // 	}
  // 	else if (input.ceremonialBelt === 'mealy') {
  // 		pathGeno.base.push(randomizer(['EE','Ee']));
  // 		pathGeno.base.push(randomizer(['AtAt','Ata']));
  // 	}
  // 	else if (input.ceremonialBelt === 'wild bay') {
  // 		pathGeno.base.push(randomizer(['EE','Ee']));
  // 		pathGeno.base.push(randomizer(['A+A+','A+a']));
  // 	}
  // 	else if (input.ceremonialBelt === 'bay') {
  // 		pathGeno.base.push(randomizer(['EE','Ee']));
  // 		pathGeno.base.push(randomizer(['AA','Aa']));
  // 	}
  // 	else if (input.ceremonialBelt === 'black') {
  // 		pathGeno.base.push(randomizer(['EE','Ee']));
  // 		pathGeno.base.push('aa');
  // 	}
  // }
  // else {
  // 	logicBlack();
  // 	logicAgouti();
  // }
  logicBlack();
  logicAgouti();
  for (let i = 0; i < genes.common.length; i++) {
    logicCommon(genes.common[i]);
  }
  for (let i = 0; i < genes.uncommon.length; i++) {
    logicUncommon(genes.uncommon[i]);
  }
  for (let i = 0; i < genes.rare.length; i++) {
    logicRare(genes.rare[i]);
  }

  // console.log(pathGeno);
}

function readPheno(pathGeno, pathPheno) {
  let tempGenoBase = pathGeno.base.join();
  if (tempGenoBase.search(/ee,(A|At|Aw|a)(A|At|Aw|a)/) !== -1) {
    pathPheno.base.push("chestnut");
  } else if (tempGenoBase.search(/E(E|e),(A)(A|a)/) !== -1) {
    pathPheno.base.push("bay");
  } else if (tempGenoBase.search(/E(E|e),(At)(A|At|a)/) !== -1) {
    pathPheno.base.push("mealy");
  } else if (tempGenoBase.search(/E(E|e),(Aw)(A|Aw|a)/) !== -1) {
    pathPheno.base.push("wild bay");
  } else if (tempGenoBase.search(/E(E|e),aa/) !== -1) {
    pathPheno.base.push("black");
  }

  function logicPheno(path, gene) {
    let output = "";
    let colour = gene[0];
    let dom = gene[1] + gene[1];
    let rec = "n" + gene[1];

    if (path.includes(dom) === true || path.includes(rec) === true) {
      output = colour;
    }
    // console.log(output);
    return output;
  }

  for (let i = 0; i < genes.common.length; i++) {
    let output = logicPheno(pathGeno.rarities, genes.common[i]);
    if (output !== "") {
      pathPheno.rarities.push(output);
    }
  }
  for (let i = 0; i < genes.uncommon.length; i++) {
    let output = logicPheno(pathGeno.rarities, genes.uncommon[i]);
    if (output !== "") {
      pathPheno.rarities.push(output);
    }
  }
  for (let i = 0; i < genes.rare.length; i++) {
    let output = logicPheno(pathGeno.rarities, genes.rare[i]);
    if (output !== "") {
      pathPheno.rarities.push(output);
    }
  }

  function phenoExceptions() {
    let tempFoal = pathGeno.base.join(" ") + " " + pathGeno.rarities.join(" ");
    // console.log(tempFoal);

    // declare variables for colour indexOf numbers
    let chestnut = 0;
    let black = 0;
    let champagne = 0;
    let cream = 0;
    let dun = 0;
    let flaxen = 0;
    let pearl = 0;
    let silver = 0;

    //pearl
    if (tempFoal.search(/\b(nPr)\b/) !== -1) {
      silver = pathPheno.rarities.indexOf("pearl");
      pathPheno.rarities.splice(silver, 1);
      pathPheno.carries.push("pearl");
    }

    //flaxen
    if (
      tempFoal.search(/\b(nFl|FlFl)\b/) !== -1 &&
      pathPheno.base.indexOf("chestnut") === -1
    ) {
      flaxen = pathPheno.rarities.indexOf("flaxen");
      pathPheno.rarities.splice(flaxen, 1);
      pathPheno.carries.push("flaxen");
    } else if (tempFoal.search(/\b(FlFl)\b/) !== -1) {
      flaxen = pathPheno.rarities.indexOf("flaxen");
      pathPheno.rarities.splice(flaxen, 1);
      pathPheno.base.unshift("flaxen");
    }

    //silver
    if (
      tempFoal.search(/\b(nSv|SvSv)\b/) !== -1 &&
      pathPheno.base.indexOf("chestnut") !== -1
    ) {
      silver = pathPheno.rarities.indexOf("silver");
      pathPheno.rarities.splice(silver, 1);
      pathPheno.carries.push("silver");
    } else if (tempFoal.search(/\b(nSv|SvSv)\b/) !== -1) {
      silver = pathPheno.rarities.indexOf("silver");
      pathPheno.rarities.splice(silver, 1);
      pathPheno.base.unshift("silver");
    }

    // TODO: make exception logic more performant by checking base instead of running if trees for every base
    //chestnut base
    chestnut = pathPheno.base.indexOf("chestnut");
    dun = pathPheno.rarities.indexOf("dun");
    cream = pathPheno.rarities.indexOf("cream");
    champagne = pathPheno.rarities.indexOf("champagne");

    if (
      chestnut !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1 &&
      tempFoal.search(/\b(CrCr)\b/) !== -1
    ) {
      pathPheno.base[chestnut] = "ivory cremello dun champagne";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[cream] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      chestnut !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1 &&
      tempFoal.search(/\b(nCr)\b/) !== -1
    ) {
      pathPheno.base[chestnut] = "ivory dunalino champagne";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[cream] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      chestnut !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1 &&
      tempFoal.search(/\b(CrCr)\b/) !== -1
    ) {
      pathPheno.base[chestnut] = "ivory cream champagne";
      pathPheno.rarities[cream] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      chestnut !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1 &&
      tempFoal.search(/\b(nCr)\b/) !== -1
    ) {
      pathPheno.base[chestnut] = "ivory champagne";
      pathPheno.rarities[cream] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      chestnut !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1
    ) {
      pathPheno.base[chestnut] = "gold dun";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      chestnut !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(CrCr)\b/) !== -1
    ) {
      pathPheno.base[chestnut] = "cremello dun";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[cream] = "";
    } else if (
      chestnut !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(nCr)\b/) !== -1
    ) {
      pathPheno.base[chestnut] = "dunalino";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[cream] = "";
    } else if (chestnut !== -1 && tempFoal.search(/\b(nDn|DnDn)\b/) !== -1) {
      pathPheno.base[chestnut] = "red dun";
      pathPheno.rarities[dun] = "";
    } else if (chestnut !== -1 && tempFoal.search(/\b(CrCr)\b/) !== -1) {
      pathPheno.base[chestnut] = "cremello";
      pathPheno.rarities[cream] = "";
    } else if (chestnut !== -1 && tempFoal.search(/\b(nCr)\b/) !== -1) {
      pathPheno.base[chestnut] = "palomino";
      pathPheno.rarities[cream] = "";
    } else if (chestnut !== -1 && tempFoal.search(/\b(nCh|ChCh)\b/) !== -1) {
      pathPheno.base[chestnut] = "gold champagne";
      pathPheno.rarities[champagne] = "";
    }

    //black base
    black = pathPheno.base.indexOf("black");
    dun = pathPheno.rarities.indexOf("dun");
    cream = pathPheno.rarities.indexOf("cream");
    champagne = pathPheno.rarities.indexOf("champagne");
    silver = pathPheno.base.indexOf("silver");

    if (
      black !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1 &&
      tempFoal.search(/\b(CrCr)\b/) !== -1
    ) {
      pathPheno.base[black] = "smoky ivory mouse dun";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[cream] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      black !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1 &&
      tempFoal.search(/\b(nCr)\b/) !== -1
    ) {
      pathPheno.base[black] = "smoky mouse dun";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[cream] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      black !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1 &&
      tempFoal.search(/\b(CrCr)\b/) !== -1
    ) {
      pathPheno.base[black] = "classic cream ivory";
      pathPheno.rarities[cream] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      black !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1 &&
      tempFoal.search(/\b(nCr)\b/) !== -1
    ) {
      pathPheno.base[black] = "classic ivory";
      pathPheno.rarities[cream] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      black !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1
    ) {
      pathPheno.base[black] = "mouse dun";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      black !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(CrCr)\b/) !== -1
    ) {
      pathPheno.base[black] = "smoky cream grullo";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[cream] = "";
    } else if (
      black !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(nCr)\b/) !== -1
    ) {
      pathPheno.base[black] = "smoky grullo";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[cream] = "";
    } else if (black !== -1 && tempFoal.search(/\b(nDn|DnDn)\b/) !== -1) {
      pathPheno.base[black] = "grullo";
      pathPheno.rarities[dun] = "";
    } else if (black !== -1 && tempFoal.search(/\b(CrCr)\b/) !== -1) {
      pathPheno.base[black] = "smoky cream";
      pathPheno.rarities[cream] = "";
    } else if (black !== -1 && tempFoal.search(/\b(nCr)\b/) !== -1) {
      pathPheno.base[black] = "smoky black";
      pathPheno.rarities[cream] = "";
    } else if (black !== -1 && tempFoal.search(/\b(nCh|ChCh)\b/) !== -1) {
      pathPheno.base[black] = "classic champagne";
      pathPheno.rarities[champagne] = "";
    } else if (black !== -1 && tempFoal.search(/\b(nSv|SvSv)\b/) !== -1) {
      pathPheno.base[black] = "silver dapple";
      pathPheno.base[silver] = "";
    }

    //bay base
    bay = pathPheno.base.indexOf("bay");
    dun = pathPheno.rarities.indexOf("dun");
    cream = pathPheno.rarities.indexOf("cream");
    champagne = pathPheno.rarities.indexOf("champagne");
    silver = pathPheno.base.indexOf("silver");

    if (
      bay !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1 &&
      tempFoal.search(/\b(CrCr)\b/) !== -1
    ) {
      pathPheno.base[bay] = "amber ivory dunskin";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[cream] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      bay !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1 &&
      tempFoal.search(/\b(nCr)\b/) !== -1
    ) {
      pathPheno.base[bay] = "amber dunskin";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[cream] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      bay !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1 &&
      tempFoal.search(/\b(CrCr)\b/) !== -1
    ) {
      pathPheno.base[bay] = "amber cream ivory";
      pathPheno.rarities[cream] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      bay !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1 &&
      tempFoal.search(/\b(nCr)\b/) !== -1
    ) {
      pathPheno.base[bay] = "amber ivory";
      pathPheno.rarities[cream] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      bay !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1
    ) {
      pathPheno.base[bay] = "amber dun";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      bay !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(CrCr)\b/) !== -1
    ) {
      pathPheno.base[bay] = "cream dunskin";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[cream] = "";
    } else if (
      bay !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(nCr)\b/) !== -1
    ) {
      pathPheno.base[bay] = "dunskin";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[cream] = "";
    } else if (bay !== -1 && tempFoal.search(/\b(nDn|DnDn)\b/) !== -1) {
      pathPheno.base[bay] = "classic dun";
      pathPheno.rarities[dun] = "";
    } else if (bay !== -1 && tempFoal.search(/\b(CrCr)\b/) !== -1) {
      pathPheno.base[bay] = "perlino";
      pathPheno.rarities[cream] = "";
    } else if (bay !== -1 && tempFoal.search(/\b(nCr)\b/) !== -1) {
      pathPheno.base[bay] = "buckskin";
      pathPheno.rarities[cream] = "";
    } else if (bay !== -1 && tempFoal.search(/\b(nCh|ChCh)\b/) !== -1) {
      pathPheno.base[bay] = "amber champagne";
      pathPheno.rarities[champagne] = "";
    } else if (bay !== -1 && tempFoal.search(/\b(nSv|SvSv)\b/) !== -1) {
      pathPheno.base[bay] = "silver bay";
      pathPheno.base[silver] = "";
    }

    //wild bay base
    wildBay = pathPheno.base.indexOf("wild bay");
    dun = pathPheno.rarities.indexOf("dun");
    cream = pathPheno.rarities.indexOf("cream");
    champagne = pathPheno.rarities.indexOf("champagne");
    silver = pathPheno.base.indexOf("silver");

    if (
      wildBay !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1 &&
      tempFoal.search(/\b(CrCr)\b/) !== -1
    ) {
      pathPheno.base[wildBay] = "amber ivory dunskin";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[cream] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      wildBay !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1 &&
      tempFoal.search(/\b(nCr)\b/) !== -1
    ) {
      pathPheno.base[wildBay] = "amber dunskin";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[cream] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      wildBay !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1 &&
      tempFoal.search(/\b(CrCr)\b/) !== -1
    ) {
      pathPheno.base[wildBay] = "amber cream ivory";
      pathPheno.rarities[cream] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      wildBay !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1 &&
      tempFoal.search(/\b(nCr)\b/) !== -1
    ) {
      pathPheno.base[wildBay] = "amber ivory";
      pathPheno.rarities[cream] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      wildBay !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1
    ) {
      pathPheno.base[wildBay] = "amber dun";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      wildBay !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(CrCr)\b/) !== -1
    ) {
      pathPheno.base[wildBay] = "cream dunskin";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[cream] = "";
    } else if (
      wildBay !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(nCr)\b/) !== -1
    ) {
      pathPheno.base[wildBay] = "dunskin";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[cream] = "";
    } else if (wildBay !== -1 && tempFoal.search(/\b(nDn|DnDn)\b/) !== -1) {
      pathPheno.base[wildBay] = "classic dun";
      pathPheno.rarities[dun] = "";
    } else if (wildBay !== -1 && tempFoal.search(/\b(CrCr)\b/) !== -1) {
      pathPheno.base[wildBay] = "perlino";
      pathPheno.rarities[cream] = "";
    } else if (wildBay !== -1 && tempFoal.search(/\b(nCr)\b/) !== -1) {
      pathPheno.base[wildBay] = "buckskin";
      pathPheno.rarities[cream] = "";
    } else if (wildBay !== -1 && tempFoal.search(/\b(nCh|ChCh)\b/) !== -1) {
      pathPheno.base[wildBay] = "amber champagne";
      pathPheno.rarities[champagne] = "";
    } else if (wildBay !== -1 && tempFoal.search(/\b(nSv|SvSv)\b/) !== -1) {
      pathPheno.base[wildBay] = "silver wild bay";
      pathPheno.base[silver] = "";
    }

    //mealy base
    mealy = pathPheno.base.indexOf("mealy");
    dun = pathPheno.rarities.indexOf("dun");
    cream = pathPheno.rarities.indexOf("cream");
    champagne = pathPheno.rarities.indexOf("champagne");
    silver = pathPheno.base.indexOf("silver");

    if (
      mealy !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1 &&
      tempFoal.search(/\b(CrCr)\b/) !== -1
    ) {
      pathPheno.base[mealy] = "sable ivory dunskin";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[cream] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      mealy !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1 &&
      tempFoal.search(/\b(nCr)\b/) !== -1
    ) {
      pathPheno.base[mealy] = "sable dunskin";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[cream] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      mealy !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1 &&
      tempFoal.search(/\b(CrCr)\b/) !== -1
    ) {
      pathPheno.base[mealy] = "sable cream ivory";
      pathPheno.rarities[cream] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      mealy !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1 &&
      tempFoal.search(/\b(nCr)\b/) !== -1
    ) {
      pathPheno.base[mealy] = "sable ivory";
      pathPheno.rarities[cream] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      mealy !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(nCh|ChCh)\b/) !== -1
    ) {
      pathPheno.base[mealy] = "sable dun";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[champagne] = "";
    } else if (
      mealy !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(CrCr)\b/) !== -1
    ) {
      pathPheno.base[mealy] = "burnt cream dunskin";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[cream] = "";
    } else if (
      mealy !== -1 &&
      tempFoal.search(/\b(nDn|DnDn)\b/) !== -1 &&
      tempFoal.search(/\b(nCr)\b/) !== -1
    ) {
      pathPheno.base[mealy] = "burnt dunskin";
      pathPheno.rarities[dun] = "";
      pathPheno.rarities[cream] = "";
    } else if (mealy !== -1 && tempFoal.search(/\b(nDn|DnDn)\b/) !== -1) {
      pathPheno.base[mealy] = "olive dun";
      pathPheno.rarities[dun] = "";
    } else if (mealy !== -1 && tempFoal.search(/\b(CrCr)\b/) !== -1) {
      pathPheno.base[mealy] = "mealy perlino";
      pathPheno.rarities[cream] = "";
    } else if (mealy !== -1 && tempFoal.search(/\b(nCr)\b/) !== -1) {
      pathPheno.base[mealy] = "burnt buckskin";
      pathPheno.rarities[cream] = "";
    } else if (mealy !== -1 && tempFoal.search(/\b(nCh|ChCh)\b/) !== -1) {
      pathPheno.base[mealy] = "sable champagne";
      pathPheno.rarities[champagne] = "";
    } else if (mealy !== -1 && tempFoal.search(/\b(nSv|SvSv)\b/) !== -1) {
      pathPheno.base[mealy] = "silver blue";
      pathPheno.base[silver] = "";
    }
  }

  phenoExceptions();
  // console.log(pathPheno.carries);
}

function rollMutations() {
  let cham = input.rainbowChameleon;

  if (cham.albino === true && rng(100) <= 20) {
    console.log("yas");
    foal.pheno.mutations.push("[Albino]");
  } else if (cham.melanistic === true && rng(100) <= 20) {
    foal.pheno.mutations.push("[Melanistic]");
  } else if (cham.chimeric === true && rng(100) <= 20) {
    foal.pheno.mutations.push("[Chimeric]");
  } else if (cham.brindle === true && rng(100) <= 20) {
    foal.pheno.mutations.push("[Brindle]");
  } else if (cham.vitiligo === true && rng(100) <= 20) {
    foal.pheno.mutations.push("[Vitiligo]");
  } else if (cham.somatic === true && rng(100) <= 20) {
    foal.pheno.mutations.push("[Somatic]");
  } else if (cham.blizzard === true && rng(100) <= 20) {
    foal.pheno.mutations.push("[Blizzard]");
  } else if (cham.paradox === true && rng(100) <= 20) {
    foal.pheno.mutations.push("[Paradox]");
  } else if (cham.caramel === true && rng(100) <= 20) {
    foal.pheno.mutations.push("[Caramel]");
  } else if (cham.marl === true && rng(100) <= 20) {
    foal.pheno.mutations.push("[Marl]");
  }

  let extraChance = 0;
  if (input.mysteriousMixture) extraChance += 7;
  if (rng(100) <= 3 + extraChance) {
    let x = rng(142);

    if (x <= 14) {
      foal.pheno.mutations.push("[Albino]");
    } else if (x <= 28) {
      foal.pheno.mutations.push("[Melanistic]");
    } else if (x <= 42) {
      foal.pheno.mutations.push("[Chimeric]");
    } else if (x <= 56) {
      foal.pheno.mutations.push("[Brindle]");
    } else if (x <= 70) {
      foal.pheno.mutations.push("[Vitiligo]");
    } else if (x <= 85) {
      foal.pheno.mutations.push("[Somatic]");
    } else if (x <= 100) {
      foal.pheno.mutations.push("[Blizzard]");
    } else if (x <= 114) {
      foal.pheno.mutations.push("[Paradox]");
    } else if (x <= 128) {
      foal.pheno.mutations.push("[Caramel]");
    } else if (x <= 142) {
      foal.pheno.mutations.push("[Marl]");
    }
  }

  foal.pheno.mutations = foal.pheno.mutations.filter(onlyUnique);
}

function sanitize() {
  // geno
  function genoFold(path) {
    let output;
    path.base = path.base.join("/");
    path.rarities = path.rarities.join("/");

    output = path.base;
    if (path.rarities.length !== 0) {
      output += " + " + path.rarities;
    }
    return output;
  }

  if (foal.geno.main.base.length !== 0) {
    foal.geno.main.final = genoFold(foal.geno.main);
    if (foal.geno.chimera.base.length !== 0) {
      foal.geno.chimera.final = genoFold(foal.geno.chimera);
    }

    foal.geno.final = foal.geno.main.final;
    if (typeof foal.geno.chimera.final === "string") {
      foal.geno.final += " // " + foal.geno.chimera.final;
    }
  } else {
    foal.geno = "n/a";
  }

  // pheno
  function phenoFold(path) {
    let output;

    output = path.base.filter(Boolean).join(" ");

    path.rarities = path.rarities.filter(Boolean);
    if (path.rarities.length !== 0) {
      path.rarities = path.rarities
        .join(", ")
        .replace(/(,\s)(?!.*\1)/, " and ");
      output += " with " + path.rarities;
    }
    path.carries = path.carries.filter(Boolean);
    if (path.carries.length !== 0) {
      path.carries =
        "(" +
        capitalizeArr(path.carries)
          .join(", ")
          .replace(/(,\s)(?!.*\1)/, " and ") +
        " carrier)";
      output += " " + path.carries;
    }

    return output.capitalizeStr();
  }

  if (foal.pheno.main.base.length !== 0) {
    let main = foal.pheno.main;
    let chimera = foal.pheno.chimera;
    // console.log(main, chimera);

    main.final = phenoFold(main);
    chimera.final = phenoFold(chimera);
    // console.log(main, chimera);

    foal.pheno.final = main.final;
    if (chimera.final.length !== 0) {
      foal.pheno.final += " // " + chimera.final;
    }
    if (foal.pheno.mutations.length !== 0) {
      foal.pheno.final += " " + foal.pheno.mutations.join(" ");
    }
  } else {
    foal.pheno.final = "n/a";
  }

  // stats
  if (foal.stats.length !== 0) {
  } else {
    foal.stats = "n/a";
  }

  // heatlh
  if (foal.health.length !== 0) {
    foal.health = foal.health.filter(onlyUnique);
    foal.health = capitalizeArr(foal.health);
  } else {
    foal.health = "n/a";
  }

  // gender
  if (foal.gender !== "") {
    foal.gender = foal.gender.capitalizeStr();
  } else {
    foal.gender = "n/a";
  }

  // type
  if (foal.type !== "") {
    foal.type = foal.type.capitalizeStr();
  } else {
    foal.type = "n/a";
  }
}

function outputFoal(counter) {
  // console.log(counter);
  let id = "foalOutput" + counter;

  foalSetup();
  rollStats();
  rollGender();
  rollType();
  rollInbred();
  rollCoat(foal.geno.main);
  readPheno(foal.geno.main, foal.pheno.main);
  rollMutations();
  if (foal.pheno.mutations.indexOf("[Chimeric]") !== -1) {
    rollCoat(foal.geno.chimera);
    readPheno(foal.geno.chimera, foal.pheno.chimera);
  }
  sanitize();

  document.getElementById(id).innerText =
    "Gender: " +
    foal.gender +
    " " +
    foal.type +
    "\n" +
    "Physical Condition: " +
    foal.health +
    "\n" +
    "Genotype: " +
    foal.geno.final +
    "\n" +
    "Phenotype: " +
    foal.pheno.final +
    "\n" +
    "Stats: " +
    "SP " +
    foal.stats[0] +
    " | ST " +
    foal.stats[1] +
    " | SM " +
    foal.stats[2] +
    " | IN " +
    foal.stats[3] +
    " | AG " +
    foal.stats[4] +
    " | VI " +
    foal.stats[5] +
    "\n\n";
}

function resetOutput() {
  let ele = document.getElementsByClassName("foalOutput");
  for (let i = 0; i < ele.length; i++) {
    ele[i].innerText = "";
  }
}

function buttonPress() {
  resetOutput();

  window.foalNum = 1;
  twinsChance = 0;

  // set twinChance
  if (input.ringOfBlessings === true || input.tortoiseCompanion === true) {
    if (input.ringOfBlessings && input.rankRider === "rookie")
      twinsChance += 40;
    else if (input.ringOfBlessings) twinsChance += 30;
    else if (input.tortoiseCompanion) twinsChance += 20;
  }

  if (input.noviceTwins === true) {
    twinsChance += 10;
  } else if (input.rankHorse === "veteran") {
    twinsChance += 20;
  }

  if (input.charmOfFortune) twinsChance = 100;
  //   console.log(twinsChance);

  window.cloakTriggered = false;
  window.headpieceTriggered = false;
  window.charmOfHealthTriggered = false;
  window.ceremonialMaskTriggered = false;

  // set foalNum
  if (rng(100) <= twinsChance) {
    foalNum = 2;
  } else {
    foalNum = 1;
  }
  // console.log(foalNum);

  // check if breeding failed else output foal
  // TODO: remember to un-comment testing change
  let untrainedFailChance = 75;
  if (input.heirloomCurryComb) untrainedFailChance = 25;
  if (
    (input.rankRider === "untrained" && rng(100) <= untrainedFailChance) ||
    (input.rankRider === "initiate" && rng(100) <= 25)
  ) {
    document.getElementById("foalOutput1").innerHTML = "Breeding Failed\n\n";
  } else {
    for (let i = 1; i <= foalNum; i++) {
      outputFoal(i);
    }
  }
}
