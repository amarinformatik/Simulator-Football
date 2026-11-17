const countryTeams = [
  { name: "United States", flag: "🇺🇸", strength: 82 },
  { name: "Mexico", flag: "🇲🇽", strength: 80 },
  { name: "Canada", flag: "🇨🇦", strength: 78 },
  { name: "Argentina", flag: "🇦🇷", strength: 94 },
  { name: "Brazil", flag: "🇧🇷", strength: 92 },
  { name: "Uruguay", flag: "🇺🇾", strength: 87 },
  { name: "Colombia", flag: "🇨🇴", strength: 85 },
  { name: "Ecuador", flag: "🇪🇨", strength: 82 },
  { name: "Paraguay", flag: "🇵🇾", strength: 78 },
  { name: "Chile", flag: "🇨🇱", strength: 77 },
  { name: "England", flag: "🏴", strength: 92 },
  { name: "France", flag: "🇫🇷", strength: 94 },
  { name: "Spain", flag: "🇪🇸", strength: 92 },
  { name: "Germany", flag: "🇩🇪", strength: 89 },
  { name: "Portugal", flag: "🇵🇹", strength: 90 },
  { name: "Netherlands", flag: "🇳🇱", strength: 88 },
  { name: "Belgium", flag: "🇧🇪", strength: 86 },
  { name: "Croatia", flag: "🇭🇷", strength: 85 },
  { name: "Italy", flag: "🇮🇹", strength: 88 },
  { name: "Switzerland", flag: "🇨🇭", strength: 82 },
  { name: "Denmark", flag: "🇩🇰", strength: 81 },
  { name: "Austria", flag: "🇦🇹", strength: 80 },
  { name: "Norway", flag: "🇳🇴", strength: 84 },
  { name: "Poland", flag: "🇵🇱", strength: 80 },
  { name: "Türkiye", flag: "🇹🇷", strength: 82 },
  { name: "Ukraine", flag: "🇺🇦", strength: 79 },
  { name: "Serbia", flag: "🇷🇸", strength: 80 },
  { name: "Scotland", flag: "🏴", strength: 77 },
  { name: "Japan", flag: "🇯🇵", strength: 84 },
  { name: "South Korea", flag: "🇰🇷", strength: 82 },
  { name: "Australia", flag: "🇦🇺", strength: 79 },
  { name: "Iran", flag: "🇮🇷", strength: 80 },
  { name: "Saudi Arabia", flag: "🇸🇦", strength: 76 },
  { name: "Qatar", flag: "🇶🇦", strength: 74 },
  { name: "Iraq", flag: "🇮🇶", strength: 73 },
  { name: "Morocco", flag: "🇲🇦", strength: 88 },
  { name: "Senegal", flag: "🇸🇳", strength: 85 },
  { name: "Egypt", flag: "🇪🇬", strength: 82 },
  { name: "Algeria", flag: "🇩🇿", strength: 82 },
  { name: "Ivory Coast", flag: "🇨🇮", strength: 83 },
  { name: "Ghana", flag: "🇬🇭", strength: 79 },
  { name: "Cameroon", flag: "🇨🇲", strength: 78 },
  { name: "Tunisia", flag: "🇹🇳", strength: 76 },
  { name: "South Africa", flag: "🇿🇦", strength: 77 },
  { name: "New Zealand", flag: "🇳🇿", strength: 70 },
  { name: "Costa Rica", flag: "🇨🇷", strength: 76 },
  { name: "Panama", flag: "🇵🇦", strength: 75 },
  { name: "Jamaica", flag: "🇯🇲", strength: 74 },
  { name: "DR Congo", flag: "🇨🇩", strength: 78 }
];

