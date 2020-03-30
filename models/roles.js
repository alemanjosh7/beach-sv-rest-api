module.exports = (sequelize, DataTypes) => {
    const Roles = sequelize.define("Roles", {
        text: DataTypes.STRING
    });

    Roles.associate = models => {
        Roles.belongsTo(models.User,{
            foreignKey: {
                allowNull: false
            }
        });
    }


    return Roles;
};