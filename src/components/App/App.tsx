import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import { useState } from "react";
import type { Votes, VotesType } from "../types/votes";
import VotesOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteState";
import Notification from "../Notification/Notification";

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function handleVote(type: VotesType): void {
    setVotes({
      ...votes,
      [type]: votes[type] + 1,
    });
  }

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  function resetVotes() {
    return setVotes({ good: 0, neutral: 0, bad: 0 });
  }
  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VotesOptions
          onVote={handleVote}
          onReset={resetVotes}
          canReset={totalVotes > 0}
        />
        {totalVotes === 0 ? (
          <Notification />
        ) : (
          <VoteStats
            votes={votes}
            totalVotes={totalVotes}
            positiveRate={positiveRate}
          />
        )}
      </div>
    </>
  );
}