const clubTeams = [
  { name: "Real Madrid", strength: 94, short: "RMA", color: "#f4f1e8", trim: "#d9b84f" },
  { name: "Manchester City", strength: 93, short: "MCI", color: "#72c9e8", trim: "#ffffff" },
  { name: "Bayern Munich", strength: 92, short: "BAY", color: "#d62738", trim: "#ffffff" },
  { name: "Paris Saint-Germain", strength: 91, short: "PSG", color: "#173d78", trim: "#e83c52" },
  { name: "Liverpool", strength: 91, short: "LIV", color: "#c8102e", trim: "#ffffff" },
  { name: "Arsenal", strength: 90, short: "ARS", color: "#cf1734", trim: "#ffffff" },
  { name: "Barcelona", strength: 90, short: "BAR", color: "#183c77", trim: "#dc3145" },
  { name: "Inter Milan", strength: 89, short: "INT", color: "#133b83", trim: "#ffffff" },
  { name: "Borussia Dortmund", strength: 87, short: "BVB", color: "#f6d500", trim: "#171717" },
  { name: "Atletico Madrid", strength: 87, short: "ATM", color: "#d5233c", trim: "#ffffff" },
  { name: "AC Milan", strength: 86, short: "MIL", color: "#cf2037", trim: "#171717" },
  { name: "Juventus", strength: 86, short: "JUV", color: "#171717", trim: "#ffffff" },
  { name: "RB Leipzig", strength: 85, short: "RBL", color: "#d82b3d", trim: "#ffffff" },
  { name: "Napoli", strength: 85, short: "NAP", color: "#40a9df", trim: "#ffffff" },
  { name: "Benfica", strength: 84, short: "BEN", color: "#d32635", trim: "#ffffff" },
  { name: "Porto", strength: 84, short: "POR", color: "#1d438c", trim: "#ffffff" },
  { name: "Chelsea", strength: 83, short: "CHE", color: "#174a9d", trim: "#ffffff" },
  { name: "Tottenham Hotspur", strength: 83, short: "TOT", color: "#f7f7f7", trim: "#17386f" },
  { name: "Ajax", strength: 82, short: "AJX", color: "#f4f1e8", trim: "#d72a39" },
  { name: "Sporting CP", strength: 82, short: "SCP", color: "#23844c", trim: "#ffffff" },
  { name: "Bayer Leverkusen", strength: 82, short: "LEV", color: "#d32a37", trim: "#171717" },
  { name: "Sevilla", strength: 81, short: "SEV", color: "#f7f1e8", trim: "#d8283d" },
  { name: "Atalanta", strength: 81, short: "ATA", color: "#1b4185", trim: "#ffffff" },
  { name: "Shakhtar Donetsk", strength: 79, short: "SHK", color: "#f16a23", trim: "#171717" },
  { name: "Club Brugge", strength: 78, short: "BRU", color: "#17458f", trim: "#171717" },
  { name: "Celtic", strength: 77, short: "CEL", color: "#16884e", trim: "#ffffff" },
  { name: "Rangers", strength: 76, short: "RAN", color: "#17458f", trim: "#ffffff" },
  { name: "PSV Eindhoven", strength: 80, short: "PSV", color: "#d52535", trim: "#ffffff" },
  { name: "Feyenoord", strength: 79, short: "FEY", color: "#efefef", trim: "#d32335" },
  { name: "Red Bull Salzburg", strength: 78, short: "RBS", color: "#f0f0f0", trim: "#d72232" },
  { name: "Copenhagen", strength: 75, short: "CPH", color: "#ffffff", trim: "#173b78" },
  { name: "Young Boys", strength: 73, short: "YB", color: "#f6d529", trim: "#171717" }
];

const groupLetters = "ABCDEFGHIJKL".split("");
const playerNames = [
  "A. Silva", "M. Johnson", "L. Costa", "J. Smith", "D. Martin",
  "R. Wilson", "K. Brown", "T. Walker", "E. Clarke", "N. Adams",
  "C. Lewis", "F. Martin", "O. Hall", "B. Young", "H. King",
  "I. Scott", "P. Green", "S. Baker", "G. Turner", "W. Carter"
];

let currentMode = null;
let tournament = null;
let isSimulating = false;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(items) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = randomInt(0, i);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function getModeSettings(mode) {
  if (mode === "ucl") {
    return {
      teams: clubTeams,
      groupCount: 8,
      groupSize: 4,
      matchdays: 3,
      knockoutStart: "Round of 16",
      rounds: ["Round of 16", "Quarter-finals", "Semi-finals", "Final"],
      kicker: "EUROPEAN CLUB FOOTBALL",
      heading: "UEFA Champions League",
      description: "32 clubs · 8 groups · The road to the final",
      groupLabel: "32 CLUBS · 8 GROUPS"
    };
  }

  return {
    teams: countryTeams,
    groupCount: 12,
    groupSize: 4,
    matchdays: 3,
    knockoutStart: "Round of 32",
    rounds: ["Round of 32", "Round of 16", "Quarter-finals", "Semi-finals", "Final"],
    kicker: "CANADA · MEXICO · UNITED STATES",
    heading: "World Cup 2026",
    description: "48 countries · 12 groups · The road to glory",
    groupLabel: "48 COUNTRIES · 12 GROUPS"
  };
}

