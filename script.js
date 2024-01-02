// Set the Tone.  There should be three tones: Yes, No, Maybe.  For each tone, there are three possibilities.

const tone = [
  "The possibilities are good",
  "Yes, you can do this",
  "Yes",
  "The outcome is unclear",
  "You might need to improve your odds",
  "The chances are a mixed bag",
  "It does not look good",
  "Try again",
  "No",
];

// Timeframe or term.  This should set the time frame for the fortune message.

const term = ["immediately", "in the short term", "in the long term"];

// Adjective.  This should add an adjective to show some descriptiveness to the message.

const adjective = [
  "absurd",
  "affable",
  "affluent",
  "deafening",
  "deprived",
  "destitute",
  "devastating",
  "dexterous",
  "dubious",
  "elaborate",
  "evocative",
  "excruciating",
  "far-fetched",
  "fearless",
  "frivolous",
  "gleeful",
  "gorgeous",
  "gritty",
  "gullible",
  "horrific",
  "immense",
  "impeccable",
  "imposing",
  "jittery",
  "mind-blowing",
  "mind-boggling",
  "miraculous",
  "packed",
  "perceptible",
  "petrified",
  "plausible",
  "preposterous",
  "rusty",
  "silly",
  "swamped",
  "thrilled",
];

// Assembly.  This should assemble the the parts of the message and return the message.

const answerRandomGenerator = (ansArray) => {
  return ansArray[Math.floor(Math.random() * ansArray.length)];
};

const ansAssemblierFunction = () => {
  let ansAssemblier = document.getElementById("mixedMessageAnswer");

  ans = `${answerRandomGenerator(
    tone
  )}. To succeed in life you must be ${answerRandomGenerator(
    adjective
  )}. This will happen ${answerRandomGenerator(term)}.`;
  console.log(ans);

  ansAssemblier.innerHTML = ans;
};
