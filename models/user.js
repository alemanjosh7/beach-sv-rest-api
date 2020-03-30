module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    User.associate = models => {
        User.hasOne(models.Profile, {
            onDelete: "cascade"
        });
        User.hasOne(models.Roles, {
            onDelete: "cascade"
        });
    };

    return User;
    
};