function createTournament(mode) {
  const settings = getModeSettings(mode);
  const draw = shuffle(settings.teams);

  return {
    mode,
    settings,
    groups: groupLetters.slice(0, settings.groupCount).map((letter, index) => ({
      letter,
      teams: draw.slice(
        index * settings.groupSize,
        index * settings.groupSize + settings.groupSize
      ),
      matches: []
    })),
    selectedTeam: null,
    matchday: 0,
    stage: "groups",
    knockoutRounds: [],
    message: "Choose a team to begin its tournament journey."
  };
}

function showModeMenu() {
  currentMode = null;
  tournament = null;

  document.getElementById("mode-view").classList.remove("hidden");
  document.getElementById("tournament-view").classList.add("hidden");
  document.getElementById("choose-mode-button").classList.add("hidden");
  document.getElementById("new-draw-button").classList.add("hidden");
}

function startMode(mode) {
  currentMode = mode;
  tournament = createTournament(mode);
  isSimulating = false;

  const settings = tournament.settings;
  document.getElementById("mode-view").classList.add("hidden");
  document.getElementById("tournament-view").classList.remove("hidden");
  document.getElementById("choose-mode-button").classList.remove("hidden");
  document.getElementById("new-draw-button").classList.remove("hidden");

  document.getElementById("mode-kicker").textContent = settings.kicker;
  document.getElementById("mode-heading").textContent = settings.heading;
  document.getElementById("mode-description").textContent =
    `${settings.description}. Choose a team and play through the tournament.`;
  document.getElementById("group-count-label").textContent =
    settings.groupLabel;
  document.getElementById("journey-tab").disabled = true;

  buildGroups();
  showView("groups");
}

function getTeamDisplayName(team) {
  return team.flag ? `${team.flag} ${team.name}` : team.name;
}

function createTeamBadge(team) {
  if (team.flag) {
    const flag = document.createElement("span");
    flag.className = "team-flag";
    flag.textContent = team.flag;
    flag.setAttribute("role", "img");
    flag.setAttribute("aria-label", `${team.name} flag`);
    return flag;
  }

  const badge = document.createElement("span");
  badge.className = "club-badge";
  badge.textContent = team.short;
  badge.style.setProperty("--badge-color", team.color);
  badge.style.setProperty("--badge-trim", team.trim);
  badge.setAttribute("role", "img");
  badge.setAttribute("aria-label", `${team.name} badge`);
  return badge;
}

function buildGroups() {
  const grid = document.getElementById("groups-grid");
  grid.replaceChildren();

  tournament.groups.forEach(group => {
    const card = document.createElement("article");
    card.className = "group-card";

    const heading = document.createElement("div");
    heading.className = "group-title";

    const letter = document.createElement("span");
    letter.className = "group-letter";
    letter.textContent = group.letter;

    const title = document.createElement("h3");
    title.textContent = `Group ${group.letter}`;

    heading.append(letter, title);
    card.appendChild(heading);

    group.teams.forEach(team => {
      const button = document.createElement("button");
      button.className = "team-pick";
      button.type = "button";
      button.setAttribute("aria-label", `Choose ${team.name}`);

      const name = document.createElement("span");
      name.className = "team-name";
      name.textContent = team.name;

      button.append(createTeamBadge(team), name);
      button.addEventListener("click", () => selectTeam(team.name));
      card.appendChild(button);
    });

    grid.appendChild(card);
  });
}

function selectTeam(teamName) {
  if (isSimulating) return;

  tournament.selectedTeam = teamName;
  tournament.message = `${teamName} are ready for their tournament campaign.`;

  document.getElementById("journey-tab").disabled = false;
  showView("journey");
  renderJourney();
}

