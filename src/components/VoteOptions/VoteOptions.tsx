import type { VotesType } from "../types/votes";
import css from "./VoteOptions.module.css";

export interface VoteOptionsProps {
  onVote: (x: VotesType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VotesOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button onClick={() => onVote("good")} className={css.button}>
        Good
      </button>
      <button onClick={() => onVote("neutral")} className={css.button}>
        Neutral
      </button>
      <button onClick={() => onVote("bad")} className={css.button}>
        Bad
      </button>
      {canReset && (
        <button onClick={onReset} className={`${css.button} ${css.reset}`}>
          Reset
        </button>
      )}
    </div>
  );
}
