export function getRandomChat(greetings) {
    // Pick a random index from the greetings array
    const randomIndex = Math.floor(Math.random() * liveChatSentences.length);
    // Return the greeting at the random index
    return liveChatSentences[randomIndex];
  }
  
  // Example usage
  const liveChatSentences = [
    "Hello everyone!",
    "How's it going?",
    "Anyone here from New York?",
    "What's up?",
    "Can you hear me?",
    "What's the topic today?",
    "Any suggestions for movies?",
    "Let's get started!",
    "Who else is excited?",
    "Nice to see you all here.",
    "Any questions so far?",
    "Please share your thoughts.",
    "I love this community!",
    "Can someone help me with this?",
    "That's interesting.",
    "Where are you all from?",
    "Great job!",
    "Looking forward to the next session.",
    "See you all next time!","Hi","Hello","How are you doing?",
    "😂😂","I ate Chole Bhature today😋","Keep Grinding🔥"
  ];
  