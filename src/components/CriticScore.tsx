interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const getScoreColor = () => {
    if (score < 60) return "text-red-300";

    if (score < 80) return "text-yellow-300";

    return "text-green-300";
  };

  return (
    <div
      className={`px-2 py-1 border rounded-lg flex items-center justify-center text-sm font-bold ${getScoreColor()}`}
    >
      {score}
    </div>
  );
};

export default CriticScore;
