const dhoni = {
  "full Name": "Mahendra Singh Dhoni",
  age: 39,
  roleWicketkeeper: "true",
  team: "Chennai Super Kings",
  statistics: {
    matches: 204,
    runs: 4632,
    average: 40.99,
    strikeRate: 135.2,
  },
  retire: function () {
    return `${this["full Name"]} is retired from international cricket in 2020.`;
  },
};
console.log(dhoni["full Name"]);
console.log(dhoni.statistics.runs);
console.log(dhoni.team);
console.log(dhoni.retire());
