module.exports = (Sequelize, DataTypes) => {

    const users = Sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull:false
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: 'USER'
        },
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

    return users;    
}