function showView(view) {
  document.getElementById("groups-view").classList.toggle(
    "hidden",
    view !== "groups"
  );
  document.getElementById("journey-view").classList.toggle(
    "hidden",
    view !== "journey"
  );
  document.getElementById("groups-tab").classList.toggle(
    "active",
    view === "groups"
  );
  document.getElementById("journey-tab").classList.toggle(
    "active",
    view === "journey"
  );

  if (view === "journey" && tournament && tournament.selectedTeam) {
    renderJourney();
  }
}

function getSelectedGroup() {
  return tournament.groups.find(group =>
    group.teams.some(team => team.name === tournament.selectedTeam)
  );
}

function getMatchdayFixtures(group, matchday) {
  const [a, b, c, d] = group.teams;
  const schedules = [
    [[a, b], [c, d]],
    [[a, c], [b, d]],
    [[a, d], [b, c]]
  ];

  return schedules[matchday].map(([home, away]) => ({ home, away }));
}

function calculateStandings(group) {
  const rows = group.teams.map(team => ({
    team,
    played: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0
  }));

  const rowsByName = new Map(rows.map(row => [row.team.name, row]));

  group.matches.forEach(match => {
    const home = rowsByName.get(match.home.name);
    const away = rowsByName.get(match.away.name);

    if (!home || !away) return;

    home.played++;
    away.played++;
    home.goalsFor += match.homeGoals;
    home.goalsAgainst += match.awayGoals;
    away.goalsFor += match.awayGoals;
    away.goalsAgainst += match.homeGoals;

    if (match.homeGoals > match.awayGoals) {
      home.wins++;
      home.points += 3;
      away.losses++;
    } else if (match.homeGoals < match.awayGoals) {
      away.wins++;
      away.points += 3;
      home.losses++;
    } else {
      home.draws++;
      away.draws++;
      home.points++;
      away.points++;
    }
  });

  rows.forEach(row => {
    row.goalDifference = row.goalsFor - row.goalsAgainst;
  });

  return rows.sort((a, b) =>
    b.points - a.points ||
    b.goalDifference - a.goalDifference ||
    b.goalsFor - a.goalsFor ||
    a.team.name.localeCompare(b.team.name)
  );
}

function makeCell(value) {
  const td = document.createElement("td");
  td.textContent = value;
  return td;
}

