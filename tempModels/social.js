// module.exports = (sequelize, DataTypes) => {
//     const SocialNetwork = sequelize.define('socialNetwork', {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true,  
//         },
//         nameSocial: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         authURL: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         }
//     });

//     SocialNetwork.associate = ((models) => {
//         SocialNetwork.hasMany(User)
//     });
    
//     return SocialNetwork;
// }