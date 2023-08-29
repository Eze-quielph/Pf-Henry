const { User, Song } = require("../src/db");

class DataService {
  constructor(songs, users) {
    this.songs = songs;
    this.users = users;
  }

  async initializeData() {
    this.users.forEach(async ({ username, password, email }) => {
      const existingUser = await User.findOne({ where: { email } });
      if (!existingUser) {
        const newUser = {
          username,
          password,
          email,
        };
        await User.create(newUser);
      } else {
        console.log(
          `User with email ${email} already exists. Skipping creation.`
        );
      }
    });

    this.songs.forEach(
      async ({ name, artist, genre, song, image, isActive, description }) => {
        const existingSong = await Song.findOne({ where: { name } });
        if (!existingSong) {
          const newSong = {
            name,
            song,
            description,
            artist,
            genre,
            image,
            isActive,
          };
          await Song.create(newSong);
        } else {
          console.log(
            `User with email ${name} already exists. Skipping creation.`
          );
        }
      }
    );
  }
}

module.exports = DataService;
