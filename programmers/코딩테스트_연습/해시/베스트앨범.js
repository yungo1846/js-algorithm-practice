function solution(genres, plays) {
  const db = {};
  genres.forEach((genre, index) => {
    if (!(genre in db)) {
      db[genre] = [[index, plays[index]]];
    } else {
      db[genre].push([index, plays[index]]);
    }
  });
  const totalPlaysOnGenre = Object.entries(db).map(([key, values]) => [
    key,
    values.reduce((accumulator, [index, plays]) => accumulator + plays, 0),
  ]);
  const sortedTotalPlaysOnGenre = totalPlaysOnGenre.sort((a, b) => b[1] - a[1]);
  const result = [];
  sortedTotalPlaysOnGenre.forEach(([key, totalPlays]) => {
    const genrePlayList = db[key];
    const sortedGenrePlayList = genrePlayList.sort((a, b) => {
      if (b[1] === a[1]) {
        return a[1][0] - b[1][0];
      }
      return b[1] - a[1];
    });
    if (genrePlayList.length === 1) {
      result.push(sortedGenrePlayList[0][0]);
    } else {
      result.push(sortedGenrePlayList[0][0]);
      result.push(sortedGenrePlayList[1][0]);
    }
  });
  return result;
}

const genres = ["classic", "classic", "classic", "pop"];
const plays = [500, 150, 800, 2500];
const rightAnswer = [4, 1, 3, 0];

console.log(solution(genres, plays));
