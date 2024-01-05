const emojiContainer = document.getElementById("emoji-container");
const EmojiTitle = document.getElementById("emoji-title");
const emojis = [];

async function getEmojiData() {
  const url = `https://emoji-api.com/emojis?access_key=4a35ab0d75bfe3ada1b73922320f1a59e90fb89d`;

  try {
    const response = await fetch(url).then((res) => res.json());
    //   console.log(response);

    for (let i = 0; i < 1000; i++) {
      emojis.push({
        character: response[i].character,
        title: response[i].unicodeName.slice(5),
      });
    }
    //   console.log(emojis);
    emojiContainer.addEventListener("click", () => {
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      emojiContainer.innerText = emoji.character;
      //   console.log(emoji.title);
      EmojiTitle.innerText = emoji.title;
    });
  } catch (error) {
    console.log("Something went wrong..." + error);
    emojiContainer.innerText = "❌";
    EmojiTitle.innerText = "Something went wrong... Try again later";
  }
}

getEmojiData();
