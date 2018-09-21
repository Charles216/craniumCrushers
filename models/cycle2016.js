//CYCLE2016
module.exports = function (sequelize, DataTypes) {
    var Cycle2016 = sequelize.define("cycle2016", {
        display_name: DataTypes.STRING,
        contributor_name: DataTypes.STRING,
        contributor_company: DataTypes.STRING,
        contributor_city: DataTypes.STRING,
        total_contribution: DataTypes.INTEGER,
        percent_to_dems: DataTypes.INTEGER,
        percent_to_reps: DataTypes.INTEGER
    });
    return Cycle2016;
};