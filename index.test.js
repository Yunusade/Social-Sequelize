const { Comment, Like, Post, Profile, User } = require("./index");
const users = require("./seed/users.json");
const profiles = require("./seed/profiles.json");
const likes = require("./seed/likes.json");
const { db } = require("./db/connection.js");

describe("Social Sequelzie Test", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the test suite is run
    await db.sync({ force: true });
  });

  // Write your tests here

  test("user can only have one profile", async function () {
    let myUser = await User.create(users[0]);
    let myProfile = await Profile.create(profiles[0]);

    await myUser.setProfile(myProfile);
    const getProfile = await myUser.getProfile();
    expect(getProfile instanceof Profile).toBeTruthy();
  });

  test("user can have many likes", async function () {
    let myUser = await User.create(users[0]);
    let myLike = await Like.create(likes[0]);
    let myLike2 = await Like.create(likes[0]);

    await myUser.addLike(myLike);
    await myUser.addLike(myLike2);

    const getLikes = await myUser.getLikes();
    console.log(getLikes);
    expect(getLikes.length).toBe(2)
    expect(getLikes instanceof Like).toBeTruthy;
  });
});
