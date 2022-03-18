'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('congregations', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name : {
        type: Sequelize.STRING,
        allowNull: false
      },
      is_sector_head: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      sector_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      member_id:{
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('congregations');
  }
};