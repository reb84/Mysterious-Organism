// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// console.log(mockUpStrand()); //will return DNA strand with 15 bases

const pAequorFactory = (num, baseArr) => {
  return {
    specimenNum: num,
    dna: mockUpStrand(),
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      const originalBase = this.dna[randomIndex];
      while (this.dna[randomIndex] === originalBase) {
        this.dna[randomIndex] = returnRandBase();
      }
      return this.dna;
    }, //mutate
    compareDNA(pAequor) {
      let common = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          common++;
        }
      }
      const percentage = (common / this.dna.length) * 100;
      console.log(
        `Specimen#${this.specimenNum} and Specimen#${
          pAequor.specimenNum
        } have ${Math.floor(percentage)}% DNA in common`
      );
    }, //compare
    willLikelySurvive() {
      let cgNum = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          cgNum++;
        }
      }
      return cgNum / this.dna.length >= 0.6;
    }, //survival
  };
};

// TestTask3
function testPaequorFactory() {
  const test1 = pAequorFactory(1, mockUpStrand());
  const test2 = pAequorFactory(2, mockUpStrand());
  console.log(test1);
  console.log(test2);
}
//testPaequorFactory();

//TestTask4
function testMutate() {
  const test1 = pAequorFactory(1, mockUpStrand());
  console.log("Original : " + test1.dna.join(""));
  test1.mutate();
  console.log("Mutated : " + test1.dna.join(""));
}
//testMutate();

//TestTask5
function testCompareDNA() {
  const test1 = pAequorFactory(1, mockUpStrand());
  const test2 = pAequorFactory(2, mockUpStrand());
  console.log("Spec1: " + test1.dna.join(""));
  console.log("Spec2: " + test2.dna.join(""));
  test1.compareDNA(test2);
}
//testCompareDNA();

//TestTask6
function testSurvival() {
  const test1 = pAequorFactory(1, mockUpStrand());
  console.log(test1.dna.join(""));
  console.log(test1.willLikelySurvive());
}
testSurvival();
