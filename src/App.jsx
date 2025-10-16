import React, { useState, useEffect, useMemo } from 'react';

// --- Icon Components (SVGs) ---
const CrownIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M18 9.333a3.375 3.375 0 01-3.375 3.375S12 11.25 12 9.333s1.375-4.5 3.375-4.5S18 7.5 18 9.333zM6 9.333a3.375 3.375 0 01-3.375 3.375S0 11.25 0 9.333s1.375-4.5 3.375-4.5S6 7.5 6 9.333zM12 3a3 3 0 013 3c0 1.657-1.343 3-3 3s-3-1.343-3-3a3 3 0 013-3zm0 16.5a4.5 4.5 0 014.5-4.5h3a.75.75 0 010 1.5h-3a3 3 0 00-3 3v1.125a.75.75 0 01-1.5 0V19.5a3 3 0 00-3-3h-3a.75.75 0 010-1.5h3a4.5 4.5 0 014.5 4.5z" clipRule="evenodd" />
    </svg>
);
const TrophyIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M11.25 2.25c.53 0 1.006.22 1.357.585l1.5 1.5c.1.1.157.234.193.372a5.992 5.992 0 013.95 3.143 6.002 6.002 0 01-5.001 8.388 5.992 5.992 0 01-3.95-3.143 6.002 6.002 0 015.001-8.388c.28-.027.555-.052.83-.074a21.728 21.728 0 00-2.698-2.316 2.25 2.25 0 01-.193-.372l-1.5-1.5A2.25 2.25 0 0111.25 2.25zM12.86 13.94a4.5 4.5 0 10-5.72 0 4.5 4.5 0 005.72 0zM21.75 6.75a.75.75 0 00-1.5 0v.511a8.23 8.23 0 01-1.854 5.244 8.23 8.23 0 01-5.244 1.854H12a.75.75 0 000 1.5h1.26a8.25 8.25 0 015.244 1.854 8.23 8.23 0 011.854 5.244v.511a.75.75 0 001.5 0v-1.5a.75.75 0 00-.75-.75h-.35a6.75 6.75 0 00-6.44-6.242 1.5 1.5 0 01-1.42-1.42A6.75 6.75 0 0013.65 4.5h.35a.75.75 0 00.75-.75v-1.5zm-18 0a.75.75 0 011.5 0v.511a8.23 8.23 0 001.854 5.244 8.23 8.23 0 005.244 1.854H12a.75.75 0 010 1.5H9.74a8.25 8.25 0 00-5.244 1.854 8.23 8.23 0 00-1.854 5.244v.511a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75h.35A6.75 6.75 0 018.56 14.5a1.5 1.5 0 001.42-1.42A6.75 6.75 0 013.74 6.82h-.35a.75.75 0 01-.75-.75v-1.5z" clipRule="evenodd" />
  </svg>
);
const TrashIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.006a.75.75 0 01-.749.658h-7.5a.75.75 0 01-.749-.658L5.168 6.632l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.816 1.387 2.816 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.347-9zm5.456 0a.75.75 0 10-1.499.058l-.347 9a.75.75 0 101.5-.058l.347-9z" clipRule="evenodd" />
  </svg>
);
const PlusIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
  </svg>
);
const PaddleIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a10 10 0 0 0-4.47 18.26"></path>
        <path d="M12 22a10 10 0 0 1-4.47-18.26"></path>
        <line x1="2" y1="12" x2="22" y2="12"></line>
    </svg>
);

// --- Helper Functions ---
const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

