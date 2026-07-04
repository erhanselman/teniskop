import React, { useEffect, useState } from "react";

export default function Canli() {
    const [matches, setMatches] = useState([]);

    const formatDate = (isoDate) => {
        if (!isoDate) return "-";

        return new Intl.DateTimeFormat("tr-TR", {
            timeZone: "Europe/Istanbul",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        }).format(new Date(isoDate));
    };

    useEffect(() => {
        fetch(
            "https://sportscore.com/api/widget/matches/?sport=tennis&limit=50"
        )
            .then((res) => res.json())
            .then((data) => {
                const sorted = [...data.matches].sort(
                    (a, b) => new Date(b.time) - new Date(a.time)
                );

                setMatches(sorted);
            });
    }, []);

    return (
        <div>
            <h2>🎾 Tennis Matches</h2>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    marginTop: 20,
                }}
            >
                <thead>
                    <tr>
                        <th>Tarih</th>
                        <th>Ev Sahibi</th>
                        <th></th>
                        <th>Deplasman</th>
                        <th>Skor</th>
                        <th>Durum</th>
                        <th>Turnuva</th>
                        <th>Detay</th>
                    </tr>
                </thead>

                <tbody>
                    {matches.map((match) => (
                        <tr key={match.slug}>
                            <td>{formatDate(match.time)}</td>

                            <td>
                                <img
                                    src={match.home_logo}
                                    alt={match.home}
                                    width={30}
                                    style={{ verticalAlign: "middle", marginRight: 8 }}
                                />
                                {match.home}
                            </td>

                            <td>vs</td>

                            <td>
                                <img
                                    src={match.away_logo}
                                    alt={match.away}
                                    width={30}
                                    style={{ verticalAlign: "middle", marginRight: 8 }}
                                />
                                {match.away}
                            </td>

                            <td>
                                {match.home_score} - {match.away_score}
                            </td>

                            <td>{match.status_text}</td>

                            <td>
                                <img
                                    src={match.competition_logo}
                                    alt={match.competition}
                                    width={25}
                                    style={{ verticalAlign: "middle", marginRight: 8 }}
                                />
                                {match.competition}
                            </td>

                            <td>
                                <a href={`https://sportscore.com${match.url}`} target="_blank" rel="noreferrer">
                                    Görüntüle
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}