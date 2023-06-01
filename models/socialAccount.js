module.exports = (sequelize, DataTypes) => {
    const SocialAccount = sequelize.define('SocialAccount', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        googleEmail: {
            type: DataTypes.STRING,
            required: false
        },
        twitterEmail: {
            type: DataTypes.STRING,
            required: false
        },
        gitHubEmail: {
            type: DataTypes.STRING,
            required: false
        }
    });

    SocialAccount.associate = ((models) => {
        SocialAccount.belongsTo(models.User);
    });

    return SocialAccount;
}