const generateRotatingRounds = (players, courts) => {
    const shuffledPlayers = shuffleArray(players);
    const numPlayers = shuffledPlayers.length;
    if (numPlayers < 4) return [];

    const rounds = [];
    const pairings = [];
    for (let i = 0; i < numPlayers; i++) {
        for (let j = i + 1; j < numPlayers; j++) {
            pairings.push([shuffledPlayers[i], shuffledPlayers[j]]);
        }
    }

    let roundCount = 1;
    while (pairings.length > 0) {
        const roundMatches = [];
        const playersInRound = new Set();
        const resting = new Set(shuffledPlayers);
        
        for (let i = 0; i < pairings.length && roundMatches.length < courts; i++) {
            const pair1 = pairings[i];
            if (playersInRound.has(pair1[0]) || playersInRound.has(pair1[1])) continue;

            for (let j = i + 1; j < pairings.length; j++) {
                const pair2 = pairings[j];
                if (!playersInRound.has(pair2[0]) && !playersInRound.has(pair2[1]) && !pair1.includes(pair2[0]) && !pair1.includes(pair2[1])) {
                    roundMatches.push({ id: `m${roundCount}-${roundMatches.length + 1}`, team1: pair1, team2: pair2, score1: null, score2: null });
                    [...pair1, ...pair2].forEach(p => { playersInRound.add(p); resting.delete(p); });
                    pairings.splice(j, 1);
                    pairings.splice(i, 1);
                    i--; // Adjust index after splice
                    break;
                }
            }
        }
        if (roundMatches.length > 0) {
            rounds.push({ id: roundCount++, matches: roundMatches, resting: Array.from(resting) });
        } else {
            break; // No more matches can be formed
        }
    }
    return rounds;
};

const generateFixedRounds = (pairs, courts) => {
    const shuffledPairs = shuffleArray(pairs);
    const numPairs = shuffledPairs.length;
    if (numPairs < 2) return [];

    const rounds = [];
    const matchups = [];
    for (let i = 0; i < numPairs; i++) {
        for (let j = i + 1; j < numPairs; j++) {
            matchups.push([shuffledPairs[i], shuffledPairs[j]]);
        }
    }

    let roundCount = 1;
    while (matchups.length > 0) {
        const roundMatches = [];
        const pairsInRound = new Set();
        const restingPairs = new Set(shuffledPairs.map(p => p.name));

        for (let i = 0; i < matchups.length && roundMatches.length < courts; i++) {
            const [pair1, pair2] = matchups[i];
            if (!pairsInRound.has(pair1.id) && !pairsInRound.has(pair2.id)) {
                roundMatches.push({
                    id: `m${roundCount}-${roundMatches.length + 1}`,
                    team1: pair1.players,
                    team2: pair2.players,
                    pair1Id: pair1.id,
                    pair2Id: pair2.id,
                    score1: null,
                    score2: null
                });
                pairsInRound.add(pair1.id);
                pairsInRound.add(pair2.id);
                restingPairs.delete(pair1.name);
                restingPairs.delete(pair2.name);
                matchups.splice(i, 1);
                i--; // Adjust index
            }
        }

        if (roundMatches.length > 0) {
            rounds.push({ id: roundCount++, matches: roundMatches, resting: Array.from(restingPairs) });
        } else {
            break; // No more matches can be formed
        }
    }
    return rounds;
};

