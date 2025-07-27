const matches = [
  "hotdog",
  "hot dog",
  "hot-dog",
  "hotdogger",
  "hot dogger",
  "hotdoggers",
  "hot doggers",
  "hotdogs",
  "hot dogs",
  "hot-dogger",
  "hot-doggers",
  "hot-dogs",
  "h0tdog",
  "h0t dog",
  "h0t-dog",
  "h0tdogger",
  "h0t dogger",
  "h0tdoggers",
  "h0t doggers",
  "h0tdogs",
  "h0t dogs",
  "h0t-d-og",
  "h0t d og",
  "h0t-d-ogger",
  "h0t d ogger",
  "h0t-d-oggers",
  "h0t d oggers",
  "h0t-d-ogs",
  "h0t d ogs",
  "hot-d0g",
  "hot d0g",
  "h0t-d0g",
  "h0t d0g",
  "h0td0g",
  "hotd0g",
];

const foodRecognizer = (text: string): string => {
  const lowerText = text.toLowerCase();
  const isHotdog = matches.some((match) => lowerText.includes(match));

  if (isHotdog) return "It's a hotdog!";

  return "It's not a hotdog.";
};

export default foodRecognizer;
