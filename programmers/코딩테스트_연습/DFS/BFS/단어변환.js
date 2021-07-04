const isOneLetterDifference = (word, targetWord) => {
  let diffCount = 0;
  word.split("").forEach((letter, index) => {
    if (word[index] !== targetWord[index]) {
      diffCount++;
    }
  });
  return diffCount === 1 ? true : false;
};

function solution(begin, target, words) {
  const newWords = [begin, ...words];
  const visited = Array(newWords.length).fill(false);
  const counts = Array(newWords.length).fill(0);
  const queue = [begin];
  visited[0] = true;
  while (queue.length !== 0) {
    const current = queue.shift();
    const currentIndex = newWords.indexOf(current);
    if (current === target) return counts[currentIndex];
    newWords.forEach((word, index) => {
      if (isOneLetterDifference(current, word) && !visited[index]) {
        queue.push(word);
        visited[index] = true;
        counts[index] = counts[currentIndex] + 1;
      }
    });
  }
  return 0;
}

const begin = "hit";
const target = "cog";
const words = ["hot", "dot", "dog", "lot", "log"];
const rightAnswer = 4;

console.log(solution(begin, target, words));
