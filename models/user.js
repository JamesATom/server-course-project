module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        deletedOrNot: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    User.associate = ((models) => {
        User.hasOne(models.SocialAccount, {
            type: DataTypes.UUID,
            allowNull: true
        });
    });

    // User.associate = ((models) => {
    //     User.hasMany(models.Review, {
    //         foreignKey: 'userId'
    //     })
    // });

    // User.associate = ((models) => {
    //     User.hasMany(models.Comment, {
    //         foreignKey: 'userId'
    //     })
    // });

    // User.associate = ((models) => {
    //     User.belongsTo(models.SocialNetwork);
    // });

    return User;    
}
