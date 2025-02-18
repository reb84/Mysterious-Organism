// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// console.log(mockUpStrand()); //will return DNA strand with 15 bases

const pAequorFactory = (n, arr) => {
  return {
    specimenNum: n,
    dna: mockUpStrand(),
  };
};

console.log(pAequorFactory(1, mockUpStrand())); //returns '1' and dna strand from mockUpStrand