function renderGroupTable(group) {
  const wrapper = document.createElement("div");
  wrapper.className = "table-wrap";

  const table = document.createElement("table");
  table.className = "standings-table";

  const thead = document.createElement("thead");
  const header = document.createElement("tr");

  ["Pos", "Team", "P", "W", "D", "L", "GF", "GA", "GD", "Pts"]
    .forEach(label => {
      const th = document.createElement("th");
      th.textContent = label;
      header.appendChild(th);
    });

  thead.appendChild(header);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  calculateStandings(group).forEach((row, index) => {
    const tr = document.createElement("tr");

    if (row.team.name === tournament.selectedTeam) {
      tr.classList.add("user-row");
    }

    tr.appendChild(makeCell(index + 1));

    const teamCell = document.createElement("td");
    teamCell.className = "club-cell";
    teamCell.appendChild(createTeamBadge(row.team));

    const teamName = document.createElement("span");
    teamName.textContent = row.team.name;
    teamCell.appendChild(teamName);
    tr.appendChild(teamCell);

    [
      row.played,
      row.wins,
      row.draws,
      row.losses,
      row.goalsFor,
      row.goalsAgainst,
      row.goalDifference,
      row.points
    ].forEach(value => tr.appendChild(makeCell(value)));

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  wrapper.appendChild(table);
  return wrapper;
}

function getPlayedMatch(group, matchday, homeName) {
  return group.matches.find(match =>
    match.matchday === matchday && match.home.name === homeName
  );
}

function renderFixtures(group) {
  const container = document.getElementById("group-fixtures");
  container.replaceChildren();

  for (let matchday = 0; matchday < tournament.settings.matchdays; matchday++) {
    const block = document.createElement("div");
    block.className = "fixture-matchday";

    const heading = document.createElement("h4");
    heading.textContent = `Matchday ${matchday + 1}`;
    block.appendChild(heading);

    getMatchdayFixtures(group, matchday).forEach(fixture => {
      const result = getPlayedMatch(group, matchday, fixture.home.name);
      const row = document.createElement("div");
      row.className = "fixture-row";

      if (
        fixture.home.name === tournament.selectedTeam ||
        fixture.away.name === tournament.selectedTeam
      ) {
        row.classList.add("user-fixture");
      }

      const teamsRow = document.createElement("div");
      teamsRow.className = "fixture-clubs";
      teamsRow.appendChild(createTeamBadge(fixture.home));

      const homeName = document.createElement("span");
      homeName.textContent = fixture.home.name;

      const versus = document.createElement("span");
      versus.textContent = "vs";

      const awayName = document.createElement("span");
      awayName.textContent = fixture.away.name;

      teamsRow.append(
        homeName,
        versus,
        awayName,
        createTeamBadge(fixture.away)
      );

      const score = document.createElement("span");
      score.className = "fixture-score";
      score.textContent = result
        ? `${result.homeGoals} - ${result.awayGoals}`
        : "—";

      row.append(teamsRow, score);
      block.appendChild(row);
    });

    container.appendChild(block);
  }
}

function renderSelectedGroup() {
  const group = getSelectedGroup();
  if (!group) return;

  document.getElementById("selected-group-title").textContent =
    `Group ${group.letter}`;

  const table = document.getElementById("selected-group-table");
  table.replaceChildren(renderGroupTable(group));
  renderFixtures(group);
}

function randomGoals(team, opponent, homeAdvantage = false) {
  const expectedGoals = Math.max(
    0.25,
    Math.min(
      2.8,
      1.05 + (team.strength - opponent.strength) / 22 +
        (homeAdvantage ? 0.16 : 0)
    )
  );

  const limit = Math.exp(-expectedGoals);
  let product = 1;
  let goals = 0;

  do {
    goals++;
    product *= Math.random();
  } while (product > limit);

  return Math.min(goals - 1, 5);
}

function simulateScore(home, away) {
  return {
    homeGoals: randomGoals(home, away, true),
    awayGoals: randomGoals(away, home, false)
  };
}

function randomPlayerName() {
  return playerNames[randomInt(0, playerNames.length - 1)];
}

function createCommentary(match) {
  const events = [
    { minute: 1, type: "normal", text: "Kick-off! The match is underway." }
  ];

  for (let i = 0; i < match.homeGoals; i++) {
    const scorer = randomPlayerName();
    const assist = Math.random() < 0.65
      ? ` Assist by ${randomPlayerName()}.`
      : "";

    events.push({
      minute: randomInt(4, 89),
      type: "goal",
      text: `GOAL! ${scorer} scores for ${match.home.name}!${assist}`
    });
  }

  for (let i = 0; i < match.awayGoals; i++) {
    const scorer = randomPlayerName();
    const assist = Math.random() < 0.65
      ? ` Assist by ${randomPlayerName()}.`
      : "";

    events.push({
      minute: randomInt(4, 89),
      type: "goal",
      text: `GOAL! ${scorer} scores for ${match.away.name}!${assist}`
    });
  }

  const generalEvents = [
    "A promising attack is stopped by a well-timed tackle.",
    "The goalkeeper makes a sharp save.",
    "A shot from distance flies just over the crossbar.",
    "A dangerous cross is cleared by the defence.",
    "The referee awards a free kick in a useful position.",
    "A corner is swung into the box, but the defence clears.",
    "The team keeps possession and looks for an opening.",
    "A quick counter-attack creates space down the wing."
  ];

  for (let i = 0; i < 6; i++) {
    events.push({
      minute: randomInt(5, 87),
      type: "normal",
      text: generalEvents[randomInt(0, generalEvents.length - 1)]
    });
  }

  if (Math.random() < 0.72) {
    events.push({
      minute: randomInt(15, 82),
      type: "yellow",
      text: `Yellow card for ${randomPlayerName()}.`
    });
  }

  if (Math.random() < 0.09) {
    events.push({
      minute: randomInt(35, 85),
      type: "red",
      text: `Red card! ${randomPlayerName()} is sent off.`
    });
  }

  events.push(
    { minute: 45, type: "normal", text: "Half-time." },
    { minute: 46, type: "normal", text: "The second half begins." },
    { minute: 90, type: "normal", text: "Full-time!" }
  );

  return events.sort((a, b) => a.minute - b.minute);
}

function showLiveMatch(match) {
  const container = document.getElementById("live-match");
  container.replaceChildren();

  const score = document.createElement("div");
  score.className = "live-score";

  const home = document.createElement("div");
  home.className = "live-team";
  home.appendChild(createTeamBadge(match.home));

  const homeName = document.createElement("span");
  homeName.textContent = match.home.name;
  home.appendChild(homeName);

  const scoreText = document.createElement("strong");
  scoreText.textContent = `${match.homeGoals} - ${match.awayGoals}`;

  const away = document.createElement("div");
  away.className = "live-team";

  const awayName = document.createElement("span");
  awayName.textContent = match.away.name;
  away.append(awayName, createTeamBadge(match.away));

  score.append(home, scoreText, away);
  container.appendChild(score);

  const list = document.createElement("ul");
  list.className = "commentary-list";
  container.appendChild(list);

  const events = createCommentary(match);

  return new Promise(resolve => {
    let index = 0;

    function showNextEvent() {
      const event = events[index];
      const item = document.createElement("li");

      if (event.type === "goal") item.classList.add("goal-event");
      if (event.type === "yellow") item.classList.add("yellow-event");
      if (event.type === "red") item.classList.add("red-event");

      item.textContent = `${event.minute}' — ${event.text}`;
      list.appendChild(item);
      list.scrollTop = list.scrollHeight;

      index++;

      if (index < events.length) {
        window.setTimeout(showNextEvent, 150);
      } else {
        resolve();
      }
    }

    showNextEvent();
  });
}

function renderStage() {
  const card = document.getElementById("journey-stage-card");
  card.replaceChildren();

  const info = document.createElement("div");
  const label = document.createElement("p");
  label.className = "eyebrow";

  const title = document.createElement("h3");
  title.className = "stage-name";

  const detail = document.createElement("p");
  detail.className = "stage-detail";

  const button = document.createElement("button");
  button.className = "primary-button";
  button.type = "button";

  if (tournament.stage === "groups") {
    label.textContent = "GROUP STAGE";
    title.textContent =
      `Matchday ${Math.min(tournament.matchday + 1, 3)} of 3`;
    detail.textContent =
      "Your team's match and every other group match will be simulated.";
    button.textContent = `Simulate Matchday ${tournament.matchday + 1}`;
    button.disabled = isSimulating || tournament.matchday >= 3;
    button.addEventListener("click", simulateGroupMatchday);
    info.append(label, title, detail);
    card.append(info, button);
    return;
  }

  if (tournament.stage === "knockout") {
    const round = tournament.knockoutRounds[
      tournament.knockoutRounds.length - 1
    ];

    label.textContent = "KNOCKOUT STAGE";
    title.textContent = round.name;
    detail.textContent =
      "All matches in this round are played. Draws are decided by penalties.";
    button.textContent = `Play ${round.name}`;
    button.disabled = isSimulating;
    button.addEventListener("click", simulateKnockoutRound);
    info.append(label, title, detail);
    card.append(info, button);
    return;
  }

  label.textContent =
    tournament.stage === "champion" ? "CHAMPIONS" : "TOURNAMENT COMPLETE";
  title.textContent =
    tournament.stage === "champion" ? "Tournament winners!" : "Journey complete";
  detail.textContent = tournament.message;
  info.append(label, title, detail);
  card.appendChild(info);
}

function renderKnockoutBracket() {
  const card = document.getElementById("knockout-card");
  const bracket = document.getElementById("knockout-bracket");
  bracket.replaceChildren();

  if (tournament.knockoutRounds.length === 0) {
    card.classList.add("hidden");
    return;
  }

  card.classList.remove("hidden");

  tournament.knockoutRounds.forEach(round => {
    const column = document.createElement("section");
    column.className = "knockout-round";

    const heading = document.createElement("h4");
    heading.textContent = round.name;
    column.appendChild(heading);

    round.matches.forEach(match => {
      const tie = document.createElement("div");
      tie.className = "tie-card";

      [match.home, match.away].forEach((team, index) => {
        const row = document.createElement("div");
        row.className = "tie-team";

        if (match.winner && match.winner.name === team.name) {
          row.classList.add("winner");
        }

        row.appendChild(createTeamBadge(team));

        const name = document.createElement("span");
        const goals = index === 0 ? match.homeGoals : match.awayGoals;
        name.textContent = match.winner
          ? `${team.name} ${goals}`
          : team.name;

        row.appendChild(name);
        tie.appendChild(row);
      });

      if (match.wentToPenalties && match.winner) {
        const note = document.createElement("small");
        note.textContent = `Won on penalties: ${match.winner.name}`;
        tie.appendChild(note);
      }

      column.appendChild(tie);
    });

    bracket.appendChild(column);
  });
}

function renderJourney() {
  if (!tournament || !tournament.selectedTeam) return;

  document.getElementById("journey-title").textContent =
    getTeamDisplayName(
      tournament.groups
        .flatMap(group => group.teams)
        .find(team => team.name === tournament.selectedTeam)
    );

  document.getElementById("journey-message").textContent =
    tournament.message;
  document.getElementById("match-centre-message").textContent =
    tournament.message;

  const group = getSelectedGroup();

  if (group) {
    document.getElementById("selected-group-title").textContent =
      `Group ${group.letter}`;

    const table = document.getElementById("selected-group-table");
    table.replaceChildren(renderGroupTable(group));
    renderFixtures(group);
  }

  renderStage();
  renderKnockoutBracket();
}

function createKnockoutMatches() {
  const qualifiers = [];

  if (currentMode === "ucl") {
    tournament.groups.forEach(group => {
      const table = calculateStandings(group);
      qualifiers.push(table[0].team, table[1].team);
    });
  } else {
    const thirdPlaceTeams = [];

    tournament.groups.forEach(group => {
      const table = calculateStandings(group);
      qualifiers.push(table[0].team, table[1].team);
      thirdPlaceTeams.push(table[2]);
    });

    thirdPlaceTeams.sort((a, b) =>
      b.points - a.points ||
      b.goalDifference - a.goalDifference ||
      b.goalsFor - a.goalsFor
    );

    thirdPlaceTeams.slice(0, 8).forEach(row => {
      qualifiers.push(row.team);
    });
  }

  const shuffled = shuffle(qualifiers);
  const matches = [];

  for (let i = 0; i < shuffled.length; i += 2) {
    matches.push({
      home: shuffled[i],
      away: shuffled[i + 1],
      homeGoals: null,
      awayGoals: null,
      winner: null,
      wentToPenalties: false
    });
  }

  return matches;
}

function beginKnockouts() {
  const firstRound = currentMode === "ucl"
    ? "Round of 16"
    : "Round of 32";

  tournament.knockoutRounds = [{
    name: firstRound,
    matches: createKnockoutMatches()
  }];

  const qualified = tournament.knockoutRounds[0].matches.some(match =>
    match.home.name === tournament.selectedTeam ||
    match.away.name === tournament.selectedTeam
  );

  if (qualified) {
    tournament.stage = "knockout";
    tournament.message =
      `${tournament.selectedTeam} qualified for the ${firstRound}!`;
  } else {
    tournament.stage = "eliminated";
    tournament.message =
      `${tournament.selectedTeam} did not qualify from the group stage.`;
  }
}

async function simulateGroupMatchday() {
  if (
    isSimulating ||
    tournament.stage !== "groups" ||
    tournament.matchday >= 3
  ) {
    return;
  }

  isSimulating = true;
  renderStage();

  const matchday = tournament.matchday;
  const selectedGroup = getSelectedGroup();
  let selectedMatch = null;

  document.getElementById("match-centre-message").textContent =
    `Simulating matchday ${matchday + 1}. All group matches are being played.`;

  tournament.groups.forEach(group => {
    getMatchdayFixtures(group, matchday).forEach(fixture => {
      const score = simulateScore(fixture.home, fixture.away);
      const match = {
        home: fixture.home,
        away: fixture.away,
        homeGoals: score.homeGoals,
        awayGoals: score.awayGoals,
        matchday
      };

      group.matches.push(match);

      if (
        group.letter === selectedGroup.letter &&
        (fixture.home.name === tournament.selectedTeam ||
          fixture.away.name === tournament.selectedTeam)
      ) {
        selectedMatch = match;
      }
    });
  });

  if (selectedMatch) {
    await showLiveMatch(selectedMatch);
  }

  tournament.matchday++;

  if (tournament.matchday === 3) {
    beginKnockouts();
  } else {
    tournament.message =
      `Matchday ${tournament.matchday} is complete. ` +
      "The group table and all match results have been updated.";
  }

  isSimulating = false;
  renderJourney();
}

function pickKnockoutWinner(match) {
  if (match.homeGoals > match.awayGoals) return match.home;
  if (match.awayGoals > match.homeGoals) return match.away;

  match.wentToPenalties = true;
  return Math.random() < 0.5 ? match.home : match.away;
}

async function simulateKnockoutRound() {
  if (isSimulating || tournament.stage !== "knockout") return;

  const round = tournament.knockoutRounds[
    tournament.knockoutRounds.length - 1
  ];

  if (!round || round.matches.every(match => match.winner)) return;

  isSimulating = true;
  renderStage();

  let selectedMatch = null;

  round.matches.forEach(match => {
    const score = simulateScore(match.home, match.away);
    match.homeGoals = score.homeGoals;
    match.awayGoals = score.awayGoals;
    match.winner = pickKnockoutWinner(match);

    if (
      match.home.name === tournament.selectedTeam ||
      match.away.name === tournament.selectedTeam
    ) {
      selectedMatch = match;
    }
  });

  if (selectedMatch) {
    await showLiveMatch(selectedMatch);
  }

  renderKnockoutBracket();

  const playerAdvanced =
    selectedMatch &&
    selectedMatch.winner.name === tournament.selectedTeam;

  if (!playerAdvanced) {
    tournament.stage = "eliminated";
    tournament.message =
      `${tournament.selectedTeam} are out of the ${round.name}.`;
  } else if (round.name === "Final") {
    tournament.stage = "champion";
    tournament.message =
      `${tournament.selectedTeam} won the ${tournament.settings.heading}!`;
  } else {
    const winners = shuffle(round.matches.map(match => match.winner));
    const nextMatches = [];

    for (let i = 0; i < winners.length; i += 2) {
      nextMatches.push({
        home: winners[i],
        away: winners[i + 1],
        homeGoals: null,
        awayGoals: null,
        winner: null,
        wentToPenalties: false
      });
    }

    const nextRoundIndex = tournament.knockoutRounds.length;

    tournament.knockoutRounds.push({
      name: tournament.settings.rounds[nextRoundIndex],
      matches: nextMatches
    });

    tournament.message =
      `${tournament.selectedTeam} advanced to ` +
      `${tournament.settings.rounds[nextRoundIndex]}!`;
  }

  isSimulating = false;
  renderJourney();
}

function startNewDraw() {
  if (!currentMode) return;
  startMode(currentMode);
}

function revealApp() {
  document.getElementById("loading-screen").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
}

function startApp() {
  document.querySelectorAll(".mode-card").forEach(button => {
    button.addEventListener("click", () => {
      startMode(button.dataset.mode);
    });
  });

  document.getElementById("groups-tab").addEventListener("click", () => {
    showView("groups");
  });

  document.getElementById("journey-tab").addEventListener("click", () => {
    if (tournament && tournament.selectedTeam) {
      showView("journey");
    }
  });

  document
    .getElementById("back-to-groups-button")
    .addEventListener("click", () => showView("groups"));

  const dialog = document.getElementById("new-draw-dialog");

  document.getElementById("new-draw-button").addEventListener("click", () => {
    document.getElementById("dialog-title").textContent = "Start a new draw?";
    document.getElementById("dialog-message").textContent =
      "This replaces the current tournament with a new randomized draw.";
    document.getElementById("confirm-draw-button").textContent =
      "Start New Draw";
    dialog.showModal();
  });

  document.getElementById("choose-mode-button").addEventListener("click", () => {
    document.getElementById("dialog-title").textContent = "Choose another mode?";
    document.getElementById("dialog-message").textContent =
      "Your current tournament will be cleared when you choose a new mode.";
    document.getElementById("confirm-draw-button").textContent =
      "Choose Mode";
    dialog.showModal();
  });

  document.getElementById("cancel-draw-button").addEventListener("click", () => {
    dialog.close();
  });

  document.getElementById("confirm-draw-button").addEventListener("click", () => {
    dialog.close();

    const title = document.getElementById("dialog-title").textContent;
    if (title === "Choose another mode?") {
      showModeMenu();
    } else {
      startNewDraw();
    }
  });

  window.setTimeout(revealApp, 1600);
}

try {
  startApp();
} catch (error) {
  console.error("Tournament simulator startup error:", error);
  window.setTimeout(revealApp, 1800);
}

window.setTimeout(revealApp, 3500);