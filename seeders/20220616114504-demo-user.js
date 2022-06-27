"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    // order matters in seed data. As channel is dependent on user_id so first we must have user data.
    await queryInterface.bulkInsert(
      "user",
      [
        {
          id: 1,
          name: "user1",
          email: "user1@test.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: "user2",
          email: "user2@test.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: "user3",
          email: "user3@test.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "channel",
      [
        {
          id: 1,
          name: "channel1",
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: "channel2",
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "video",
      [
        {
          id: 1,
          title: "video1ByUser1",
          channel_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          title: "video2ByUser1",
          channel_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          title: "video3ByUser2",
          channel_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