// --- Child Components ---
const SettingsScreen = ({ onStart }) => {
  const [playersList, setPlayersList] = useState([]);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [mode, setMode] = useState('rotating');
  const [courts, setCourts] = useState('1');
  const [error, setError] = useState('');
  const [pairs, setPairs] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [pairName, setPairName] = useState('');

  const handleAddPlayer = () => {
    const trimmedName = newPlayerName.trim();
    if (trimmedName && !playersList.includes(trimmedName)) {
      setPlayersList([...playersList, trimmedName]);
      setNewPlayerName('');
    }
  };

  const handlePlayerNameKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddPlayer();
    }
  };

  const handleDeletePlayer = (playerToDelete) => {
    setPlayersList(current => current.filter(p => p !== playerToDelete));
    // If a deleted player was in a pair, remove that pair
    setPairs(current => current.filter(p => !p.players.includes(playerToDelete)));
    setSelectedPlayers(current => current.filter(p => p !== playerToDelete));
  };

  const playersInPairs = useMemo(() => pairs.flatMap(p => p.players), [pairs]);
  const availablePlayers = useMemo(() => playersList.filter(p => !playersInPairs.includes(p)), [playersList, playersInPairs]);
  
  useEffect(() => { if (mode === 'rotating') { setPairs([]); setSelectedPlayers([]); setPairName(''); } }, [mode]);
  
  const handlePlayerSelect = (player) => { setSelectedPlayers(current => { if (current.includes(player)) { return current.filter(p => p !== player); } if (current.length < 2) { return [...current, player]; } return current; }); };
  const handleCreatePair = () => { if (selectedPlayers.length !== 2) return; const newPair = { id: `pair_${Date.now()}`, name: pairName.trim() || selectedPlayers.join(' y '), players: selectedPlayers }; setPairs([...pairs, newPair]); setSelectedPlayers([]); setPairName(''); };
  const handleDeletePair = (pairId) => { setPairs(current => current.filter(p => p.id !== pairId)); };
  const handleStart = () => { if (playersList.length < (mode === 'rotating' ? 6 : 4)) { setError(mode === 'rotating' ? 'Se necesitan al menos 6 jugadores.' : 'Se necesitan al menos 4 jugadores.'); return; } if (mode === 'fixed' && playersList.length % 2 !== 0) { setError('El modo "Parejas Fijas" requiere un número par de jugadores.'); return; } const numCourts = parseInt(courts, 10); if (isNaN(numCourts) || numCourts < 1) { setError('El número de canchas debe ser al menos 1.'); return; } if (mode === 'fixed') { if (availablePlayers.length > 0) { setError('Todos los jugadores deben ser asignados a una pareja.'); return; } if (pairs.length < 2) { setError('Se necesitan al menos 2 parejas para iniciar.'); return; } onStart({ players: playersList, mode, courts: numCourts, pairs }); } else { onStart({ players: playersList, mode, courts: numCourts, pairs: null }); } setError(''); };

    return (
    <div className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
      <div className="text-center mb-6">
        <PaddleIcon className="w-16 h-16 mx-auto text-cyan-400 -mt-16 bg-gray-800 rounded-full p-3 border-4 border-gray-700"/>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-4">6 Locos de Pádel Edgar</h1>
        <p className="text-cyan-200 mt-2">Organiza tus torneos de forma rápida y sencilla.</p>
      </div>
      {error && <div className="bg-red-500/80 text-white p-3 rounded-lg mb-4 text-center">{error}</div>}
      <div className="space-y-6">
        <div>
          <label htmlFor="playerNameInput" className="block text-sm font-medium text-cyan-200 mb-2">Añadir Jugador</label>
          <div className="flex gap-2">
            <input id="playerNameInput" type="text" value={newPlayerName} onChange={(e) => setNewPlayerName(e.target.value)} onKeyDown={handlePlayerNameKeyDown} className="flex-grow bg-gray-900/50 text-white rounded-lg p-3 border border-gray-600 focus:ring-2 focus:ring-cyan-500 transition duration-200" placeholder="Nombre del jugador"/>
            <button onClick={handleAddPlayer} className="bg-cyan-600 p-3 rounded-lg hover:bg-cyan-500 disabled:bg-gray-600 disabled:cursor-not-allowed flex-shrink-0"><PlusIcon className="w-6 h-6 text-white"/></button>
          </div>
          <div className="mt-4 space-y-2 max-h-48 overflow-y-auto pr-2">
            {playersList.map(player => (
              <div key={player} className="flex items-center justify-between bg-gray-800/70 p-2 rounded-lg animate-fade-in">
                <span className="text-white font-medium">{player}</span>
                <button onClick={() => handleDeletePlayer(player)} className="text-red-400 hover:text-red-300 p-1">
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-cyan-200 mb-2">Modalidad</label>
          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => setMode('rotating')} className={`p-4 rounded-lg text-center font-semibold transition-all duration-200 border-2 ${mode === 'rotating' ? 'bg-cyan-500 border-cyan-400 text-gray-900 shadow-lg' : 'bg-gray-700/50 border-gray-600 text-white hover:bg-gray-700'}`}>Parejas Rotativas</button>
            <button onClick={() => setMode('fixed')} className={`p-4 rounded-lg text-center font-semibold transition-all duration-200 border-2 ${mode === 'fixed' ? 'bg-cyan-500 border-cyan-400 text-gray-900 shadow-lg' : 'bg-gray-700/50 border-gray-600 text-white hover:bg-gray-700'}`}>Parejas Fijas</button>
          </div>
        </div>
        {mode === 'fixed' && (
          <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700 space-y-4">
            <h3 className="text-lg font-bold text-cyan-300">Formación de Parejas</h3>
            <div>
                <label className="block text-sm font-medium text-cyan-200 mb-2">Jugadores Disponibles (selecciona 2)</label>
                <div className="flex flex-wrap gap-2">
                    {availablePlayers.map(player => ( <button key={player} onClick={() => handlePlayerSelect(player)} className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${selectedPlayers.includes(player) ? 'bg-green-500 text-gray-900' : 'bg-gray-700 text-white hover:bg-gray-600'}`}>{player}</button>))}
                </div>
            </div>
            <div className="flex items-center gap-2">
              <input type="text" placeholder="Nombre de la pareja (opcional)" value={pairName} onChange={(e) => setPairName(e.target.value)} className="flex-grow bg-gray-800 text-white rounded-lg p-2 border border-gray-600 focus:ring-2 focus:ring-cyan-500" disabled={selectedPlayers.length !== 2}/>
              <button onClick={handleCreatePair} disabled={selectedPlayers.length !== 2} className="bg-cyan-600 p-2 rounded-lg hover:bg-cyan-500 disabled:bg-gray-600 disabled:cursor-not-allowed"><PlusIcon className="w-6 h-6 text-white"/></button>
            </div>
            <div>
              <h4 className="text-sm font-medium text-cyan-200 mb-2">Parejas Creadas</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                  {pairs.map(pair => (
                      <div key={pair.id} className="flex items-center justify-between bg-gray-800 p-2 rounded-lg">
                          <div className="min-w-0">
                              <p className="font-bold text-white break-words">{pair.name}</p>
                              <p className="text-sm text-gray-400 break-words">{pair.players.join(', ')}</p>
                          </div>
                          <button onClick={() => handleDeletePair(pair.id)} className="text-red-400 hover:text-red-300 p-1 flex-shrink-0 ml-2"><TrashIcon className="w-5 h-5" /></button>
                      </div>
                  ))}
              </div>
            </div>
          </div>
        )}
        <div>
          <label htmlFor="courts" className="block text-sm font-medium text-cyan-200 mb-2">Canchas Disponibles</label>
          <input id="courts" type="number" value={courts} onChange={(e) => setCourts(e.target.value)} min="1" className="w-full bg-gray-900/50 text-white rounded-lg p-3 border border-gray-600 focus:ring-2 focus:ring-cyan-500 transition duration-200"/>
        </div>
        <button onClick={handleStart} className="w-full bg-green-500 text-gray-900 font-bold py-3 rounded-lg text-lg hover:bg-green-400 transition transform hover:scale-105 shadow-xl">Generar Rondas</button>
      </div>
    </div>
  );
};

const Leaderboard = ({ scores }) => {
    const sortedScores = useMemo(() => Object.entries(scores).sort(([, a], [, b]) => b.gamesWon - a.gamesWon), [scores]);
    if (sortedScores.length === 0) { return <div className="text-center text-gray-400">Aún no hay resultados.</div>; }
    const leaderScore = sortedScores.length > 0 ? sortedScores[0][1].gamesWon : 0;
    return (
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
            <h2 className="text-2xl font-bold text-white text-center mb-4">Posiciones</h2>
            <div className="space-y-3">
                {sortedScores.map(([id, data], index) => {
                    const isLeader = data.gamesWon === leaderScore && leaderScore > 0;
                    return (
                        <div key={id} className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${isLeader ? 'bg-green-500/80 shadow-lg scale-105' : 'bg-gray-900/60'}`}>
                            <div className="flex items-center min-w-0">
                                <span className={`text-lg font-bold w-8 text-center flex-shrink-0 ${isLeader ? 'text-gray-900' : 'text-cyan-400'}`}>{index + 1}</span>
                                <span className={`ml-3 font-semibold truncate ${isLeader ? 'text-gray-900' : 'text-white'}`}>{data.name}</span>
                                {isLeader && <TrophyIcon className="w-5 h-5 ml-2 text-yellow-300 flex-shrink-0" />}
                            </div>
                            <span className={`text-xl font-bold px-3 py-1 rounded-md ${isLeader ? 'bg-gray-900/20 text-white' : 'bg-cyan-500/20 text-cyan-300'}`}>{data.gamesWon}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const MatchCard = ({ match, onScoreChange }) => {
    const handleScoreChange = (team, value) => {
        const score = parseInt(value, 10);
        if (isNaN(score) || score < 0 || score > 6) return;
        if (team === 1) { onScoreChange(match.id, score, 6 - score); } 
        else { onScoreChange(match.id, 6 - score, score); }
    };
    return (
        <div className="bg-gray-900/70 rounded-lg p-4 border border-gray-700">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
                <div className="font-semibold text-white break-words w-full sm:w-2/5">{match.team1.join(' y ')}</div>
                <div className="flex items-center justify-center gap-2 flex-shrink-0">
                    <input type="number" value={match.score1 ?? ''} onChange={(e) => handleScoreChange(1, e.target.value)} min="0" max="6" className="w-16 bg-gray-800 text-white text-center font-bold text-lg rounded-md p-2 border border-gray-600 focus:ring-2 focus:ring-cyan-500" />
                    <span className="text-gray-400 font-bold">-</span>
                    <input type="number" value={match.score2 ?? ''} onChange={(e) => handleScoreChange(2, e.target.value)} min="0" max="6" className="w-16 bg-gray-800 text-white text-center font-bold text-lg rounded-md p-2 border border-gray-600 focus:ring-2 focus:ring-cyan-500" />
                </div>
                <div className="font-semibold text-white break-words w-full sm:w-2/5">{match.team2.join(' y ')}</div>
            </div>
        </div>
    );
};

const TournamentScreen = ({ tournament, setTournament, onFinish }) => {
    const handleScoreChange = (matchId, score1, score2) => {
        const newRounds = tournament.rounds.map(round => ({
            ...round,
            matches: round.matches.map(match =>
                match.id === matchId ? { ...match, score1, score2 } : match
            )
        }));
        setTournament(prev => ({ ...prev, rounds: newRounds }));
    };

    const calculatedScores = useMemo(() => {
        const scores = {};
        if (!tournament) return {};
        if (tournament.mode === 'rotating' && tournament.players) {
            tournament.players.forEach(player => { scores[player] = { name: player, gamesWon: 0 }; });
            tournament.rounds.forEach(round => round.matches.forEach(match => {
                if (match.score1 !== null) match.team1.forEach(p => { if(scores[p]) scores[p].gamesWon += match.score1 });
                if (match.score2 !== null) match.team2.forEach(p => { if(scores[p]) scores[p].gamesWon += match.score2 });
            }));
        } else {
            tournament.pairs.forEach(pair => { scores[pair.id] = { name: pair.name || pair.players.join(' y '), gamesWon: 0, players: pair.players }; });
            tournament.rounds.forEach(round => round.matches.forEach(match => {
                if (match.score1 !== null && scores[match.pair1Id]) scores[match.pair1Id].gamesWon += match.score1;
                if (match.score2 !== null && scores[match.pair2Id]) scores[match.pair2Id].gamesWon += match.score2;
            }));
        }
        return scores;
    }, [tournament]);

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    {tournament.rounds.map(round => (
                        <div key={round.id} className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-xl border border-white/20">
                            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Ronda {round.id}</h3>
                            <div className="space-y-4">
                                {round.matches.length > 0 ? round.matches.map(match => ( <MatchCard key={match.id} match={match} onScoreChange={handleScoreChange}/>)) : <p className="text-gray-400">No hay partidos en esta ronda.</p>}
                            </div>
                            {round.resting.length > 0 && (
                                <div className="mt-6">
                                    <h4 className="text-lg font-semibold text-gray-300">Descansan:</h4>
                                    <p className="text-gray-400">{round.resting.join(', ')}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="lg:col-span-1">
                   <div className="sticky top-8">
                        <Leaderboard scores={calculatedScores} />
                        <button onClick={() => onFinish(calculatedScores)} className="w-full mt-8 bg-green-500 text-gray-900 font-bold py-3 rounded-lg text-lg hover:bg-green-400 transition transform hover:scale-105 shadow-xl">Finalizar Torneo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const QrCodeDisplay = ({ scores }) => {
    // ... (El código del componente QrCodeDisplay se mantiene igual)
    const qrUrl = useMemo(() => { if (!scores || Object.keys(scores).length === 0) return ''; try { const data = encodeURIComponent(JSON.stringify(scores)); const baseUrl = window.location.href.split('?')[0]; const url = `${baseUrl}?results=${data}`; return `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(url)}`; } catch (error) { console.error("Error generating QR URL", error); return ''; } }, [scores]);
    if (!qrUrl) return null;
    return (
        <div className="mt-8 p-4 bg-gray-900/50 rounded-lg">
            <h3 className="text-lg font-semibold text-cyan-300 mb-2">Compartir Resultados</h3>
            <img src={qrUrl} alt="QR Code for results" className="mx-auto rounded-md border-4 border-white"/>
            <p className="text-sm text-gray-400 mt-2">Escanea el QR para ver los resultados.</p>
        </div>
    );
};

const FinalScreen = ({ scores, onRestart }) => {
    // ... (El código del componente FinalScreen se mantiene igual)
  const sortedScores = useMemo(() => { if (!scores) return []; return Object.values(scores).sort((a, b) => b.gamesWon - a.gamesWon); }, [scores]);
  if (sortedScores.length === 0) { return ( <div className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 text-white text-center"><h1 className="text-3xl font-bold">No hay resultados.</h1><button onClick={onRestart} className="mt-8 w-full bg-cyan-500 text-gray-900 font-bold py-3 rounded-lg text-lg hover:bg-cyan-400 transition transform hover:scale-105 shadow-xl">Nuevo Torneo</button></div>) }
  const winner = sortedScores[0];
  const winners = sortedScores.filter(s => s.gamesWon === winner.gamesWon);
  const animationStyle = { animation: 'float 3s ease-in-out infinite' };
  const keyframes = `@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }`;

    return (
    <div className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20 text-white text-center">
      <style>{keyframes}</style>
      <TrophyIcon className="w-24 h-24 mx-auto text-yellow-400" />
      <h1 className="text-3xl md:text-4xl font-bold mt-4">¡Torneo Finalizado!</h1>
      <div className="my-8">
        <h2 className="text-2xl font-semibold text-cyan-300">{winners.length > 1 ? 'Ganadores' : 'Ganador'}</h2>
        <div className="mt-2 text-3xl font-bold text-yellow-300 bg-gray-900/50 py-4 px-6 rounded-lg relative">
          <CrownIcon style={animationStyle} className="w-12 h-12 absolute -top-8 left-1/2 -translate-x-1/2 text-yellow-300"/>
          <p className="mt-4 break-words">{winners.map(w => w.name).join(' y ')}</p>
          {winners.length === 1 && winners[0].players && (<p className="text-lg text-cyan-200 mt-1 font-normal">({winners[0].players.join(' y ')})</p>)}
        </div>
        <p className="mt-4 text-xl">con {winner.gamesWon} juegos ganados</p>
      </div>
      <div className="w-full bg-gray-900/50 rounded-lg p-4">
        <h3 className="text-xl font-bold mb-4">Ranking Final</h3>
        <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
          {sortedScores.map((score, index) => (
            <div key={score.name + index} className={`flex justify-between items-center p-3 rounded-md ${index < 3 ? 'bg-cyan-500/20' : 'bg-gray-800/60'}`}>
              <span className="font-semibold text-left break-words pr-4">{index + 1}. {score.name}</span>
              <span className="font-bold flex-shrink-0">{score.gamesWon} juegos</span>
            </div>
          ))}
        </div>
      </div>
      <QrCodeDisplay scores={scores} />
      <button onClick={onRestart} className="mt-8 w-full bg-cyan-500 text-gray-900 font-bold py-3 rounded-lg text-lg hover:bg-cyan-400 transition transform hover:scale-105 shadow-xl">Nuevo Torneo</button>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  const [screen, setScreen] = useState('settings');
  const [tournament, setTournament] = useState(null);
  const [finalScores, setFinalScores] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const resultsData = urlParams.get('results');
    if (resultsData) {
        try {
            const scores = JSON.parse(decodeURIComponent(resultsData));
            setFinalScores(scores); setScreen('final');
            window.history.replaceState({}, document.title, window.location.pathname);
            return;
        } catch (error) { console.error("Error parsing results from URL", error); }
    }
    try {
      const savedState = localStorage.getItem('padelTournament');
      if (savedState) {
        const { screen, tournament, finalScores } = JSON.parse(savedState);
        setScreen(screen); setTournament(tournament); setFinalScores(finalScores);
      }
    } catch (error) { console.error("Failed to load state from localStorage", error); }
  }, []);

  useEffect(() => {
    try {
      const stateToSave = { screen, tournament, finalScores };
      localStorage.setItem('padelTournament', JSON.stringify(stateToSave));
    } catch (error) { console.error("Failed to save state to localStorage", error); }
  }, [screen, tournament, finalScores]);

  const handleStartTournament = ({ players, mode, courts, pairs: preformedPairs }) => {
    let rounds = [];
    let pairs = preformedPairs || null;
    if (mode === 'rotating') {
      rounds = generateRotatingRounds(players, parseInt(courts, 10));
    } else {
      if (!pairs) {
          const shuffledPlayers = shuffleArray([...players]);
          pairs = [];
          for (let i = 0; i < shuffledPlayers.length; i += 2) {
            const pairPlayers = [shuffledPlayers[i], shuffledPlayers[i+1]];
            pairs.push({ id: `p${i/2 + 1}`, players: pairPlayers, name: pairPlayers.join(' y ') });
          }
      }
      rounds = generateFixedRounds(pairs, parseInt(courts, 10));
    }
    setTournament({ players, mode, courts, rounds, pairs });
    setScreen('tournament');
  };
  
  const handleFinishTournament = (scores) => { setFinalScores(scores); setScreen('final'); };
  const handleRestart = () => { setScreen('settings'); setTournament(null); setFinalScores(null); localStorage.removeItem('padelTournament'); };

  const renderScreen = () => {
    switch (screen) {
      case 'tournament': return <TournamentScreen tournament={tournament} setTournament={setTournament} onFinish={handleFinishTournament} />;
      case 'final': return <FinalScreen scores={finalScores} onRestart={handleRestart} />;
      case 'settings': default: return <SettingsScreen onStart={handleStartTournament} />;
    }
  };

  return (
    <main className="min-h-screen w-full bg-gray-900 text-white font-sans flex justify-center bg-cover bg-center p-4 sm:p-6 md:p-8" style={{backgroundImage: "url('https://images.unsplash.com/photo-1554141142-5c42338e1a2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
        {renderScreen()}
    </main>
  );
}
