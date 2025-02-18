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

const pAequorFactory = (n, arr) => {
  return {
    specimenNum: n,
    dna: mockUpStrand(),
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      const currentBase = this.dna[randomIndex];

      let newBase = returnRandBase();
      // If the new base is the same as the current base, generate a new one
      while (newBase === currentBase) {
        newBase = returnRandBase();
      }
      // Update the DNA array by directly assigning the new base at the random index
      this.dna[randomIndex] = newBase;

      return this.dna;
    },
  };
};

// TestTask4
const specimen1 = pAequorFactory(1);
console.log("DNA:", specimen1.dna); // Original strand

const mutatedDNA = specimen1.mutate();
console.log("Mutation:", mutatedDNA); // Strand with one mutated base
